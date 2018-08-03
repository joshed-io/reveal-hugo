+++
weight = 36
+++

{{< markdown >}}

## Markdown

Reveal.js has its own [markdown processor](https://github.com/hakimel/reveal.js#markdown). To use that instead of Hugo, surround a slide with the markdown shortcode.

```markdown
{{</* markdown */>}}

# Hello world!

{{</* /markdown */>}}
```

<br>
<small>
💡 Make sure to use the `{{</* */>}}` shortcode syntax to avoid rendering by Hugo.
</small>

---

<!-- .slide: data-background="#FF4081" -->

Reveal.js markdown uses HTML comments to change slide properties, like background color.

```markdown
{{</* markdown */>}}
<!-- .slide: data-background="#FF4081" -->
# I'm a colorful slide
{{</* /markdown */>}}
```

{{< /markdown >}}

