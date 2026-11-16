# Reactor Core (the Wire)

Kevin's command hub for every project and business. It reads Kevin's **private** hub repo (`v7skull/kevin-r2-claude-hub`) through the GitHub API, using a fine-grained token that each device stores locally. There is no data, token or secret in this repo, only the page code.

Open: https://v7skull.github.io/Wire-App/ (GitHub Pages, branch `main`, root). Install it from Edge (… → Apps → Install this site as an app) or Add to Home Screen on a phone.

## Single source of truth
**This repo is the only copy of the Wire code.** Edit `index.html` here, never a copy elsewhere. (The old copy in the hub at `tools/wire/` was removed on 2026-11-16 because the two drifted.)

Every change must bump `WIRE_BUILD` in `index.html` (format `YYYYMMDDHHMMSS`, UTC). Open pages compare their build with the live file and reload themselves, and the footer shows the version, so Kevin can see at a glance that he's current.

Maintained by Claude.
