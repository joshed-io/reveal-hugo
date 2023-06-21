+++
weight = 20
+++
{{< slide id=usage >}}

# Usage

---
{{< slide id=prerequisite >}}

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
{{< slide id=adding-slides >}}

### Add slides

Separate them by `---` surrounded by blank lines:

```
# Slide 1

Hello world!

---

# Slide 2

Hello program!
```

---
{{< slide id=math-equations >}}

### Cool equations

For equations, you can use a [`math`](https://docs.gitlab.com/ee/user/markdown.html#math) code block:

````code
```math
\tag*{(1)} \lim\limits_{x \to \infty} \exp(-x) = 0
```
````
<small>
renders to:
</small>

{{< math >}}
\tag*{(1)} \lim\limits_{x \to \infty} \exp(-x) = 0
{{< /math >}}

Inline equations (e. g. $E=mc^2$) are wrapped in single $:

```code
Albert Einstein's famous formula: $E=mc^2$
```

<small>💡 Note: When using inline math only (no math code block present), you have to set `math=true` in the frontmatter of your slide page.</small>

<small>💡 Note: for code blocks support (` ```math ...``` `), hugo highlighting must be on (`codeFences = true` in `config.toml`). If you want to set `codeFences = false`, use the `math` [shortcode](#/math-shortcode).</small>

---
{{< slide id=mermaid-diagrams >}}

### Mermaid

Slides can contain [mermaid](https://mermaid-js.github.io/mermaid/#/) diagrams:

````code
```mermaid
graph LR
    A --> B
    B --> C
```
````

Or (see [mermaid shortcode](#/mermaid-shortcode))

```code
{{</* mermaid */>}}
graph LR
    A --> B
    B --> C
{{</* /mermaid */>}}
```

results in:

{{< mermaid >}}
graph LR
    A --> B
    B --> C
{{< /mermaid >}}

<small>💡 Note: for code blocks support (` ```mermaid ...``` `), hugo highlighting must be on (codeFences = true in config.toml)</small>


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

<small>💡 Tip: Use `weight` to specify the order that files should be considered.</small>

---

### Presentation at '/{section}/'

Add slides to `content/{section}/_index.md`:

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

<small>💡 Tip: Use `weight` to specify the order that files should be considered.</small>

