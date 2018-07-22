+++
weight = 34
+++

## Slide

Customize individual slide attributes like id, background color and transition. Use the same keys as Reveal.js but omit the 'data-' prefix.

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

{{% slide content="home.example" /%}}

{{% /section %}}
