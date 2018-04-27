+++
weight = 20
+++

# reveal-hugo

Content for the root presentation lives in `content/_index.md` and `content/home`.

---

# reveal-hugo

Content files are ordered by `weight` when added to the presentation.

```toml
+++
weight = 20
+++
```

---

# reveal-hugo

Create multiple presentations, one for each section in `content`.

---

# reveal-hugo

Use the `fragment` shortcode to make content appear in sequence.

```
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} Two {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} Two {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}
