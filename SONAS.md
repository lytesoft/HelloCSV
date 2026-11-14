# Sonas build of HelloCSV

Upstream v0.6.2 plus one change: `renderImporter` returns `{ render, unmount }`, so the vanilla bundle can be
removed again (see the commit "Return the importer from renderImporter so it can be unmounted").

This branch commits the built `dist/` so the package can be installed straight from git, and drops the `prepare`
script that would otherwise install all dev dependencies on install. To update:

1. Rebase this branch onto the new upstream tag (keep the fix commit until upstream has it).
2. `npm ci && npm test && npm run build`, then commit `dist/` with `git add -f dist`.
3. Bump the `-sonas.N` version and point sonas's package.json at the new commit.
