+++
title = "Reveal.js highlighting example"
outputs = ["Reveal"]

[reveal_hugo]
theme = "white"
highlight_theme = "vs"
+++

## Multiline highlighting with Highlight.js

---

This presentation shows the use of the [new highlighting features](https://revealjs.com/code/) which were introduced with Reveal.js [v3.9.0](https://github.com/hakimel/reveal.js/releases/tag/3.9.0).

---

## Prerequisite

Disable `codeFences` in to your `config.toml` to prevent Hugo's built-in highlighting for code inside of `---` fences.

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

---

...or in the `_index.md` front matter

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

---

💡 Put the custom CSS in either of these partials:

```text
# for all presentations
layouts/partials/reveal-hugo/body.html
```

```text
# for one presentation
layouts/partials/{presentation-name}/reveal-hugo/body.html
```

---

Thanks!
