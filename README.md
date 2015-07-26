# Swamp Water
Mixing all CSS templated site with Gulp.

## Overview

With marketing site content constantly changing, why not boilerplate all the text! Simply transcribe
all the data for all you html pages into `template-data.js`. This File can be a simple or complicated as you like.
Place all of your html files into `src/`. When you're ready, simply run `gulp` from your CLI and your compiled website will be ready in `dist/` for deployment!

## Install/Usage

1. Simply clone this repo. `git clone git@github.com:morriswchris/swamp-water <name-of-project>`
2. `cd <name-of-project>`
3. Copy all of your assets into `assets/`
4. Copy all of your HTML into `src/`
5. Edit all of your HTML with `{{ }}` notation and update `template-data.js` with your actual text
6. Run `gulp` to generate your site. All text changes simply need a re-run of `gulp` instead of editing to the HTML directly.

## Explaination

### template-data.js

template-data.js is a simple javascript object that contains translations. 

```
module.exports = {
  paragraph1: "This is my first paragraph"
}
```

### src/

This is the directory where all your html files are contained

```
src
└── index.html
```

### Sample index.html

HTML!

Input 

```
<html>
<head>
</head>
<body>
  <p>{{ paragraph1 }}</p>
</body>
</html>
```

Output

```
<html>
<head>
</head>
<body>
  <p>This is a test paragraph for showing how processhtml can work for you</p>
</body>
</html>
```
### Bonus: Assets

Anything in the `assets/` directory will be copied over to the `dist/` for you

```
assets
└── main.js
```

```
dist
├── assets
│   └── main.js
└── index.html
```

