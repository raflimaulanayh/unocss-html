# Uno CSS HTML Boiler Plate✨

Step by step Uno CSS Installation in HTML

## 1. Please make sure you're on the ROOT folder, then install all required modules by typing

```bash
pnpm install
```

## 2. After successfully installing all required modules, you can run the dev server by running

```bash
pnpm dev
```

*********

### if you want to do the installation from scratch, follow these steps

*1. `pnpm add -D unocss`
*2. `pnpm add -D @unocss/cli`
*3. `create the uno.config.js file in the root`

## And add this

```js
import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerCompileClass,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto:300,400,500,600,700,800,900",
      },
    }),
  ],
  theme: {
    colors: {
      primary: "#097A7C",
      secondary: "#E54F42",
      tertiary: "#E1A738",
      linen: "#FAEBE2",
      bianca: "#FCFAF3",
      dark: "#181818",
      "dark-gray": "#202123",
      stoke: "#3A3A3A",
    },
  },
  transformers: [
    transformerCompileClass({
      classPrefix: ":husl:",
    }),
  ],
});
```

*4. `look at the folder structure I've created to see where the syntax is placed, especially the placement of the main.css file`
*5. `then add this to the package.json file`

```json
{
 "name": "unocss-html-boilerplate",
 "version": "0.1.0",
 "private": true,
 "scripts": {
  "dev": "unocss -c uno.config.ts -o src/shared/styles/main.css -w *.html"
 },
 "devDependencies": {
  "@unocss/cli": "^0.53.3",
  "unocss": "^0.53.3"
 },
 "dependencies": {
  "@unocss/preset-uno": "^0.53.3",
  "@unocss/preset-web-fonts": "^0.53.3",
  "@unocss/preset-wind": "^0.52.3",
  "@unocss/transformer-compile-class": "^0.52.3",
  "@unocss/reset": "^0.53.3"
 }
}
```

*6. `when done, run this command`

```bash
pnpm dev
```

*7. `last step run it using the live server extension directly in the vs code`

## That's it, happy building your project🥳🎉
