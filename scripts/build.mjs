import assert from "node:assert/strict";
import { access, cp, mkdir, readFile } from "node:fs/promises";
import { desk } from "../api/desk.js";

const required = [
  "index.html",
  "styles.css",
  "api/desk.js",
  "images/ilse.jpg",
  "images/luz.jpg",
  "images/nia.jpg",
  "images/mira.jpg",
  "images/nia-escalade.jpg",
  "images/nia-sidewalk.jpg",
];

for (const file of required) {
  await access(file);
}

const html = await readFile("index.html", "utf8");
const css = await readFile("styles.css", "utf8");

assert.match(html, /id="desk"/);
assert.match(html, /\/api\/desk/);
assert.match(css, /color-scheme:\s*light dark/);
assert.equal(desk.project, "File issue 666");
assert.equal(desk.crew.length, 4);
assert.equal(desk.handoffs.length, 4);
assert.deepEqual(
  desk.crew.map((person) => person.passesTo),
  ["ilse", "luz", "nia", "mira"],
);

await mkdir("dist", { recursive: true });
await cp("index.html", "dist/index.html");
await cp("styles.css", "dist/styles.css");
await cp("images", "dist/images", { recursive: true });
await cp("api", "dist/api", { recursive: true });

console.log(`build ok: ${desk.project}, ${desk.crew.length} lanes`);
