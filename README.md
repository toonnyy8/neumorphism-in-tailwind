# neomorphism-in-tailwind

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
### 函數

#### .neomorphism
> ##### box-shadow
#### .neomorphism-drop
> ##### drop-shadow
#### .neomorphism-text
> ##### text-shadow

### 參數

#### .nmp-[ l | r | t | b | lt | rt | lb | rb ] : 光線位置
> ##### 無預設

#### .nmp-[ inner | outer ] : 凹入 | 凸出
> ##### 預設為 outer

#### .nmp-[ xs | sm | base | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl ] : 範圍大小
> ##### 無預設

#### .nmp-[ light | shadow ]-[ &lt;color&gt; ] : 光亮處 | 陰影處的顏色
> ##### 預設為 transparent  

#### .nmp-[ light | shadow ]-blur-[ sm | base | md ] : 光亮處 | 陰影處的模糊程度

> ##### 預設為 base

---

[範例](https://toonnyy8.github.io/neomorphism-in-tailwind/)

```html
<div class="neomorphism nmp-lt nmp-light-pink-700 nmp-shadow-black nmp-xs active:nmp-inner">
    <!-- 使用 neomorphism 函數 -->
    <!-- nmp-lt : 光線從左上方照過來 -->
    <!-- nmp-light-pink-700 : 光亮處顏色設定為 pink-700 -->
    <!-- nmp-shadow-black : 陰影處顏色設定為 black -->
    <!-- nmp-xs : 大小設定為 xs -->
    <!-- active:nmp-inner : 點擊時設定為 inner -->
    xs
</div>
```

---

## 自定義

可藉由 css 變數擴充參數
> 各 css 變數所掌管的效果
```css
/* 光亮處顏色 */
--nmp-light-color : rgba();

/* 陰影處顏色 */
--nmp-shadow-color : rgba();

/* 凹入 */
--nmp-inner : inset;
/* 凸出 */
--nmp-inner : ;

/* 大小 */
--nmp-size : px;

/* 光亮處模糊 */
--nmp-light-blur : px;

/* 陰影處模糊 */
--nmp-shadow-blur : px;

/* 光源平行偏移 */
--nmp-light-w : number;
/* 光源垂直偏移 */
--nmp-light-h : number;
/* 陰影平行偏移 */
--nmp-shadow-w : number;
/* 陰影垂直偏移 */
--nmp-shadow-h : number;
/* number 是單純數字，不加單位 */
```