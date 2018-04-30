+++
weight = 20
+++

Content for the root presentation lives in `content/_index.md` and `content/home`.

---

Content files are ordered by `weight` when added to the presentation.

```toml
+++
weight = 20
+++
```

---

Create a presentation for any section of your site by adding this to its `_index.md`:

```toml
outputs = ["Reveal"]
```

---

**The `fragment` shortcode** makes content appear incrementally.


```
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} Two {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} Two {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}
