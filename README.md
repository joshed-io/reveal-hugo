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

# Usage

[Install Hugo](https://gohugo.io/) and create a new Hugo site.

```shell
$ hugo new site my-presentation
```

*Note: if you wish to add a Reveal.js presentation to an existing Hugo site without changing its theme, you can see [an example here](https://github.com/dzello/dzello-dot-com).*

Change into the themes directory of the new site:

```shell
$ cd my-presentation/themes
```

Clone this theme:

```shell
$ git clone git@github.com:dzello/reveal-hugo.git
```

Create a file in `content/_index.md` with this contents:

```
+++
title = "My presentation"
+++

# Hello world!

This is my first slide.
```

Back on the command line, run:

```shell
$ hugo server
```

Navigate to [http://localhost:3000/](http://localhost:3000/) and you should see your Reveal.js presentation.

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

To create more presentations in the same repository, place the content into sections. Section presentations will include content from each file in that section including an `_index.md` file if it exists. Again, use the `weight` param to order the sections (`_index.md` will always be first).

Section presentations can use a different Reveal.js theme by specifying the `reveal_theme` parameter in the front matter of the section's `_index.md` file.

```toml
reveal_theme = "noir"
```

### Fragments

Fragments are a Reveal.js concept that lets you introduce content into each slide incrementally. Borrowing the concept from [hugo-theme-revealjs](https://github.com/RealOrangeOne/hugo-theme-revealjs), you can use a `fragment` shortcode to accomplish this in reveal-hugo in the same way.

```markdown
# Let's count to three...
{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} Two {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}
```


# Configuration

- `params.reveal_theme`: The Reveal.js theme used, defaults to "black"
