+++
title = "Custom theme example presentation"
outputs = ["Reveal"]
[reveal_hugo]
custom_theme = "custom-theme.scss"
custom_theme_compile = true
+++

## 🖌 ️

## Custom Themes

*with Hugo Pipes*

---

This presentation uses a custom Reveal.js theme written in SCSS that is compiled by Hugo, using [Hugo pipes](https://gohugo.io/hugo-pipes/).

---

Hugo pipes compiles the source code of the theme, located in `assets/custom-theme.scss`, into CSS.

---

## 😄

No separate build process is required, which means you can iterate on your theme and your content at the same time.

---

To set a custom theme and use Hugo to compile it:

```toml
[reveal_hugo]
custom_theme = "custom-theme.scss"
custom_theme_compile = true
```

`custom-theme.scss` must live in the `assets` folder.

---

To pass compilation options, use the `custom_theme_options` param:

```toml
[reveal_hugo.custom_theme_options]
targetPath = "css/custom-theme.css"
enableSourceMap = true
```

See all the [available options](https://gohugo.io/hugo-pipes/scss-sass/#options).

---

Note: to use a custom theme that doesn't need compilation, put it in the `static` directory and do not set the `custom_theme_compile` parameter. It will be served to the browser directly.

---

Write a custom Reveal.js theme in four steps:

```text
1. Import `mixins` and `settings` from the templates directory
2. Override variables and functions for colors, fonts and sizes
3. Import `theme` from the templates directory
4. Add any additional selectors to override the built CSS
```

---

See the [Reveal.js theme docs](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md) to learn what overrides are possible.

---

See `assets/custom-theme.scss` or any file in `assets/reveal-js/dist/theme/source` for an example.
