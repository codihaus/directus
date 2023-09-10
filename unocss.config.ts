import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";

import path from "path";

export default defineConfig({
    shortcuts: [],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
        }),
        presetTypography(),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    theme: {
        colors: {
            primary: {
                "base": "var(--primary)",
                "lt": "var(--primary-alt)",
                "gt": "var(--primary-190)",
            },
        },
        container: {
            center: true,
            padding: "0.9375rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
            },
        },
        screens: {
            xs: "0",
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            xxl: "1400px",
        },
    },
});
