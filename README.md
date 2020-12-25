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
`localhost:8080` by default, and open it in your default browser tab. If not,
just navigate to that web address by typing it into your browser.

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
  - `styles/`: where all the css (we are using SASS) lives
  - `App.js`: the main js entrypoint (besides `index.js`)
  - `constants.js`: constants for the project
  - `index.js`: don't touch this unless you have a good reason to
- `.babelrc`: transpiling definitions
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

## Acknowledgments

- [https://github.com/DerSchmale/threejs-thin-film-iridescence] for iridescence texture