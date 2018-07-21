+++
weight = 38
+++

## Note

Add speaker notes to your presentation with the note shortcode.

```markdown
{{%/* note */%}}

Type 's' to see this slide's speaker notes.

{{%/* /note */%}}
```

{{% note %}}

You found the speaker notes!

{{% /note %}}

---

<section data-noprocess>
  <h2>Write slides in HTML</h2>
  <p>Use a <code>section</code> tag with a <code>data-noprocess</code> attribute to avoid any processing by reveal-hugo.</p>
  <pre>
&lt;section data-noprocess&gt;
  &lt;h1&gt;Hello world!&lt;/h1&gt;
&lt;section&gt;</pre>
  <small>💡 This is useful if you can't get Markdown to output exactly what you want.</small>
</section>
