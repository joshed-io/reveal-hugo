+++
title = "Logo presentation example"
outputs = ["Reveal"]
[logo]
src = "github-logo.png"
alt = "GitHub logo with Octocat"
[reveal_hugo]
custom_theme = "reveal-hugo/themes/robot-lung.css"
margin = 0.2
+++

## logo-example

This presentation shows how to add a logo to each slide, like the GitHub one you see above.

You can generalize the concept to add any additional markup to your presentations.

---

[See the code for this presentation](https://github.com/dzello/reveal-hugo/blob/master/exampleSite/content/logo-example/_index.md)

---

First, create a partial called `body.html` and put it in this directory:

```text
layouts/partials/{section}/reveal-hugo/body.html
```

---

Substitute `{section}` for `home` if you are adding a logo to the presentation at `content/_index.md`. Otherwise, substitute the name of the Hugo section where your presentation lives. 

---

The presentation you're looking at right now is in `content/logo-example`, so the partial to add the logo lives in:

```text
layouts/partials/logo-example/reveal-hugo/body.html
```

---

💡 Tip: to make the logo appear in every presentation, put it here:

```text
layouts/partials/reveal-hugo/body.html
```

---

💡 Tip: In addition to `body.html`, you can create partials `head.html` and `end.html` in any of those directories. 

---

- head.html: Add markup just before the closing `</head>` tag
- body.html: Add markup just before the closing `</body>` tag
- end.html: Add markup just before the closing of the Reveal.js `div.slides` container

---

Once the partial exists in `body.html`, we can add our image tag to it:

```html
<img id="logo" src="{{ .Param "logo.src" }}" alt="{{ .Param "logo.alt" }}">
```

---

In this example, the src and alt attributes are set to values from the content's front matter or site's configuration, which you can see in `logo-example/_index.md`:

```toml
[logo]
src = "/images/github-logo.png"
alt = "GitHub logo with Octocat"
```

---

To position the logo, we can add a style tag to `body.html`:

```html
<style>
  #logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 250px;
  }
</style>
```

<small>
💡 Depending on the theme you're using, your styles will be different. <br>You may also prefer to put your CSS in an external file or your Reveal.js theme.
</small>

---

# 🤗

That's it.

Happy Hugo-ing!