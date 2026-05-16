# Kids Empower Kids Redesign

This folder contains the rebuilt static site.

## Launch locally

```bash
cd /Users/parthgupta/kek/kidsempowerkids-redesign
./launch-local.sh
```

Optional custom port:

```bash
./launch-local.sh 8080
```

Then open:

`http://localhost:4173`

## Deploy

Pushing `main` will trigger the GitHub Pages workflow in
[/Users/parthgupta/kek/.github/workflows/deploy-pages.yml](/Users/parthgupta/kek/.github/workflows/deploy-pages.yml),
which publishes the contents of this folder.

This folder also includes [CNAME](/Users/parthgupta/kek/kidsempowerkids-redesign/CNAME)
for the custom domain `kidsempowerkids.net`.

To make the live domain use this redesign, you still need to:

1. Push this repo to GitHub.
2. Enable GitHub Pages for the repository.
3. Point the `kidsempowerkids.net` DNS records to GitHub Pages.
