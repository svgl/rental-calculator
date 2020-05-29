module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['"IBM Plex Mono"', '"Menlo"', '"DejaVu Sans Mono"', '"Bitstream Vera Sans Mono"', 'Courier', 'monospace'],
      'sans': ['"IBM Plex Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      'serif': ['"IBM Plex Serif"', 'Georgia', 'Times', 'serif']
    }
  },
  variants: {},
  plugins: [],
}
