---
layout: ../layouts/main
---

# CSS To Go

<b>Whoa! This looks quite _unstyled_... But read on!</b>

(This is the overview page. Also look at the examples of [the standard theme](/examples) and [the light theme](/examples/theme-light)).


## What is it?

Sometimes, I write a bit of plain HTML and then start giving it some minimal
styling. Recently, I've been thinking more and more like this:

> If only there was a small<sup>*</sup> `CSS` file that I could drop into the
> project just to get it over with instead!
>
> <div style="margin-top: 1em; text-align: right;"><sup>*) For some value of "small"</sup></div>

&mdash; so I created [CSS To Go](https://github.com/npup/css-to-go).

## What does it look like?

<div class="ctg-form-controls--col">

<label>
    <input type="checkbox" onclick="document.body.classList.toggle('ctg-root')">
    Check this box to see what <em>CSS To Go</em> looks like
</label>

<label>
    <input type="checkbox" onclick="document.body.classList.toggle('ctg-theme--light')">
    Toggle theme (standard vs. light mode)
</label>

</div>

## What does it do?

Basically, it does:

1. apply some styling on bare elements
2. make available a small number of utility classes

All in all, it is a quite small (1.93 kB, minified and gzipped) set of global `CSS` that is easy to apply to most any site.

### How to use it

To enable _CSS To Go_, wrap your content with the CSS class `ctg-root` (putting it all the way up on the `<body>` tag works just fine).

    <!DOCTYPE html>
    <html>
    <head>
        <title>Example</title>
        <link rel="stylesheet" href="/path/to/css-to-go.css">
    </head>
    <body class="ctg-root ctg-container ctg-theme--light">

        ... your content

    </body>
    </html>

That's it! To switch theme, toggle the `ctg-theme--light` class, which also applies to all that i is wrapping.  The `ctg-container` class is a totally optional (and typical) content wrapper class &mdash; read more about in the [examples](/examples#example-utility-classes--container).

### Element styling

Most of its business is applying `CSS` to <em>tag names</em>, so that no manual styling at all need be applied.  Such an effect can be seen on this very page, should you switch the theme on.

### Utility classes

There are also a small number of utility classes, to help on those occasions
that you just got to have that little something that you "always need", but for which do
not fancy bringing in all of [Tailwind CSS](https://tailwindcss.com/) or
something similar.  Read more about this in the [examples, utility classes section](/examples#example-utility-classes).

By the way, _do_ use [Tailwind CSS](https://tailwindcss.com/)! It is awesome.

