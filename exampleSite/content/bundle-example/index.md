+++
title = "Bundle example presentation"
outputs = ["Reveal"]
layout = "bundle"
[reveal_hugo]
theme = "night"
margin = 0.2
+++

# Page Bundles

---

[Hugo page bundles](https://gohugo.io/content-management/page-bundles/) are a useful way to organize content.

---

To create a reveal-hugo presentation from the `index.md` file of a leaf page bundle, you need to specify the layout manually.

```toml
layout = "bundle"
```

---

Why? By default, reveal-hugo doesn't create pages for single template types (foo.md), only for list template types (_index.md).

---

This technique can also be used to output an HTML file for any section of a presentation, should you need to.
