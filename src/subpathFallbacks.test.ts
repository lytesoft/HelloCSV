import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// react/, preact/ and bundled/ each hold a package.json pointing at the same
// files as package.json "exports", for bundlers and tools that don't read
// "exports" (Meteor 2, Jest's default resolver, TypeScript's "node"
// resolution). Keep the two in step.
const root = resolve(__dirname, '..');
const readJson = (path: string) =>
  JSON.parse(readFileSync(resolve(root, path), 'utf8'));

const pkg = readJson('package.json');

describe.each(['react', 'preact', 'bundled'])('%s fallback', (entry) => {
  const exported = pkg.exports[`./${entry}`];
  const fallback = readJson(`${entry}/package.json`);
  const fromRoot = (path: string) => `./${entry}/${path}`;

  it('points at the files "exports" names', () => {
    expect(resolve(root, fromRoot(fallback.main))).toBe(
      resolve(root, exported.require)
    );
    expect(resolve(root, fromRoot(fallback.module))).toBe(
      resolve(root, exported.import)
    );
    expect(resolve(root, fromRoot(fallback.types))).toBe(
      resolve(root, exported.types)
    );
  });

  it('is published', () => {
    expect(pkg.files).toContain(`${entry}/package.json`);
  });
});
