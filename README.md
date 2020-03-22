# neomorphism-in-tailwind

[範例](https://toonnyy8.github.io/neomorphism-in-tailwind/)


## Install
```bash
npm install --save-dev neomorphism-in-tailwind
```

## Usage
```js
/* tailwind.config.js */
module.exports = {
  /* ... */
  theme: {
    /* ... */
    colors: { /* colors */ },
  },

  variants: { 
    /* ... */
    /* all the following default to ['responsive', 'hover', 'focus', 'active'] */
    neomorphism: ['responsive', 'hover', 'focus', 'active'],
  },

  plugins: [
    require('neomorphism-in-tailwind')
  ],
}
```