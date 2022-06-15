module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#474747',
        'too-dark-gray': '#8d95a7',
        'dark-grayish-blue': '#282c34',
      },
      spacing: {
        '700px': '700px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
