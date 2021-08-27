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

<div class=".ctg-form-controls--col">

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

Basically, it is this:

1. Some element styling
2. Makes available a small number of utility classes

It is a quite small set of global `CSS` that is easy to apply to most any site.

### How to use it

To enable _CSS To Go_, wrap your content with the class `.ctg-root` (putting it all the way up on the `<body>` tag works just fine).

    <!DOCTYPE html>
    <html>
    <head>
        <title>Example</title>
        <link rel="stylesheet" href="/path/to/css-to-go.css">
    </head>
    <body class="ctg-root">

        ... your content

    </body>
    </html>

That's it! To switch theme, toggle the `ctg-theme--light` class for
the appropriate portion of your content.

### Element styling

Most of its business is applying `CSS` to <em>tag names</em>, so no classes at
all need be applied there.  Some this can be seen on this very page, if you switch the theme on.

### Utility classes

There are also a small number of utility classes, to help on those occasions
that you just need a little something that you always need, but do not fancy
bringing in all of [Tailwind CSS](https://tailwindcss.com/) or something similar.

By the way, do use [Tailwind CSS](https://tailwindcss.com/)! It is awesome.

