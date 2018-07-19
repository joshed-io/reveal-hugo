+++
weight = 30
+++

## Fragment

The `fragment` shortcode makes content appear incrementally.

```
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} Two {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} Two {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}

---

## Frag

The `frag` shortcode is more terse than `fragment`. It accepts a `c` attribute.

```
{{</* frag c="One" */>}}
{{</* frag c="Two" */>}}
{{</* frag c="Three" */>}}
```

{{< frag c="One" >}}
{{< frag c="Two" >}}
{{< frag c="Three" >}}

---

Both `fragment` and `frag` accept two additional parameters:

- `class`: sets the class of the wrapping `span` element
- `index`: controls the order in which sections will appear

