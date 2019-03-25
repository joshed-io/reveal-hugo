+++
title = "plugin-example"
description = "Shows how a Reveal.js plugin can be added and used"
outputs = ["Reveal"]
[reveal_hugo]
theme = "night"
margin = 0.2
plugins = ["plugin/gallery/gallery.plugin.js"]
+++

# plugin-example

---

This presentation demonstrates how a Reveal.js plugin can be added.

---

The plugin is called [revealjs-simple-gallery](https://github.com/marcins/revealjs-simple-gallery).

---

It can make any slide an image gallery. Here are a few examples.

---

<ul class="gallery">
  <li><img src="sample1.jpg" alt="Default settings (Photo by Oscar Fernandez Alonso on Flickr)"></li>
  <li><img src="sample2.jpg" alt="Default settings (Photo by bullcitydogs on Flickr)"></li>
  <li><img src="sample3.jpg" alt="Default settings (Photo by Lance McCord on Flickr)"></li>
</ul>

---

<ul class="gallery" data-iterations="0" data-interval="1">
  <li><img src="sample1.jpg" alt="Infinite iterations, fast transition (Photo by Oscar Fernandez Alonso on Flickr)"></li>
  <li><img src="sample2.jpg" alt="Infinite iterations, fast transition (Photo by bullcitydogs on Flickr)"></li>
  <li><img src="sample3.jpg" alt="Infinite iterations, fast transition (Photo by Lance McCord on Flickr)"></li>
</ul>

---

<ul class="gallery" data-iterations="2" data-interval="2" data-mode="full-screen">
  <li><img src="sample1.jpg" alt="Full screen, two iterations, slow transition (Photo by Oscar Fernandez Alonso on Flickr)"></li>
  <li><img src="sample2.jpg" alt="Full screen, two iterations, slow transition (Photo by bullcitydogs on Flickr)"></li>
  <li><img src="sample3.jpg" alt="Full screen, two iterations, slow transition (Photo by Lance McCord on Flickr)"></li>
</ul>

---

See the [revealjs-simple-gallery GitHub repo](https://github.com/marcins/revealjs-simple-gallery) to learn about more customization options.

---

These were the steps to use this plugin for this reveal-hugo presentation.

---

### 1

Copy the plugin CSS and JavaScript into the static directory

---

### 2

Add the JavaScript file path to the `plugins` field in the front matter

---

### 3

Create a `head.html` partial inside of `layouts/partials/plugin-example/reveal-hugo`

---

### 4

In `head.html`, add a stylesheet link tag that loads the plugin CSS

---

## THE END