# clean-jsdoc-theme-example
A repo which shows how to setup clean-jsdoc-theme

## Requirements
1.  node.js, ([Download Node.js](https://nodejs.org/en/download/)). Make sure you have node.js version 12 or later. Older versions of the node might work but are not guaranteed.
1. npm or yarn.

## Installation
You need to install jsdoc: 

```bash
npm i jsdoc
# or
yarn add jsdoc
```

Then you need to install clean-jsdoc-theme:

```bash
npm i clean-jsdoc-theme
# or
yarn add clean-jsdoc-theme
```

## Setup
At first, you have to create a config file. You can name it anything but for simplicity, keep it as `jsdoc.json`. In `jsdoc.json` you have to add some properties:

```json
{
    "source": {
        // In include you have to add the folder(s) you want to include
        // or individual file(s) you want to include.
        // path to folder(s) or file(s) should be relative to jsdoc.json
        // file
        "include": ["src", "README.md", "package.json"]
    },

    "opts": {
        "encoding": "utf8",
        "readme": "./README.md",
        // Output folder.
        "destination": "docs/",
        "recurse": true,
        "verbose": true,
        // Which template to use.
        "template": "./node_modules/clean-jsdoc-theme",
        "theme_opts": {
            // Here we have to add all the options specific to
            // clean jsdoc theme.
            // For all jsdoc options visit: https://github.com/ankitskvmdam/clean-jsdoc-theme#options
            "default_theme": "dark"
        }
    },
    "markdown": {
        "hardwrap": false, // This is important, otherwise some features might not work.
        "idInHeadings": true // This is important, otherwise some features might not work.
    }
}
```

> Look at this repo `jsdoc.json` file as an example.

For more jsdoc configuration visit [https://jsdoc.app/about-configuring-jsdoc.html](https://jsdoc.app/about-configuring-jsdoc.html)

For clean-jsdoc-theme opts visit
1. [https://github.com/ankitskvmdam/clean-jsdoc-theme#options]( https://github.com/ankitskvmdam/clean-jsdoc-theme#options)
1. [https://github.com/ankitskvmdam/clean-jsdoc-theme#cheat-sheet](https://github.com/ankitskvmdam/clean-jsdoc-theme#cheat-sheet)

## Generate docs
1. Add a generate script to package.json.
```json
"script": {
    // ...other scripts
    // Generate docs script below.
    "generate-docs": "jsdoc --configure jsdoc.json --verbose"
}
```

> For more information you can see the package.json file in this repo.

After adding the script to package.json you have to run the following command:
```bash
npm run generate-docs
# or
yarn generate-docs
```

If everything works well then you will see a `docs` folder will be generated in which you will have all the docs.

## Contact
Mail me at: [hello@ankdev.me](hello@ankdev.me)

## License
Licensed under the MIT license.