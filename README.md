# 2021: Eusociality

Theme site for LG 2021.

- [Design](#design)
- [Setup](#setup)
- [Deploying](#deploying)
- [Organization](#repo-organization)
- [Best Practices](#best-practices)

## Design

- [Figma (Web Exploration)](https://www.figma.com/file/IYJ6IpSwQ1Qn5WIsuWFIAc/Web-Team-Exploration?node-id=37%3A2)

## Setup

You will need [Node](https://nodejs.org/en/), along with `npm`, which comes
installed with it, so please install these before continuing.

After cloning this repo, first install the necessary packages (will take a while)

```sh
npm install
```

Then you can run

```sh
npm start
```

to show the website on your local machine. The website should be available at
`localhost:3000` by default, and open it in your default browser tab. If not,
just navigate to that web address by typing it into your browser.

### Testing

```sh
npm test        # vitest unit tests
npm run e2e     # headless Chrome smoke check against the dev server
```

See [`docs/testing.md`](docs/testing.md) for the full story — in particular,
the `npm run e2e` harness is what you want when something on the landing
page isn't rendering, since unit tests can't cover the three.js code path.

## Deploying

Our live site will be hosted on the `gh-pages` branch, to separate the development code from the production code. To deploy, run

```sh
npm run deploy
```

## Repo Organization

- `assets/`: any sort of binary should go here, images, fonts, 3d models
- `public/`: any file we want copied to our final webpage
- `src/`: all of the code lives here
  - `components/`: js components used by the page
  - `pages/`: top-level route components
  - `styles/`: where all the css (we are using SASS) lives
  - `test/`: vitest unit tests
  - `App.jsx`: the main js entrypoint (besides `index.jsx`)
  - `constants.js`: constants for the project
  - `index.jsx`: don't touch this unless you have a good reason to
- `scripts/`: repo-level tooling (e.g. the headless Chrome e2e harness)
- `docs/`: internal docs, including the [testing guide](docs/testing.md)
- `vite.config.js`: build + dev-server configuration
- `.eslintrc`: styling definitions

## Best Practices

- `git` is **not** a drive and doesn't perform well with big files, so if
possible, try to upload images/gifs/videos elsewhere. An exception is fonts
since they are used site-wide.
- Unless absolutely necessary, try to use the compressed image version vs the
non-lossy version, e.g. use JPEG instead of PNG. This is because network
requests are generally very long and can slow down the site.

## `git` Cheatsheet

If you are familiar with Github desktop, then go ahead and use that.

Otherwise, if you're ok with doing some terminal operations, read ahead...

### How do I get updates to my repo?

```sh
git pull
```

### Someone told me to go to their branch, what do they mean?

Branches are like versions of the repo. To navigate to different branches, run:

```sh
git checkout branch_name
```

For example, if someone had a branch called `main_animation`, then I would run `git checkout main_animation`.

### I have changes I don't want, and would be ok with whatever is on Github

You can just delete your repo and clone a new copy of the repo.

### I have changes that I want to apply, but the current repo has more updates, so I can't pull?

This is because `git` doesn't want to override your changes. What you want to do is:

1. Save your changes: `git stash`
2. Update your repo: `git pull`
3. Reapply your "stashed away" changes: `git stash pop`
4. You might get some merge conflicts, so make sure to fix those before you commit.

## Videos

Each line page plays a background teaser video hosted on Streamable. The full show video is on YouTube. If these ever go down, re-upload and update the URLs in `src/data/line_data.js` (`video_ready` field) and `src/constants.js` (`SHOW_VIDEO_LINK`).

| # | Line | URL |
|---|------|-----|
| 01 | Gossamer Idle | https://streamable.com/9z91c9 |
| 02 | Nexus | https://streamable.com/9furjq |
| 03 | Chrysophyta | https://streamable.com/vn4mnz |
| 04 | Mirror | https://streamable.com/zaclht |
| 05 | The Marianas Trench | https://streamable.com/zq5rhe |
| 06 | Obfuscate | https://streamable.com/79rktz |
| 07 | Salvos | https://streamable.com/fjsba8 |
| 08 | Bloom | https://streamable.com/rxr4gk |
| 09 | Renasci | https://streamable.com/hgs89l |
| 10 | Bound | https://streamable.com/bnk0lt |
| 11 | Invasion | https://streamable.com/6gtby0 |
| 12 | Somatic | https://streamable.com/ssifa5 |
| 13 | Relinquo | https://streamable.com/6oyxs4 |
| 14 | Digital Warfare | https://streamable.com/4l78dp |
| 15 | Icarus | https://streamable.com/op8qo6 |
| 16 | Alumni | https://streamable.com/3z2z9z |

**Show video:** https://www.youtube.com/watch?v=dEj6rc5ifhg

## Acknowledgments

- [https://github.com/DerSchmale/threejs-thin-film-iridescence] for iridescence texture
- [https://github.com/EthanNakache/Sprat-type] Sprat Type font used on the site
