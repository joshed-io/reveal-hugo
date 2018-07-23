+++
weight = 34
+++

## Slide

Customize individual slide attributes like id, class, background color and transition. Use the same keys as Reveal.js but omit the 'data-' prefix.

---

{{% slide id="custom-1" transition="zoom" transition-speed="fast" %}}

## Custom slide 1

```
{{%/* slide id="custom-1" transition="zoom" transition-speed="fast" */%}}

## Custom slide 1

{{%/* /slide */%}}
```

{{% /slide %}}

---

{{% slide id="custom-2" background="#FF4081" %}}

## Custom slide 2

```
{{%/* slide id="custom-2" background="#FF4081" */%}}

## Custom slide 2

{{%/* /slide */%}}
```

{{% /slide %}}

---

💡 Tip: Setting a slide's `id` attribute makes it easy to link to from other parts of the presentation.

<br>
```markdown
Go to [custom slide 1](#custom-1)
```

<small>
Go to [custom slide 1](#custom-1)
</small>

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

{{% slide template="hotpink" %}}

Apply the template using the **template** attribute of the slide shortcode:

```markdown
{{%/* slide template="hotpink" */%}}

# I'm a hot pink slide!

{{%/* /slide */%}}
```

{{% /slide %}}

---

If a template exists in multiple configurations, it's properties will be merged. If a property is declared multiple times, the order of precedence is:

- page
- section (_index.md)
- site (config.toml)

{{% /section %}}

---

{{% section %}}

{{% slide content="home.example" /%}}

{{% /section %}}
