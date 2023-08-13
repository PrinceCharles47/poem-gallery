# poem-gallery

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## API endpoint
https://poetrydb.org/author/[author-name]
https://poetrydb.org/title/[poem-title]


### Sample response
[
    {
        "title": "London",
        "author": "William Blake",
        "lines": [
            "I wandered through each chartered street,",
            "  Near where the chartered Thames does flow,",
            "A mark in every face I meet,",
            "  Marks of weakness, marks of woe.",
            "",
            "In every cry of every man,",
            "  In every infant's cry of fear,",
            "In every voice, in every ban,",
            "  The mind-forged manacles I hear:",
            "",
            "How the chimney-sweeper's cry",
            "  Every blackening church appalls,",
            "And the hapless soldier's sigh",
            "  Runs in blood down palace-walls.",
            "",
            "But most, through midnight streets I hear",
            "  How the youthful harlot's curse",
            "Blasts the new-born infant's tear,",
            "  And blights with plagues the marriage-hearse."
        ],
        "linecount": "16"
    }
]
