# reveal-hugo

A Hugo theme for [Reveal.js](https://revealjs.com/) that makes authoring and customization a breeze. With it, you can turn any properly-formatted Hugo content into a HTML presentation.

![screenshot of reveal-hugo](https://github.com/dzello/reveal-hugo/blob/master/images/screenshot.png?raw=true)

## Example

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

Visit [reveal-hugo.dzello.com](https://reveal-hugo.dzello.com/) to see a presentation created with this theme and learn more about what you can do. Jump to the [exampleSite](exampleSite) folder in this repository to see the source code for that presentation.

If you're looking for a very simple reveal-hugo app you can use as a boilerplate, see the [programming-quotes](https://github.com/dzello/programming-quotes) repository.

For a full-length blog post about reveal-hugo, checkout [Harness the Power of Static Site Generators to Create Presentations](https://forestry.io/blog/harness-the-power-of-static-to-create-presentations/) on the [Forestry.io blog](https://forestry.io/blog).

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

Add the reveal-hugo theme as a submodule in the themes directory:

```shell
$ git submodule add git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
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

The Usage guide is contained in the example presentation that lives in this repository in the [exampleSite](./exampleSite) directory. You can access a live version at [reveal-hugo.dzello.com](https://reveal-hugo.dzello.com/).

### Root vs. section presentations

Here's what the folder structure would look like with one root presentation and one section presentation.

```
- content
  - home # special section for appending to root presentation
    - body.md # appends to the root presentation
    - conclusion.md # appends to the root presentation
  - _index.md # beginning of the root presentation
  - ted-talk
    - _index.md # beginning of the ted talk presentation
    - body.md # appends to the ted talk presentation
    - conclusion.md # appends to the ted talk presentation
```

This will create two presentations, one at `/` and one at `/ted-talk/`. The order that slides are appended to each can be controlled by the `weight` parameter specified in each file's front matter. The slides in `_index.md` will always come first, though you don't have to put any slides in there if you want to.

### Shortcodes

reveal-hugo comes with a variety of shortcodes that help you take advantage of some very useful Reveal.js features.

#### fragment shortcode

Wrap any content in the fragment shortcode and it will appear incrementally. Great for bulleted lists where you want one bullet point at a a time to appear.

```markdown
- {{% fragment %}}One{{% /fragment %}}
- {{% fragment %}}Two{{% /fragment %}}
- {{% fragment %}}Three{{% /fragment %}}
```

#### frag shortcode

Like fragment but more terse - content is placed inline in a self-closing shortcode.

```markdown
- {{< frag c="One" />}}
- {{< frag c="Two" />}}
- {{< frag c="Three" />}}
```

#### slide shortcode

The slide shortcode lets you set custom Reveal.js attributes for each slide - things like transition, background color and [much more](https://github.com/hakimel/reveal.js/#slide-attributes).

```markdown
{{% slide background="#FFF" transition="zoom" transition-speed="fast" %}}

# Hello, world!

{{% /slide %}}
```

#### section shortcode

To create groups of slides that can be navigated vertically, surround your markdown with the section shortcode.

```markdown
{{% section %}}

# Vertical slide 1

---

# Vertical slide 2

{{% /section %}}
```

#### note shortcode

Add [speaker notes](https://github.com/hakimel/reveal.js/#speaker-notes) for each slide with the note shortcode.

```markdown
{{% note %}}
Don't forget to thank the audience.
{{% /note %}}
```

*💡 Tip: you can also add notes by adding a `note` attribute to the slide shortcode.*

#### markdown shortcode

Markdown surrounded by the markdown shortcode will not be rendered by Hugo but by Reveal.js itself. This is useful if you want to use some native Reveal.js markdown syntax that isn't supported by reveal-hugo.

```markdown
{{% markdown %}}
# I'm rendered...
...by Reveal.js
{{% /markdown %}}
```

### HTML slides

If you need to create fancier HTML for a slide than you can do with markdown, just add `data-noprocess` to the &lt;section&gt; element.

```html
<section data-noprocess>
  <h1>Hello, world!</h1>
</section>
```

### Reusable slides and sections

Sometimes you need to reuse a slide in the same presentation or across different presentations. reveal-hugo makes use of Hugo data templates to make both cases easy.

To create reusable slides, create a TOML (or JSON or YAML) file in your site's data directory. Give it a name that reflects its content or just `slides.toml`. In that file, add a key for each reusable slide. The name should reflect the slide's content and the value should be the slide's markdown.

```toml
thankyou = '''

# Thank you!

Any questions?

'''
```

*💡 Tip: TOML's multiline string syntax comes in handy here, note the '''.*

Each key can contain **one or more** slides separated by `---` and newlines. That way you can create reusable sections.

```toml
thankyou = '''

# Thank you!

---

Any questions?

'''
```

To render a slide from a data template, use the slide shortcode with a content attribute:

```markdown
{{% slide content="slides.thankyou" /%}}
```

The part before the "." is the name of the file in the data directory. The part after the dot is the key to look up in that file.

You can use all the additional slide shortcode attributes. They will be applied to every slide in the data template.

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

## Adding HTML to the layout

If you need to add something to the HTML page, just override one or both of the empty partials that live at `layouts/partials/reveal-hugo/body.html` and `layouts/partials/reveal-hugo/head.html`. These partials are injected into the page just before the closing of the body and head tags respectively. Common uses would be to add custom CSS or JavaScript to your presentation.

## Recipes

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

## Reveal.js tips

These are some useful Reveal.js features and shortcuts.

- 's' - type 's' to enter speaker mode, which opens a separate window with a time and speaker notes
- 'o' - type 'o' to enter overview mode and scroll through slide thumbnails
- 'f' - type 'f' to go into full-screen mode

Here are a few useful Reveal.js-related tools:

- [decktape](https://github.com/astefanutti/decktape) for exporting a presentation as a PDF
- More [revealjs themes](https://github.com/dzello/revealjs-themes) including robot-lung and sunblind

Find many more on the Reveal.js wiki: [Plugins, tools and hardware](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware).

## Contributing

Contributions are very welcome. To run the example site in this repository locally, clone this repository and run:

```shell
hugo server -s exampleSite
```

or simply...

```shell
npm start
```

