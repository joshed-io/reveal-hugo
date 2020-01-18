+++
weight = 34
+++

## Slide

Use this shortcode when you need to customize slide attributes like id, class, background color and transition.

---

{{< slide class="hello" >}}

## Slide

Add the shortcode above the slide's content, below the `---`.

```markdown
---

{{</* slide class="hello" */>}}

## Hello, world!

---
```

---

{{< slide transition="zoom" transition-speed="fast" >}}

## Custom slide 1

<small>Did you notice? This slide has a fast zoom transition.</small>

```markdown
---

{{</* slide transition="zoom" transition-speed="fast" */>}}

## Custom slide 1

---
```

---

{{< slide background-color="#FF4081" >}}

## Custom slide 2

<small>This slide has a different background color.</small>

```markdown
---

{{</* slide background-color="#FF4081" */>}}

## Custom slide 2

---
```

---

{{< slide background-image="/images/alex-litvin-790876-unsplash.jpg" background-color="#000000" >}}

## Custom slide 3

<small>This slide has a background image.</small>

```markdown
---

{{</* slide background-image="/images/alex-litvin-790876-unsplash.jpg" */>}}

---
```

<small>(credit <a href="https://unsplash.com/@alexlitvin">Alex Litvin</a>)</small>

---

{{< slide id="custom-slide" >}}

💡 Tip: Setting a slide's `id` attribute makes it easy to link to from other parts of the presentation.
<br><br>

```markdown
---

{{</* slide id="custom-slide" */>}}

## Custom slide

---
```

---

```markdown
[Try the link](#custom-slide)
```

<br>

[Try the link](#custom-slide)

---

Slide attribute possibilities from the [Reveal.js docs](https://github.com/hakimel/reveal.js):

- `autoslide`
- `state`
- `background`
- `background-color`
- `background-image`
- `background-size`
- `background-position`
- `background-repeat`

---

- `background-video`
- `background-video-loop`
- `background-video-muted`
- `background-interactive`
- `background-iframe`
- `background-transition`
- `transition` (can have different in and out transitions)
- `transition-speed`
- `notes` (can also use the note shortcode)
- `timing`

---

{{% section %}}

## Slide templates

Store sets of common slide attributes in front matter variables and apply them to slides with the template attribute.

<br>
<small>
navigate down to learn more
</small>
<br>
<a href="#" class="navigate-down">🔽</a>

---

Create templates in config.toml, _index.md or the current page's front matter. Put them under the **templates** key with a meaningful name:

```toml
[reveal_hugo.templates.hotpink]
class = "hotpink"
background = "#FF4081"
```

---

{{< slide template="hotpink" >}}

Apply the template using the **template** attribute of the slide shortcode:

```markdown
{{</* slide template="hotpink" */>}}

# I'm a hot pink slide!
```

---

If a template exists in multiple configurations, it's properties will be merged. If a property is declared multiple times, the order of precedence is:

- page
- section (_index.md)
- site (config.toml)

{{% /section %}}

---

{{% section %}}

{{< slide content="home.reusable" >}}

---

{{< slide content="common.nested.reusable" >}}

{{% /section %}}

---

{{% section %}}

## Slide-specific CSS

Add more variety to your presentation by applying slide-specific CSS.

<br>
<small>
navigate down to learn more
</small>
<br>
<a href="#" class="navigate-down">🔽</a>

---

First, use the `slide` shortcode to give the slide a class:

```markdown
---

{{</* slide class="side-by-side" */>}}

# 📈

# 📊

---
```

---

Next, use a layout extension partial like `reveal-hugo/head.html` to add CSS selectors:

```html
<style>
.reveal section.side-by-side h1 {
  position: absolute;
}
.reveal section.side-by-side h1:first-of-type {
  left: 25%;
}
.reveal section.side-by-side h1:nth-of-type(2) {
  right: 25%;
}
</style>
```

---

{{< slide class="side-by-side" >}}

# 📈

# 📊

{{% /section %}}
