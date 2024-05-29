+++
weight = 32
+++

{{< slide id=mermaid-shortcode >}}

# Mermaid diagrams

Use the `mermaid` shortcode if you need to enable reveal-js highlighting module
(`codeFences = false`). Otherwise, when `codeFences = true`, ` ```mermaid ``` ` codeblocks
are also supported. [More info](hugo-hl-example/#/5).

```code
{{</* mermaid */>}}
graph LR
    A --> B
    B --> C
{{</* /mermaid */>}}
```

results in:

{{< mermaid >}}
graph LR
    A --> B
    B --> C
{{< /mermaid >}}
