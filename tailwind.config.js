const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
            addVariant('current', '&.active');
        })
  ],
}
