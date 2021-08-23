---
layout: ../layouts/main
---

# CSS To Go

<b>Whoa! This looks quite _unstyled_... But read on!</b>

(This is the overview page. Also look at the examples of [the standard theme](/theme-dark) and [the light theme](/theme-light)).

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


## What it does

Basically, it is this:

1. Some element styling
2. A small number of utility classes

It is a quite small set of global `CSS` that are easy to apply to most any site.

### How to use it

To enable any of these styles, wrap your content with the class `.ctg-root` (putting it all the way up on the `<body>` tag works just fine).

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


### Element styling

Most of its business is applying `CSS` to <em>tag names</em>, so no classes at
all need be applied there. These elements get some help:

- Headings (levels 1-4)
- Paragraphs
- Lists (ordered and unordered)
- Hyperlinks (they look like [this](https://example.com/).)
- Form controls with labels
- `\<em>` and `\<blockquote>` elements

Most of these can be seen on this very page.

### Utility classes

There are also a small number of utility classes:

- `.ctg-form-controls--row` and `.ctg-form-controls--col` &mdash; for layout of form controls
- `.ctg-note` &mdash; a "notification" type visual
- `.ctg-general-yes` and `.ctg-general-no` &mdash; to signal "positive" and "negative" signals, respectively
- `.ctg-formatted-date` &mdash; to format dates: <span class="ctg-formatted-date">2021-06-15</span>
- `.ctg-formatted-numerical` &mdash; to format numbers in general: <span class="ctg-formatted-numerical">125 56</span>
- `.ctg-container` &mdash; to be used as a top level container

(Granted, those two last formatters are merely applying some monospace to the font.)

### Utility examples

#### Notes

The available types of "notes" are:

_Plain note_: `.ctg-note`

<div class="ctg-note">
    Please read this
</div>

_Info note_: `.ctg-note--info`

<div class="ctg-note--info">
    You have more data available
</div>

_Warning note_: `.ctg-note--warn`

<div class="ctg-note--warn">
    Look out ahead!
</div>

_Error note_: `.ctg-note--error`

<div class="ctg-note--error">
    Stop doing that!
</div>

#### Signals

These just apply the positive and negative color/background pairs, no frills.
Here they are given to the `CSS To Go`-styled buttons:

`.ctg-general-no`  
<button type="button" class="ctg-general-no">Delete</button>

`.ctg-general-yes`  
<button type="button" class="ctg-general-yes">Submit</button>

A plain button, for comparison  
<button type="button">Ok</button>
