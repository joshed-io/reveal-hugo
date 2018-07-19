+++
weight = 20
+++

# Usage

---

## Prerequisite

First, add this to your `config.toml`:

```toml
[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```

---

### Presentation at site root

Create `content/_index.md`:

```markdown
+++
outputs = ["Reveal"]
+++

# Slide 1

Hello world!
```

---

### Add slides in same file

Separate them by `---`:

```

# Slide 1

Hello world!

---

# Slide 2

Hello program!

```

---

### Add slides with other files

Add slides to `content/home/*.md`

```markdown
+++
weight = 10
+++

# Slide 3

---

# Slide 4
```

<small>💡 Tip: Use `weight` to specify the order that files should be added.</small>

---

### Presentation at '/{section}/'

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

Add slides from other files in `content/{section}/*.md`

```markdown
+++
weight = 10
+++

# Slide 3

---

# Slide 4
```

<small>💡 Tip: Use `weight` to specify the order that files should be added.</small>

---

# Configuration

---

## Reveal.js themes

Put in `config.toml` or a presentation's front matter.

Use the `theme` key for themes that come with Reveal.js.

```toml
[params.reveal_hugo]
theme = "moon"
highlight_theme = "zenburn"
```

[Reveal.js themes](https://github.com/hakimel/reveal.js/#theming) &middot;
[highlight.js themes](https://highlightjs.org/static/demo/)

---

## Use a custom theme

Use the `custom_theme` key to point to a CSS file in the `static` directory.

```toml
[params.reveal_hugo]
custom_theme = "reveal-hugo/themes/robot-lung.css"
```

---

## Like this theme?

reveal-hugo comes with 2 extra Reveal.js themes:

- [robot-lung](https://github.com/dzello/revealjs-themes#robot-lung) (this one)
- [sunblind](https://github.com/dzello/revealjs-themes#sunblind)

<br>
<small>
They live in the `static/reveal-hugo/themes` folder and also [on Github](https://github.com/dzello/revealjs-themes).
</small>

---

## Reveal.js params

Set **snakecase** versions of Reveal.js params, which will be camelized and passed to `Reveal.initialize`.

```toml
[params.reveal_hugo]
history = true
slide_number = true
transition = 'zoom'
transition_speed = 'fast'
```

[Full list of params](https://github.com/hakimel/reveal.js/#configuration)
