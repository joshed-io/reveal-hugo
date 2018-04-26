+++
weight = 20
+++

# reveal-hugo

Presentation content lives in `content/reveal`.

Or manually set the type.

```toml
+++
type = "reveal"
+++
```

---

# reveal-hugo

Presentation sections are ordered by `weight`.

```toml
+++
weight = 20
+++
```

---

# reveal-hugo

Protip: use `fragment` shortcode to make content appear in sequence.

```
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} Two {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} Two {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}
