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
