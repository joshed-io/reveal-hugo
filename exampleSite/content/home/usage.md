+++
weight = 20
+++

# Usage

---

## Prerequisite

Add this to your `config.toml`:

```toml
[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```

---

## Configure themes

Optional. In `config.toml` or front matter.

```toml
[params.reveal_hugo]
theme = "moon"
highlight_theme = "zenburn"
```

[Reveal.js themes](https://github.com/hakimel/reveal.js/#theming) &middot;
[highlight.js themes](https://highlightjs.org/static/demo/)

---

## Custom Reveal.js theme

Point to a file in the `static` directory.

```toml
[params.reveal_hugo]
custom_theme = "themes/dzello.css"
```

---

## Configure Reveal.js

Set **snakecase** versions of Reveal.js params, which will be passed to `Reveal.initialize`.

```toml
[params.reveal_hugo]
slide_number = true
transition_speed = 'fast'
```

[Reveal config params](https://github.com/hakimel/reveal.js/#configuration)

---

## Presentation for `/`

In `content/_index.md`:

```markdown
+++
outputs = ["Reveal"]
+++

# Slide 1

---

# Slide 2
```

---

Put more slides in `content/home/*.md`

```markdown
+++
weight = 10
+++

# Slide 3

---

# Slide 4
```

Use `weight` to specify the order relative to other files.


---

## For any Hugo section

In `content/{section}/_index.md`:

```markdown
+++
outputs = ["Reveal"]
+++

# Slide 1

---

# Slide 2

```

---

Put more slides in `content/{section}/*.md`

```markdown
+++
weight = 10
+++

# Slide 3

---

# Slide 4
```

Use `weight` to specify the order relative to other files.
