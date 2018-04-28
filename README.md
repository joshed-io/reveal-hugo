# reveal-hugo

A Hugo theme for creating [Reveal.js](https://revealjs.com/) presentations that allows you to put multiple slides in the same markdown file. It also allows you to create multiple presentations in the same project.

![screenshot of reveal-hugo](/images/reveal-hugo.png)

The motivation behind creating this theme is pretty simple - I didn't want to have to manage one markdown file for every slide, which would add the overhead of coming up with a file name, setting a `weight` param in the front matter to keep it in order, etc, all for just a few lines of text. Instead, I like to organize groups of slides into a smaller number of markdown files, each representing a section of the presentation.

### Example

Using reveal-hugo, a three-slide (or n-slide) presentation can be created with just one markdown file, like so:

```markdown
# English
Hello.

---

# Français
Salu.

---

# Espagñol
Hola.
```

The only requirement is to demarcate slides with `---` surrounded by newlines.

# Demo

Visit [https://dzello.com/reveal-hugo/](https://dzello.com/reveal-hugo/) to see an presentation created with this theme that shows more ways to use it. You can also check out this repository [running on Netlify](https://reveal-hugo.netlify.com/).

# Step-by-step guide to create a presentation

[Install Hugo](https://gohugo.io/) and create a new Hugo site:

```shell
$ hugo new site my-presentation
```

Change into the directory of the new site:

```shell
$ cd my-presentation
```

Clone this repository into the themes directory:

```shell
$ git clone git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
```

Open `config.toml` and add a new output format called `Reveal`:

```toml
[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```

Create a file in `content/_index.md` with this contents:

```markdown
+++
title = "My presentation"
outputs = ["Reveal"]
+++

# Hello world!

This is my first slide.
```

Back on the command line, run:

```shell
$ hugo server -t reveal-hugo
```

Navigate to [http://localhost:1313/](http://localhost:1313/) and you should see your Reveal.js presentation.

![New site with reveal-hugo](/images/reveal-hugo-hello-world.png)

To add more slides, you can add content to `_index.md` or create new markdown files in `content/home`. Remember to separate each slide separated by `---` surrounded by newlines.

```markdown

---

# Hello Mars!

This is the second slide.
```

### Presentation structure

To create the default presentation (the one that will live at the site root), the theme will look for a `content/_index.md` file and any pages that have a type of `home`. That means they're in a `home` directory in the `content` folder OR the type is manually set to `home` in the front matter.

```toml
type = 'home'
```

Use the `weight` param in the front matter to specify the order that the pages should appear in the presentation.

```toml
weight = 20
```

### Section presentations

To create a presentation for the content of any section of your Hugo site, just add `Reveal` to its list of `outputFormats` in the front matter of `section/_index.md`:

```toml
outputs = ["Reveal"]
```

Section presentations will include content from each file in that section. Again, use the `weight` param to order the sections, knowing that any content in `_index.md` will come first.

Presentations can use a different Reveal.js theme by specifying the `reveal_theme` parameter in the front matter of the section's `_index.md` file.

```toml
reveal_theme = "moon"
```

### Add a Reveal.js presentation to an existing Hugo site

If your Hugo site already has a theme but you'd like to create a presentation from some of its content, that's very easy. First, manually copy a few files out of this theme into a few of your site's directories:

```shell
$ cd my-hugo-site
$ git clone git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
$ cp -r themes/reveal-hugo/static/reveal static/reveal
$ cp themes/reveal-hugo/layouts/_default/*.reveal.html layouts/_default
$ cp themes/reveal-hugo/layouts/shortcodes/* layouts/shortcodes
```

Next, add the Reveal output format to your site's `config.toml` file

```toml
[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```

Now you can add `outputs = ["Reveal"]` to the front matter of any section's `_index.md` file and that sections content will be combined into a presentation and saved to `index.html`. If you already have a normal `index.html` page for that section, just change the `baseName` above to `reveal` and the presentation will be placed in a `reveal.html` file instead.

Note: If you specify `outputs = ["Reveal"]` for a single content file, you can make sure nothing is generated for that file. This is handy if you other default layouts that would have created a regular HTML file from it. Only the list file is required for the presentation.

### Fragments

Fragments are a Reveal.js concept that lets you introduce content into each slide incrementally. Borrowing the idea from [hugo-theme-revealjs](https://github.com/RealOrangeOne/hugo-theme-revealjs) (thanks!), you can use a `fragment` shortcode to accomplish this in reveal-hugo in the same way.

```markdown
# Let's count to three...
{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} Two {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}
```

# Configuration

These settings go in `config.toml`:

- `params.reveal_theme`: The Reveal.js theme used, defaults to "black"
