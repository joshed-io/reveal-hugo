+++
weight = 30
+++

# Shortcodes

---

### Fragment shortcode

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

{{% section %}}

### Section shortcode

The `section` shortcode groups slides into a vertical display.

**To continue, use the down arrow or swipe down.**

---

Put the shortcode around the slides you want to group together.

```markdown
{{%/* section */%}}

## Section slide 1

---

## Section slide 2

{{%/* /section */%}}
```

Keep scrolling down.

---

## That's it!

Use the right arrow or swipe right.

{{% /section %}}
