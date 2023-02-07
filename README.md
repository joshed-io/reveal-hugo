# reveal-hugo

![License badge](https://img.shields.io/github/license/dzello/reveal-hugo.svg)
[![CircleCI](https://circleci.com/gh/dzello/reveal-hugo.svg?style=svg)](https://circleci.com/gh/dzello/reveal-hugo)
[![Website up/down badge](https://img.shields.io/website-up-down-green-red/https/reveal-hugo.dzello.com.svg)](https://reveal-hugo.dzello.com/)
![Last commit badge](https://img.shields.io/github/last-commit/dzello/reveal-hugo.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/70c5c7a6-5fb2-40a9-98e1-20aa21336201/deploy-status)](https://app.netlify.com/sites/reveal-hugo/deploys)

A Hugo theme for [Reveal.js](https://revealjs.com/) that makes authoring and customization a breeze. With it, you can turn any properly-formatted Hugo content into a HTML presentation.

![screenshot of reveal-hugo](https://github.com/dzello/reveal-hugo/blob/master/images/screenshot.png?raw=true)

⚠️ The latest version of this theme requires hugo version >= v0.93.0. If you need compatibility with an earlier version, try a previous release.

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
Hola.
```

Just use `---` surrounded by blank lines to split content into different slides.

## Documentation

Visit [reveal-hugo.dzello.com](https://reveal-hugo.dzello.com/) to see a presentation created with this theme and learn about all of the different functionality available to you.

For a full-length blog post about reveal-hugo, checkout [Harness the Power of Static Site Generators to Create Presentations](https://forestry.io/blog/harness-the-power-of-static-to-create-presentations/) on the [Forestry.io blog](https://forestry.io/blog).

### Demos

Jump to the [exampleSite](exampleSite) folder in this repository to see the source code for the above presentation and several more. Here are links to those presentations live:

- [logo-example](https://reveal-hugo.dzello.com/logo-example/) - Shows how to add a logo to your presentation
- [custom-theme-example](https://reveal-hugo.dzello.com/custom-theme-example/) - Uses Hugo pipes to compile and use a custom Reveal.js SCSS theme (recommended!)
- [section-example](https://reveal-hugo.dzello.com/section-example/) - Very basic example that shows how to create a presentation for a Hugo section
- [plugin-example](https://reveal-hugo.dzello.com/plugin-example/) - Shows how to add additional Reveal.js plugins to your presentation, for example an image gallery
- [template-example](https://reveal-hugo.dzello.com/template-example/) - An example of using the slide shortcode with powerful templates
- [bundle-example](https://reveal-hugo.dzello.com/bundle-example/) - An example of creating a presentation from one or more markdown files in a leaf bundle
- [hugo-hl-example](https://reveal-hugo.dzello.com/hugo-hl-example/) - An example of using Hugo's compile-time syntax highlighter
- [highlightjs-linenumbers-example](https://reveal-hugo.dzello.com/highlightjs-linenumbers-example/) - An example of using the multiline and multi-step capabilities of highlight.js

### Starter repository

If you want to start creating a presentation right away, clone the [programming-quotes](https://github.com/dzello/programming-quotes) repository and start hacking.

## Tutorial: Create your first presentation

You should be able to complete this section with no prior knowledge of Hugo or Reveal.js. At the end, you'll have a working presentation with instant reloading.

### Create a hugo skeleton site

To start, [install Hugo](https://gohugo.io/getting-started/installing/) and create a new Hugo site:

```shell
hugo new site my-presentation
```

Change into the directory of the new site:

```shell
cd my-presentation
```

Initialize a git repository:

```shell
git init
```

### Get the `reveal-hugo` theme

#### Method 1 (recommended): use theme as hugo module

Turn your new skeleton site into a hugo module by issuing this command from site root:

```shell
hugo mod init github.com/me/my-presentation
```

- Declare the `reveal-hugo` theme module as a dependency of your site:

```
hugo mod get github.com/dzello/reveal-hugo
```

Open `config.toml` and add the following line:

```toml
theme = ["github.com/dzello/reveal-hugo"]
```

#### Method 2 (traditional): use theme as git submodule

Add the `reveal-hugo` theme as a submodule in the themes directory:

```shell
git submodule add git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
```

Open `config.toml` and add the following line:

```toml
theme = ["reveal-hugo"]
```

### Configure your presentation

Add some more contents to your `config.toml`:

```toml
[markup.goldmark.renderer]
unsafe = true

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

### Cloning an existing repository (method 2 only)

If you have an existing repository that was setup with the above steps, you have to pull in the theme submodule after cloning your repository using the following command:

```shell
git submodule update --init
```

## Theme update (method 1 only)

When making use of `reveal-hugo` theme as hugo module, updating your theme is really easy:

At the command prompt, change to the root directory of your existing site.

```
cd /path/to/my-presentation
```

Then invoke hugo's module `get` subcommand with the update flag `-u`:

```
hugo mod get -u github.com/dzello/reveal-hugo
```

Hugo will automatically pull in the latest theme version. That's it, your update is done!

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
- {{< frag c="One" >}}
- {{< frag c="Two" >}}
- {{< frag c="Three" >}}
```

#### slide shortcode

The slide shortcode lets you set custom HTML and Reveal.js attributes for each slide - things like id, class, transition, background just to name a few. The names are the same as Reveal.js but without the 'data-' prefix.

Add the shortcode above the slide content, below the `---` separator. Do not place content inside of the shortcode.

```markdown
---

{{< slide id="hello" background="#FFF" transition="zoom" transition-speed="fast" >}}

# Hello, world!

---
```

Here's a list of documented slide attributes from the Reveal.js docs:

- `autoslide`
- `state`
- `background`
- `background-color`
- `background-image`
- `background-size`
- `background-position`
- `background-repeat`
- `background-video`
- `background-video-loop`
- `background-video-muted`
- `background-interactive`
- `background-iframe`
- `background-transition`
- `transition` (can have different in and out transitions)
- `transition-speed`
- `notes` (can also use the note shortcode)
- `timing`

You can also pass through your own, a `data-` prefix will be added automatically to each one (except for `id` and `class`).

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

### MathJax support

Add the following to `layouts/partials/reveal-hugo/body.html`:

```
<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};
</script>

<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>
```

Then you can do this in a slide:

```
## Cool equations

Displayed equations are wrapped in double-\$

$$\frac{n!}{k!(n-k)!} = \binom{n}{k}$$

Inline equations like $E=mc^2$ are wrapped in single-\$
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

Customize the Reveal.js presentation by setting these values in `config.toml` or the front matter of any presentation's `_index.md` file.

- `reveal_hugo.theme`: The Reveal.js theme used; defaults to "black"
- `reveal_hugo.custom_theme`: The path to a locally hosted Reveal.js theme in the static or assets folder
- `reveal_hugo.custom_theme_compile`: If set to true, the theme will be compiled with Hugo pipes (and must live in the assets folder)
- `reveal_hugo.custom_theme_options`: Provide a dictionary to customize theme compilation, see [Hugo's SCSS docs](https://gohugo.io/hugo-pipes/scss-sass/#options) for a list of options
- `reveal_hugo.highlight_theme`: The [highlight.js](https://highlightjs.org/) theme used; defaults to "default"
- `reveal_hugo.reveal_cdn`: The location to load Reveal.js files from; defaults to the `reveal-js` folder in the static directory to support offline development. To load from a CDN instead, set this value to `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.7.0` or whatever CDN you prefer.
- `reveal_hugo.highlight_cdn`: The location to load highlight.js files from; defaults to to the `highlight-js` folder in the static directory to support offline development. To load from a CDN instead, set this value to `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0` or whatever CDN you prefer.
- `reveal_hugo.load_default_plugins`: If set to true (default), the plugins included by default are loaded. These are markdown, highlight.js, notes and zoom.
- `reveal_hugo.plugins`: (see below) An array of additional Reveal.js plugins to load. The appropriate files will need to have been copied into the `static` or content directory. See here for a [big list of plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware) you can try. The original implementation used to accept an array of javascript files (e.g. `["plugin/gallery/gallery.plugin.js"]`), but now reveal-hugo can fully load plugin javascript and css. To enable this mode, You need to provide an array of plugin definition objects with `name`, `source` and an optional `css`, `verbatim` and `order` fields. Reveal-hugo will try to load the plugins at the path specified by `source`. If `verbatim=true` is used, the path is tried as-is. Otherwise, the path is resolved from the content dir or `static` dir. Finally, the `reveal_cdn` is prepended to the path if no other conditions are satisfied. The `order` field controls the order of javascript loading and will seldomly used. See [plugin-example](https://reveal-hugo.dzello.com/plugin-example/) for a plugin walkthrough.

This is how parameters will look in your `config.toml`:

```TOML
[params.reveal_hugo]
theme = "moon"

# the following supposes that menu is accessible in static dir
[[params.reveal_hugo.plugins]]
# Name the plugin. This should be the same name used to register a reveal-js plugin,
# for example: `RevealMenu`, `RevealNotes`
name = "RevealMenu"
source = "menu/menu.js"
css = "menu/menu.css"
# verbatim = true # should the css and source paths be used as-is ?
# order = 6 # control the order in which the plugin should be used.
```

Or in the front matter of an `_index.md` file:

```TOML
[reveal_hugo]
theme = "moon"

[[reveal_hugo.plugins]]
name = "gallery"
source = "plugin/gallery/gallery.plugin.js"
css = "plugin/gallery/gallery.css"

```

Include any other attributes in those sections that you'd like to be fed as arguments to `Reveal.initialize` in **snakecase**, so `slide_number` instead of `slideNumber`. Params are converted from snakecase to camelcase before passing to Reveal.js. This is necessary to maintain the proper case of the parameters.

Here's an example of configuring Reveal.js parameters alongside a theme and highlight.js theme:

```TOML
[reveal_hugo]
theme = "moon"
highlight_theme = "solarized-dark"
slide_number = true
transition = "zoom"
```

See the [extensive list of Reveal.js configuration options](https://github.com/hakimel/reveal.js/#configuration) here.

### Syntax highlighting

Syntax highlighting can be done with Hugo at compile-time or using Reveal.js with the pre-installed highlight.js plugin. Presentations can use both if they wish for different pieces of code.

To do highlighting with Hugo, use the [highlight shortcode](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode) and check out the [hugo-hl-example](https://reveal-hugo.dzello.com/hugo-hl-example/) example presentation.

To see an example of highlighting with Reveal.js, check out the [highlightjs-linenumbers-example](https://reveal-hugo.dzello.com/highlightjs-linenumbers-example/) presentation.

By default, markdown code fences will be processed with Hugo. To turn that off, add this to your `config.toml` file:

``` toml
[markup.highlight]
codeFences = false
```

Now, the code in the fences will be highlighted by highlight.js instead.

### Custom Reveal.js themes

If you have a custom reveal theme to use (in .css form), place it in the `static` folder and specify it in the configuration. For example, if your css file lives here:

```
| static
  | stylesheets
    - custom-theme.css
```

Then this is what you'll put in `config.toml`:

```toml
[params.reveal_hugo]
custom_theme = "stylesheets/custom-theme.css"
```

### Compiling a custom Reveal.js theme with Hugo pipes

Reveal.js theme customization is easiest to do by overriding variables in the SCSS or PostCSS build process. You can take advantage of Hugo pipes to do the theme compilation. In this case, your SCSS, Saas or PostCSS file needs to live in assets:

```
| assets
  | stylesheets
    - custom-theme.scss
```

If you just wanted to change the presentation colors, here's what you might put in `custom-theme.scss`:

```scss
@import "../reveal-js/dist/theme/template/mixins";
@import "../reveal-js/dist/theme/template/settings";

$backgroundColor: rgb(3, 129, 45);
$mainColor: #fff;
$headingColor: #fff;
```

To learn more about Reveal.js theme customization, check out the [Reveal.js theme docs](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md).

This is what the front matter would look like:

```toml
[params.reveal_hugo]
custom_theme = "stylesheets/custom-theme.scss"
custom_theme_compile = true
```

You can also add options that will be passed to [Hugo's toCSS method](https://gohugo.io/hugo-pipes/scss-sass/#options):

```toml
[reveal_hugo.custom_theme_options]
targetPath = "css/custom-theme.css"
enableSourceMap = true
```

Check out the [custom-theme-example presentation](https://reveal-hugo.dzello.com/custom-theme-example/) to see a working example.

## Adding HTML to the layout

If you need to add something to the HTML layout, you can create partials that live at specific locations, depending on which presentation you want to customize and where you want the HTML inserted into the page.

| Presentation | Before &lt;/head&gt;            | Before &lt;/body&gt;            | Before closing &lt;/div&gt; of `div.reveal` |
|--------------|---------------------------------|---------------------------------|---------------------------------------------|
| All          | reveal-hugo/head.html           | reveal-hugo/body.html           | reveal-hugo/end.html                        |
| Root         | home/reveal-hugo/head.html      | home/reveal-hugo/body.html      | home/reveal-hugo/end.html                   |
| Section      | {section}/reveal-hugo/head.html | {section}/reveal-hugo/body.html | {section}/reveal-hugo/end.html              |

This is the recommended way to add custom CSS and JavaScript to each presentation.

> 💡 Tip: In Hugo, partials live in the `layouts` folder:
>
> For example, if you have HTML that is to be placed before every presentation, this would be the structure:
> ```
> - layouts
>   - partials
>     - reveal-hugo
>       - head.html
>       - body.html
>       - end.html

## Offline development

Offline-friendly development is the default. The Reveal.js and Highlight.js files are loaded from the static directory by default. (See above for how to use a CDN instead). If you need `file:///` URLs to work, make sure to set `relativeURLs` and `uglyURLs` in your `config.toml`.

```toml
relativeURLs = true
uglyURLs = true
```

Note: `uglyURLs` isn't strictly required, but it is useful if you're loading against the filesystem as it makes sure that all URLs end in .html and links point directly at them instead of to a folder.



## Tutorial: Add a Reveal.js presentation to an existing Hugo site

If your Hugo site already has a theme but you'd like to create a presentation from some of its content, that's very easy.

### Get the `reveal-hugo` theme

#### Method 1 (recommended): use theme as hugo module

On your site root, check for the existence of a file `go.mod` which marks your site as hugo module.
If this file is not present yet, create it by issuing this command from site root:

```shell
hugo mod init github.com/me/my-presentation
```

- Declare the `reveal-hugo` theme module as a dependency of your site:

```
hugo mod get github.com/dzello/reveal-hugo
```

Open `config.toml`, look for the line `theme = ...` and add `reveal-hugo` to your site's array of themes :

```toml
theme = ["your-current-theme", "github.com/dzello/reveal-hugo"]
```

#### Method 2 (traditional): use theme as git submodule

Add the `reveal-hugo` theme as a submodule in the themes directory:

```shell
git submodule add git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
```

Open `config.toml`, look for the line `theme = ...` and add `reveal-hugo` to your site's array of themes :

```toml
theme = ["your-current-theme", "reveal-hugo"]
```

#### Note: Use of Hugo versions below 0.42

With hugo < v0.42, you have to manually copy a few files out of this theme into a few of your site's directories:

```shell
cd my-hugo-site
git clone https://github.com/dzello/reveal-hugo.git themes/reveal-hugo
cd themes/reveal-hugo
cp -r layouts static ../../
```

Files and directories are named such that they shouldn't conflict with your existing content. Of course, you should double check before copying, especially the shortcodes which can't be put under a directory.

### Configure your site for presentations

Next, add the Reveal output format to your site's `config.toml` file

```toml
[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```

Now you can add `outputs = ["Reveal"]` to the front matter of any section's `_index.md` file and that section's content will be combined into a presentation and written to `index.html`. If you already have a `index.html` page for that section, just change the `baseName` above to `reveal` and the presentation will be placed in a `reveal.html` file instead.

Note: If you specify `outputs = ["Reveal"]` for a single content file, you can prevent anything being generated for that file. This is handy if you other default layouts that would have created a regular HTML file from it. Only the list file is required for the presentation.

## Recipes

### Create a presentation from a leaf bundle or single page type

By default, reveal-hugo doesn't create presentations for single pages (i.e. pages other than `_index.md`) as it assumes those pages are pieces of a larger presentation in the section starting with `_index.md`. This might not be the case if your content is structured in a leaf bundle (the main file is then `index.md` with no underscore, which Hugo treats as a single page) or if you just want to put a presentation in a single file, say `presentation.md`. In these cases, you just need to tell Hugo to use a different layout.

If you're using a leaf page bundle, set the following in the front matter of the `index.md` file:

```toml
layout = "bundle"
```

If you're in a single page file like `presentation.md`, set the following in the front matter:

```toml
layout = "list"
```

### Create a page that lists out all presentations

See [this issue](https://github.com/dzello/reveal-hugo/issues/37) for a template that you can use.

## Reveal.js tips

These are some useful Reveal.js features and shortcuts.

- 's' - type 's' to enter speaker mode, which opens a separate window with a time and speaker notes
- 'o' - type 'o' to enter overview mode and scroll through slide thumbnails
- 'f' - type 'f' to go into full-screen mode

Here are a few useful Reveal.js-related tools:

- [decktape](https://github.com/astefanutti/decktape) for exporting a presentation as a PDF
- More [revealjs themes](https://github.com/dzello/revealjs-themes) including robot-lung and sunblind

Find many more on the Reveal.js wiki: [Plugins, tools and hardware](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware).

## Implementations

Have you built something with reveal-hugo? Add a link to it here.

- [dzello's Paris Wedding Weekend Guide](https://estelle.and.dzello.com/guide/) ([source](https://github.com/dzello/estelle-and-josh/blob/master/site/content/guide/_index.md))
- [DevOps Training](https://devops.training.barpilot.io/) ([source](https://github.com/guilhem/devops-training))


## Changelog

- 2018-08-03: The slide shortcode is now easier to use. An auto-closing version sits inside the slide instead of needing to surround its content and add a closing tag.

## Contributing

Contributions are very welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.
