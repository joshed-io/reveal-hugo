+++
title = "Extend layout with configuration"
outputs = ["Reveal"]
[reveal_hugo]
theme = "night"
margin = 0.2
custom_css = "css/custom.css"
custom_js = "js/custom.js"
+++

### Extending an existing layout

If you are using an existing theme and you want to a specific CSS class or add a dynamic function using javascript. It is possible to extend existing layout.

---

### Extending CSS

You can use `partials` or you can specify `custom_css` in your configuration :

```toml
[reveal_hugo]
custom_css = "css/custom.css"
```
<small>
The `custom.css` can be present in `static/css/custom.css`
</small>

---

### Extending with javascript

Same as CSS you can extend your presentation with javascript using `partials` or with `custom_js` in your configuration:

```toml
[reveal_hugo]
custom_js = "js/custom.js"
```

<small>
The `custom.js` can be present in `static/js/custom.js`
</small>

---

{{< slide class="custom" id="customjs" >}}
## Extend layout example
Here the slide has an additional css class `custom` using `slide` *shortcode*. This class is hosted in a custom CSS.

If you click on this text background-color will using a custom javascript file. 



