+++
title = "Reveal.js 3.9.0 highlighting example"
outputs = ["Reveal"]

[reveal_hugo]
theme = "white"
highlight_theme = "vs"
+++

## New highlighting features Presentation

---

This presentation shows the use of the [new highlighting features](https://github.com/hakimel/reveal.js/blob/master/README.md#step-by-step-highlights) which were introduced with Reveal.js [v3.9.0](https://github.com/hakimel/reveal.js/releases/tag/3.9.0)

---

## Prerequisite

First, disable `CodeFences` in to your `config.toml`:

{{< highlight toml "style=github" >}}
[markup.highlight]
codeFences = false
{{< /highlight >}}

---
## Theme

Specify a theme for Highlight.js in `config.toml`

{{< highlight toml "style=github" >}}
[params.reveal_hugo]
highlight_theme = "github"
{{< /highlight >}}

or in the `frontmatter`

{{< highlight toml "style=github" >}}
[reveal_hugo]
highlight_theme = "github"
{{< /highlight >}}

---

## Usage

The line highlighting is configured by adding `{}` immediately after the language selection of the markdown code block.

{{< highlight md >}}  
```foo{}

```
{{< /highlight >}}

---

## Just line numbers

`{}`

{{< highlight md >}}  
```go{}
package main
import "fmt"
func main() {
    fmt.Println("Hello world!")
}
```
{{< /highlight >}}
   
```go{}
package main
import "fmt"
func main() {
    fmt.Println("Hello world!")
}
```

---

## Highlight specific lines

`{<line numbers separated by comma>}`

{{< highlight md >}}
```go{1,3-5}
package main
import "fmt"
func main() {
    fmt.Println("Hello world!")
}
```
{{< /highlight >}}
```go{1,3-5}
package main
import "fmt"
func main() {
    fmt.Println("Hello world!")
}
```

---

## Multi step highlight

`{<line numbers separated by pipe>}`

{{< highlight md >}}
```go{1|2|3-5}
package main
import "fmt"
func main() {
    fmt.Println("Hello world!")
}
```
{{< /highlight >}}

```go{1|2|3-5}
package main
import "fmt"
func main() {
    fmt.Println("Hello world!")
}
```
---

## Hiding the line numbers

There is no Reveal.js parameter to use line highlighting *without* line numbers. 
However it can be achieved by adding the some [custom CSS](https://github.com/dzello/reveal-hugo#adding-html-to-the-layout).

{{< highlight html "style=github" >}}
<style>
  .hljs-ln-numbers {
    display: none;
  }
</style>
{{< /highlight >}}

<small>💡 Tip: To hide line numbers for every presentation, put it here:</small>

```text
layouts/partials/reveal-hugo/body.html
```