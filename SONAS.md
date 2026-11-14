# Sonas build of HelloCSV

Upstream v0.6.2 plus these changes, each also offered upstream as its own pull request:

- `renderImporter` returns `{ render, unmount }`, so the vanilla bundle can be removed again (HelloCSV/HelloCSV#329).
- Buttons are real `<button>`s, so the importer works from the keyboard.
- Headers are also matched to column labels when suggesting mappings.
- `is_integer` rejects numbers with a fraction.
- `react/`, `preact/` and `bundled/` have fallback package.json files, so Meteor 2 can import `hello-csv/bundled`.
- Columns can have a `description`, shown on the upload screen, while mapping and on the sheet header.

Drop a commit here once upstream has released it.

This branch commits the built `dist/` so the package can be installed straight from git, and drops the `prepare`
script that would otherwise install all dev dependencies on install. To update:

1. Rebase this branch onto the new upstream tag, keeping the commits upstream hasn't released yet.
2. `npm ci && npm test && npm run build`, then commit `dist/` with `git add -f dist`.
3. Bump the `-sonas.N` version and point sonas's package.json at the new commit.
