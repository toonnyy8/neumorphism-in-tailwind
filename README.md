# neomorphism-in-tailwind

[範例](https: |  | toonnyy8.github.io | neomorphism-in-tailwind | )


## Install
```bash
npm install --save-dev neomorphism-in-tailwind
```

## Usage
```js
 | * tailwind.config.js * | 
module.exports = {
   | * ... * | 
  theme: {
     | * ... * | 
    colors: {  | * colors * |  },
  },

  variants: { 
     | * ... * | 
     | * all the following default to ['responsive', 'hover', 'focus', 'active'] * | 
    neomorphism: ['responsive', 'hover', 'focus', 'active'],
  },

  plugins: [
    require('neomorphism-in-tailwind')
  ],
}
```

### .neomorphism
### .neomorphism-drop
### .neomorphism-text

#### .nmp-[ l | r | t | b | lt | rt | lb | rb ] : 光線位置

#### .nmp-[ inner | outer ] : 光線向內 | 向外

#### .nmp-[ xs | sm | base | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl ] : 範圍大小

#### .nmp-[ light | shadow ]-[ &lt;color&gt; ] : 光亮處 | 陰影處的顏色

> .nmp-light-gray-100  
> .nmp-shadow-black

#### .nmp-[ light | shadow ]-blur-[ sm | base | md ] : 光亮處 | 陰影處的模糊程度