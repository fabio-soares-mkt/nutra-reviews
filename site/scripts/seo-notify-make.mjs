import { readFile } from 'node:fs/promises';

const REQUIRED_TEXT_FIELDS = [
  'event',
  'status',
  'product',
  'cluster',
  'build_status',
  'commit_status',
  'branch',
  'publication_status',
];

const NULLABLE_TEXT_FIELDS = ['page_type', 'page_title', 'commit_hash', 'commit_message'];
const PAGE_TEXT_FIELDS = [
  'slug',
  'expected_url',
  'source_file',
  'build_status',
  'commit_status',
  'publication_status',
];

function isNonEmptyText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function requireText(value, field) {
  if (!isNonEmptyText(value)) {
    throw new Error(`${field} deve ser um texto não vazio.`);
  }
}

function requireNullableText(value, field) {
  if (value !== null) requireText(value, field);
}

function validatePayload(payload) {
  if (payload === null || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('O payload deve ser um objeto JSON.');
  }

  for (const field of REQUIRED_TEXT_FIELDS) requireText(payload[field], field);
  for (const field of NULLABLE_TEXT_FIELDS) requireNullableText(payload[field], field);

  if (typeof payload.push_required !== 'boolean') {
    throw new Error('push_required deve ser booleano.');
  }
  if (!Array.isArray(payload.pages)) {
    throw new Error('pages deve ser um array.');
  }

  const pages = payload.pages.map((page, index) => {
    const prefix = `pages[${index}]`;
    if (page === null || typeof page !== 'object' || Array.isArray(page)) {
      throw new Error(`${prefix} deve ser um objeto JSON.`);
    }

    const type = page.type ?? page.page_type;
    const title = page.title ?? page.page_title;
    requireText(type, `${prefix}.type`);
    requireText(title, `${prefix}.title`);
    for (const field of PAGE_TEXT_FIELDS) requireText(page[field], `${prefix}.${field}`);

    // Preserve both the requested format and the field names in the V5 webhook contract.
    return { ...page, type, title, page_type: type, page_title: title };
  });

  return { ...payload, pages };
}

async function main() {
  if (process.argv.length !== 3) {
    console.error('Uso: node scripts/seo-notify-make.mjs <payload-file.json>');
    return 1;
  }

  let rawPayload;
  try {
    rawPayload = await readFile(process.argv[2], 'utf8');
  } catch {
    console.error('MAKE_NOTIFICATION: FAILED (PAYLOAD_FILE_UNREADABLE)');
    return 1;
  }

  let payload;
  try {
    payload = validatePayload(JSON.parse(rawPayload));
  } catch (error) {
    const reason = error instanceof SyntaxError ? 'INVALID_JSON' : 'INVALID_PAYLOAD';
    console.error(`MAKE_NOTIFICATION: FAILED (${reason})`);
    if (reason === 'INVALID_PAYLOAD') console.error(error.message);
    return 1;
  }

  const webhookValue = process.env.NUTRALENS_MAKE_WEBHOOK_URL;
  if (!webhookValue) {
    console.error('MAKE_NOTIFICATION: FAILED (NUTRALENS_MAKE_WEBHOOK_URL_NOT_CONFIGURED)');
    return 1;
  }

  let webhookUrl;
  try {
    webhookUrl = new URL(webhookValue);
    if (webhookUrl.protocol !== 'https:') throw new Error('HTTPS required');
  } catch {
    console.error('MAKE_NOTIFICATION: FAILED (INVALID_WEBHOOK_URL; HTTPS_REQUIRED)');
    return 1;
  }

  let response;
  try {
    response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    console.error('MAKE_NOTIFICATION: FAILED (NETWORK_ERROR)');
    return 1;
  }

  if (!response.ok) {
    console.error(`MAKE_NOTIFICATION: FAILED (HTTP ${response.status})`);
    return 1;
  }

  console.log(`MAKE_NOTIFICATION: SENT (HTTP ${response.status})`);
  return 0;
}

process.exitCode = await main();
