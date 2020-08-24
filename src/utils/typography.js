import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.618,
  googleFonts: [
    {
      name: "Nanum Gothic",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Nanum Gothic", "sans-serif"],
  bodyFontFamily: ["Nanum Gothic", "serif"],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
