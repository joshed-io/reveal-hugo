+++
weight = 21
+++

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

---

## Extending the layout

Use partials to add HTML to the page at the closing of the head and the body tags, either for all presentations or just a specific one.

This is the recommended way to add script and style tags to customize your presentations.

---

Here is where partials go for different presentations and places on the page.
<br><br>

| Presentation | Before &lt;/head&gt;            | Before &lt;/body&gt;            |
|--------------|---------------------------------|---------------------------------|
| All          | reveal-hugo/head.html           | reveal-hugo/body.html           |
| Root         | home/reveal-hugo/head.html      | home/reveal-hugo/body.html      |
| Section      | {section}/reveal-hugo/head.html | {section}/reveal-hugo/body.html |

---

## Example customization

In `home/reveal-hugo/head.html`:

```html
<style>
.reveal section h1 {
  color: blue;
}
</style>
```

In `home/reveal-hugo/body.html`:

```html
<script type="text/javascript">
Reveal.addEventListener('slidechanged', function(event) {
  console.log("🎞️ Slide is now " + event.indexh);
});
</script>
```
