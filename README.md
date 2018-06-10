# reveal-hugo

A Hugo theme for [Reveal.js](https://revealjs.com/) that makes authoring and customization a breeze. With it, you can turn any properly-formatted Hugo content into a HTML presentation.

![screenshot of reveal-hugo](https://github.com/dzello/reveal-hugo/blob/master/images/screenshot.png?raw=true)

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
Salut.

---

# Español
Holá.
```

Just use `---` to split content into different slides.

## Demo

Visit [https://dzello.com/reveal-hugo/](https://dzello.com/reveal-hugo/) to see a presentation created with this theme and learn more about what you can do. Jump to the [exampleSite](exampleSite) folder in this repository to see the source code for that presentation.

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

![New site with reveal-hugo](https://github.com/dzello/reveal-hugo/blob/master/images/reveal-hugo-hello-world.png?raw=true)

To add more slides, just add content to `_index.md` or create new markdown files in `content/home`. Remember that each slide must be separated by `---` with blank lines above and below.

```markdown
# Hello world!

This is my first slide.

---

# Hello Mars!

This is my second slide.
```

## Usage

The Usage guide is contained in the example presentation that lives in this repository in the [exampleSite](./exampleSite) directory. You can access a live version at [https://dzello.com/reveal-hugo/](https://dzello.com/reveal-hugo/).

## Configuration

Customize the Reveal.js presentation by setting these values in `config.toml` or the front matter of any presentation's `index.md` file.

- `params.reveal_hugo.theme`: The Reveal.js theme used, defaults to "black"
- `params.reveal_hugo.custom_theme`: The path to a locally hosted Reveal.js theme
- `params.reveal_hugo.highlight_theme`: The [highlight.js](https://highlightjs.org/) theme used, defaults to "default"

Include any other attributes in `params.reveal_hugo` that you'd like to be fed as arguments to `Reveal.initialize` in **snakecase**. So `slideNumber` becomes `slide_number`. The reason is that Hugo lowercases all params and Reveal.js is case-sensitive. Params are converted from snakecase to camelcase before passing to Reveal.js.

See the [extensive list of Reveal.js configuration options](https://github.com/hakimel/reveal.js/#configuration) here. The defaults used by this theme are located in `data/reveal_hugo.toml`.

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

## Adding HTML to the page

If you need to add something to the HTML page, just override one or both of the empty partials that live at `layouts/partials/reveal-hugo/body.html` and `layouts/partials/reveal-hugo/head.html`. These partials are injected into the page just before the closing of the body and head tags respectively. Common uses would be to add custom CSS or JavaScript to your presentation.

### Add a Reveal.js presentation to an existing Hugo site

If your Hugo site already has a theme but you'd like to create a presentation from some of its content, that's very easy. First, manually copy a few files out of this theme into a few of your site's directories:

```shell
cd my-hugo-site
git clone git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
cd themes/reveal-hugo
cp -r data layouts static ../../
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

# Miscellaneous

Not directly related to reveal-hugo, but these are some of my favorite Reveal.js features and shortcuts.

- 's' - type 's' to enter speaker mode, which opens a separate window with a time and speaker notes
- 'o' - type 'o' to enter overview mode and scroll through slide thumbnails
- 'f' - type 'f' to go into full-screen mode

# Contributing

Contributions are very welcome. To run the example site in this repository locally, clone this repository and run:

```shell
hugo server -s exampleSite -d ../public --themesDir '../' --theme '.'
```

or simply...

```shell
npm start
```

