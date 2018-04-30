# reveal-hugo

A Hugo theme for [Reveal.js](https://revealjs.com/) that makes authoring and customization a breeze. With it, you can turn any properly-formatted Hugo content into a HTML presentation.

![screenshot of reveal-hugo](/images/screenshot.png)

### Example

Using reveal-hugo, presentations with multiple slides can be created with just one markdown file, like so:

```markdown
+++
title = "How to say hello"
+++

# English
Hello.

---

# Français
Salu.

---

# Espagñol
Hola.
```

Just use `---` to split content into different slides.

## Demo

Visit [https://dzello.com/reveal-hugo/](https://dzello.com/reveal-hugo/) to see a presentation created with this theme and learn more about what you can do.

## Tutorial

You should be able to complete this section with no prior knowledge of Hugo or Reveal.js. At the end, you'll have a working presentation with instant reloading.

### Create your first presentation

To start, [install Hugo](https://gohugo.io/) and create a new Hugo site:

```shell
$ hugo new site my-presentation
```

Change into the directory of the new site:

```shell
$ cd my-presentation
```

Clone the reveal-hugo theme into the themes directory:

```shell
$ git clone git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
```

Open `config.toml` and add the following contents:

```toml
theme = "reveal-hugo"

[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```
This tells Hugo to use the reveal-hugo theme and it registers a new output format called "Reveal".

Next, create a file in `content/_index.md` and add the following:

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
$ hugo server
```

Navigate to [http://localhost:1313/](http://localhost:1313/) and you should see your presentation.

![New site with reveal-hugo](/images/reveal-hugo-hello-world.png)

To add more slides, just add content to `_index.md` or create new markdown files in `content/home`. Remember that each slide must be separated by `---` with blank lines above and below.

```markdown
# Hello world!

This is my first slide.

---

# Hello Mars!

This is my second slide.
```

## Usage

The Usage guide is contained in the example presentation that lives in this repository at `exampleSite`. You can access a live version at [https://dzello.com/reveal-hugo/](https://dzello.com/reveal-hugo/).

## Configuration

Customize the Reveal.js presentation by setting these values in `config.toml` or the front matter of any presentation's `index.md`.

- `params.reveal_hugo.theme`: The Reveal.js theme used, defaults to "black"

Include any other attributes in `params.reveal_hugo` that you'd like to be fed as arguments to `Reveal.initialize`. See the [extensive list of options](https://github.com/hakimel/reveal.js/#configuration) here. Defaults used by this theme are located in `data/reveal_hugo.toml`.

If you're new to TOML, this is how it should look in your `config.toml`:

```TOML
[params.reveal_hugo]
theme = "moon"
```

Or in the front matter of an `_index.md` file:

```TOML
[reveal_hugo]
theme = "moon"
```

## Injecting HTML

If you need to add something to the HTML page, just override the empty partial that lives at `layouts/partials/reveal-hugo/body.html`. This partial is injected into the page just before the closing of the body tag. Common uses would be to add custom CSS or JS to the page.

### Add a Reveal.js presentation to an existing Hugo site

If your Hugo site already has a theme but you'd like to create a presentation from some of its content, that's very easy. First, manually copy a few files out of this theme into a few of your site's directories:

```shell
$ cd my-hugo-site
$ git clone git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
$ cp -r themes/reveal-hugo/static/reveal static/reveal
$ cp -r themes/reveal-hugo/static/reveal_hugo static/reveal_hugo
$ cp themes/reveal-hugo/layouts/* layouts
$ cp themes/reveal-hugo/data/* data
```

Files and directories are named such that they shouldn't conflict with your existing content. Of course, you should double check before copying, especially the shortcodes which can't be put under a directory.

Next, add the Reveal output format to your site's `config.toml` file

```toml
[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```

Now you can add `outputs = ["Reveal"]` to the front matter of any section's `_index.md` file and that section's content will be combined into a presentation and written to `index.html`. If you already have a `index.html` page for that section, just change the `baseName` above to `reveal` and the presentation will be placed in a `reveal.html` file instead.

Note: If you specify `outputs = ["Reveal"]` for a single content file, you can prevent anything being generated for that file. This is handy if you other default layouts that would have created a regular HTML file from it. Only the list file is required for the presentation.

# Contributing

Contributions are very welcome. To run the example site in this repository locally, clone this repository and run:

```shell
hugo server -s exampleSite -d ../public --themesDir '../' --theme '.'
```

