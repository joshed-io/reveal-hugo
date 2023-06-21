+++
weight = 31
+++

{{< slide id=math-shortcode >}}

### Mathematical equations

Use the `math` shortcode if you need to enable reveal-js highlighting module
(`codeFences = false`).

```code
{{</* math */>}}
\tag*{(1)} \lim\limits_{x \to \infty} \exp(-x) = 0
{{</* /math */>}}
```
<small>
displays as:
</small>

{{< math >}}
\tag*{(1)} \lim\limits_{x \to \infty} \exp(-x) = 0
{{< /math >}}

For inline equations, use a self closed `math` shortcode:

```code
Albert Einstein's famous formula: {{</* math "E=mc^2" /*/>}}
```
<small>
is rendered to:
</small>

Albert Einstein's famous formula: {{< math "E=mc^2" />}}
