+++
title = "Logo presentation example"
outputs = ["Reveal"]
[logo]
src = "github-logo.png"
[reveal_hugo]
custom_theme = "reveal-hugo/themes/robot-lung.css"
margin = 0.2
+++

## logo-example

This presentation shows how to add a logo to each slide, like the GitHub one you see above.

You can generalize the concept to add any additional markup to your presentations.

---

[See the code for this presentation](https://github.com/dzello/reveal-hugo/blob/master/exampleSite/content/logo-example)

---

For a basic setup, in the front matter, add an image to the presentation's directory.

Then, add a logo section in the front matter:
```toml
[logo]
src = "github-logo.png"
```
The front matter should end up looking like this:
```toml
+++
title = "Logo presentation example"
outputs = ["Reveal"]
[logo]
src = "github-logo.png"
+++
```

---

If the logo placement doesn't quite match your needs, you may customize it with the following parameters:

```toml
[logo]
src = "github-logo.png" # Location of the file displayed.
alt = "" # Alt text. 
width = "15%" # Size of the file.
diag = "1%" # How far from the top right should the file be.
top = "1%" # Overrides diag.
right = "1%" # Overrides diag.
```

 - Instead of absolute (`250px`), relative measurements (`12.5%`) should be used. They work better with different screen sizes.

 - By default, null (`""`) is used as alt text for logos, as otherwise the alt text would unnecessarily get read by screen readers.

---

💡 Tip: to make the logo settings present on every presentation, add the settings to your site's configuration file `config.toml` under `[params.logo]`:

```toml
[params.logo]
src = "/img/logo.png"
```
Note that now, the path to the logo file shall be absolute, and should be stored in `static/img/logo.png` instead.

---

Depending on the theme you're using, your styles will be different. <br>You may also prefer to put your CSS in an external file or your Reveal.js theme.

For per-presentation override, you may add custom CSS with the ID `#logo` to:
```text
layouts/partials/{section}/reveal-hugo/body.html
```

Substitute `{section}` for `home` if you are adding a logo to the presentation at `content/_index.md`. Otherwise, substitute the name of the Hugo section where your presentation lives. 

For a site-wide override, use:
```text
layouts/partials/{section}/reveal-hugo/body.html
```

---

# 🤗

That's it.

Happy Hugo-ing!