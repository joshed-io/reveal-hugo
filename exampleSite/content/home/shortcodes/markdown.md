+++
weight = 36
+++

{{< markdown >}}

## Markdown

Markdown is not processed by Hugo but passed directly through to Reveal.js.

```
{{</* markdown */>}}
# Hello world!
{{</* /markdown */>}}
```

[See the Reveal.js markdown docs](https://github.com/hakimel/reveal.js#markdown)

---

<!-- .slide: data-background="#FF4081" -->

Reveaj.js Markdown uses HTML comments to change slide properties, like background color.

```
{{</* markdown */>}}
<!-- .slide: data-background="#FF4081" -->
# I'm a colorful slide
{{</* /markdown */>}}
```

{{< /markdown >}}

