# CSS-to-go

A bit of CSS that makes a plain HTML document somewhat more pleasant to look at.

It makes a _gentle_ reset, and then tends to

- Page background color (light or dark)
- Font-family
- Headings, sizes 1-4 (avoid 5+ please)
- Copy-text readability (paragraphs)
- Ordered and unordered lists (items)
- Form controls (textinputs, checkboxes, radio buttons, selects, submit- and regular buttons)

There are also a small number of utility classes.  Read more below (_coming_).


## Installation

    npm i css-to-go

## Usage

Import it for your bundler to handle

`App.jsx`:

    import from "css-to-go";


or just link to it inside node_modules.

`index.html` (excerpt):

    <head>

      ...

      <link rel="stylesheet"
        href="[path to]/node_modules/css-to-go/dist/css-to-go.min.css"
      />
    </head>
