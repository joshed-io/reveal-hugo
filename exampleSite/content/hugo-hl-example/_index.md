+++
title = "Hugo highlighting example"
outputs = ["Reveal"]

[reveal_hugo]
theme = "simple"
+++

## Hugo Highlighter Presentation

This is an example of a presentation using Hugo's compile-time syntax highlighter.

---

Reveal.js uses Javascript for syntax highlighting (via Highlight.js). This might slow the presentation down if many slides contain code.

---

Hugo has a built-in [compile-time highlighter](https://gohugo.io/content-management/syntax-highlighting/), and it's lightning fast too!

---

You can enable it using the `highlight` shortcode.

{{< highlight go >}}
{{</* highlight go */>}}

package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}

{{</* /highlight */>}}
{{< /highlight >}}

---

Several options are supported, check [Hugo's documentation](https://gohugo.io/content-management/syntax-highlighting/).

{{< highlight go "style=github,linenos=inline,hl_lines=8" >}}
{{</* highlight go "style=github,linenos=inline,hl_lines=6" */>}}

package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}

{{</* /highlight */>}}
{{< / highlight >}}

---

You can also use Hugo's highlighter in markdown code fences,
by putting this in `config.toml`:

{{< highlight toml "style=github" >}}

# use Hugo's hl in markdown (with or without a language tag)
[markup.highlight]
codeFences = true
style = "github"

{{< /highlight >}}

(This can only be enabled globally for all presentations.)

---

- Highlight.js is automatically disabled in code blocks highlighted by Hugo.
- The two highlighters can be even mixed.

{{< highlight go >}}
package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}
{{< / highlight >}}

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}
```

---

If you don't need highlight.js at all, you can prevent it from loading.

{{< highlight toml "style=github" >}}

# This works both in config.toml and a presentation's front
# matter. Default plugins include highlight.js, so disable them
# and load those that we want manually.

[params.reveal_hugo]
load_default_plugins = false

[[params.reveal_hugo.plugins]]
name = "RevealZoom"
source = "reveal-js/plugin/zoom-js/zoom.js"

[[params.reveal_hugo.plugins]]
name = "RevealNotes"
source = "reveal-js/plugin/notes/notes.js"
