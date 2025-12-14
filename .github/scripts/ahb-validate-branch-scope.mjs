import fs from "node:fs";

/* ---------------- Utilities ---------------- */

function fail(msg) {
  console.error(`❌  ${msg}`);
  process.exit(1);
}

function ok(msg) {
  console.log(`✅  ${msg}`);
}

function readLines(path) {
  const raw = fs.readFileSync(path, "utf8").trim();
  if (!raw) return [];
  return raw.split("\n").map((s) => s.trim()).filter(Boolean);
}

function isValidDate(date) {
  return /^\d{4}\.\d{2}\.\d{2}$/.test(date);
}

function stripV(vDate) {
  if (!/^v\d{4}\.\d{2}\.\d{2}$/.test(vDate)) return null;
  return vDate.slice(1);
}

function enforceAuthor(seg) {
  if (!/^author-[A-Za-z0-9-]+$/.test(seg)) {
    fail(`Invalid author segment "${seg}" (expected author-<github_username>)`);
  }
}

function enforceSimpleId(id) {
  if (!/^[a-z0-9_]+$/.test(id)) {
    fail(`Invalid id "${id}" (expected ^[a-z0-9_]+$)`);
  }
}

function enforceLibraryId(id) {
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
    fail(`Invalid library "${id}"`);
  }
}

function enforceVariantId(id) {
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
    fail(`Invalid variant "${id}"`);
  }
}

/* ---------------- Allowed Exact Files ---------------- */

function controllerExact(device, library, variant) {
  return new Set([
    `library/controllers/${device}/device.mdx`,
    `library/controllers/${device}/device.json`,
    `library/controllers/${device}/${device}.png`,
    `library/controllers/${device}/${device}.pdf`,
    `library/controllers/${device}/changelog.json`,

    `library/controllers/${device}/${library}/${library}.mdx`,
    `library/controllers/${device}/${library}/${library}.json`,
    `library/controllers/${device}/${library}/${library}.png`,
    `library/controllers/${device}/${library}/changelog.json`,

    `library/controllers/${device}/${library}/${variant}/${variant}.mdx`,
    `library/controllers/${device}/${library}/${variant}/${variant}.json`,
    `library/controllers/${device}/${library}/${variant}/${variant}.png`,
    `library/controllers/${device}/${library}/${variant}/changelog.json`,
  ]);
}

function hookExact(hook) {
  return new Set([
    `library/hooks/${hook}/${hook}.mdx`,
    `library/hooks/${hook}/${hook}.json`,
    `library/hooks/${hook}/${hook}.png`,
    `library/hooks/${hook}/changelog.json`,
  ]);
}

function automationExact(id) {
  return new Set([
    `library/automations/${id}/${id}.mdx`,
    `library/automations/${id}/${id}.json`,
    `library/automations/${id}/${id}.png`,
    `library/automations/${id}/changelog.json`,
  ]);
}

/* ---------------- Main ---------------- */

const [, , branchName, diffFile] = process.argv;

if (!branchName) fail("Missing branch name");
if (!diffFile) fail("Missing diff file");

const changedFiles = readLines(diffFile);
if (!changedFiles.length) {
  fail("No changed files detected (fail-safe)");
}

const parts = branchName.split("/");

if (parts[0] !== "ahb") {
  fail(`Branch must start with ahb/: ${branchName}`);
}

const category = parts[1];
let allowedPrefixes = [];
let allowedExact = new Set();

/* ---------------- Controllers ---------------- */
/*
ahb/controllers/<device_id>/<library>/<variant>/vYYYY.MM.DD/author-<user>
*/
if (category === "controllers") {
  if (parts.length !== 7) {
    fail(`Controllers branch must have 7 segments`);
  }

  const device = parts[2];
  const library = parts[3];
  const variant = parts[4];
  const vDate = parts[5];
  const author = parts[6];

  enforceSimpleId(device);
  enforceLibraryId(library);
  enforceVariantId(variant);
  enforceAuthor(author);

  const date = stripV(vDate);
  if (!date || !isValidDate(date)) {
    fail(`Invalid version segment "${vDate}"`);
  }

  allowedPrefixes.push(
    `library/controllers/${device}/${library}/${variant}/${date}/`
  );

  allowedExact = controllerExact(device, library, variant);
}

/* ---------------- Hooks ---------------- */
/*
ahb/hooks/<hook_id>/vYYYY.MM.DD/author-<user>
*/
if (category === "hooks") {
  if (parts.length !== 5) {
    fail(`Hooks branch must have 5 segments`);
  }

  const hook = parts[2];
  const vDate = parts[3];
  const author = parts[4];

  enforceSimpleId(hook);
  enforceAuthor(author);

  const date = stripV(vDate);
  if (!date || !isValidDate(date)) {
    fail(`Invalid version segment "${vDate}"`);
  }

  allowedPrefixes.push(`library/hooks/${hook}/${date}/`);
  allowedExact = hookExact(hook);
}

/* ---------------- Automations ---------------- */
/*
ahb/automations/<automation_id>/vYYYY.MM.DD/author-<user>
*/
if (category === "automations") {
  if (parts.length !== 5) {
    fail(`Automations branch must have 5 segments`);
  }

  const automation = parts[2];
  const vDate = parts[3];
  const author = parts[4];

  enforceSimpleId(automation);
  enforceAuthor(author);

  const date = stripV(vDate);
  if (!date || !isValidDate(date)) {
    fail(`Invalid version segment "${vDate}"`);
  }

  allowedPrefixes.push(`library/automations/${automation}/${date}/`);
  allowedExact = automationExact(automation);
}

/* ---------------- Enforcement ---------------- */

for (const file of changedFiles) {
  const inPrefix = allowedPrefixes.some((p) => file.startsWith(p));
  const exact = allowedExact.has(file);

  if (!inPrefix && !exact) {
    fail(
      `File outside allowed scope:\n  ${file}\n\n` +
        `Allowed prefixes:\n${allowedPrefixes.map((p) => `  - ${p}`).join("\n")}\n\n` +
        `Allowed exact files:\n${[...allowedExact].map((f) => `  - ${f}`).join("\n")}`
    );
  }
}

ok("Branch name and filesystem scope validation passed.");
