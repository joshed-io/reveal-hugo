+++
weight = 38
+++

## Notes

Add speaker notes (with markdown) to your presentation with the `note` shortcode. Type 's' to see this slide's speaker notes.

```markdown
---

{{%/* note */%}}
- You found the **speaker notes**!
{{%/* /note */%}}

---
```

{{% note %}}
- You found the **speaker notes**!
{{% /note %}}

---

{{< slide notes="You found the notes!" >}}

## Notes

You can also add notes with the `slide` shortcode and `notes` attribute:

```markdown
---

{{%/* slide notes="You found the notes!" */%}}

---
```

---

<section data-noprocess>
  <h2>Write slides in HTML</h2>
  <p>Use a <code>section</code> tag with a <code>data-noprocess</code> attribute to avoid any processing by reveal-hugo.</p>
  <pre>
&lt;section data-noprocess&gt;
  &lt;h1&gt;Hello world!&lt;/h1&gt;
&lt;/section&gt;</pre>
  <small>💡 This is useful if you can't get Markdown to output exactly what you want.</small>
</section>
