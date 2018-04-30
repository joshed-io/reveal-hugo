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

### Frag shortcode

The `frag` shortcode is like `fragment` but more terse. It accepts the content as the `c` attribute.

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

Use the right arrow or swipe right to continue.

{{% /section %}}

---

### Note shortcode

Add speaker notes to your presentation.

```markdown
{{%/* note */%}}
Type 's' to see this slide's speaker notes.
{{%/* /note */%}}
```

{{% note %}}
You found the speaker notes!
{{% /note %}}

