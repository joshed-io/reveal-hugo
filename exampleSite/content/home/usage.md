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

## Make a presentation for `/`

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

Use `weight` to specify the order


---

## Make a presentation for any Hugo section

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

Use `weight` to specify the order
