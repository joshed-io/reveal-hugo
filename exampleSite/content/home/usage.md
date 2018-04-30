+++
weight = 20
+++

# Usage

---

## Multiple slides per markdown file

Separate slides with `---`

```markdown
# Slide 1

Body 1.

---

# Slide 2

Body 2.

```

---

I'm a **new** slide from the **same** markdown file.

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
weight = 20
+++

# Slide 3
```

Use `weight` to specify the order


---

## Make a presentation for a Hugo section

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
weight = 20
+++

# Slide 3
```

Use `weight` to specify the order
