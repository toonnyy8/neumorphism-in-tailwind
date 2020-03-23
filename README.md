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
		neomorphism: {
			sources: {
				"l": 0,
				"lt": Math.PI * (1 / 8),
				"t": Math.PI * (2 / 8),
				"rt": Math.PI * (3 / 8),
				"r": Math.PI * (4 / 8),
				"rb": Math.PI * (5 / 8),
				"b": Math.PI * (6 / 8),
				"lb": Math.PI * (7 / 8),
			},
			distances: {
				"xs": "3px",
				"sm": "7px",
				"base": "11px",
				"md": "15px",
				"lg": "20px",
				"xl": "25px",
				"2xl": "30px",
				"3xl": "35px",
				"4xl": "40px",
				"5xl": "45px",
				"6xl": "50px"
			},
			blurs: {
				"sm": (value) => `calc(1 * var(${value}))`,
				"base": (value) => `calc(2 * var(${value}))`,
				"md": (value) => `calc(3 * var(${value}))`
			}
		},
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

#### ._nmp\_
> box-shadow
#### ._nmp_drop
> drop-shadow
#### ._nmp_text
> text-shadow

### 參數

#### .-nmp_src-\-[<source\>] : 光線位置
> 無預設

#### .-nmp_shape-\-[ inner | outer ] : 凹入 | 凸出
> 預設為 outer

#### .-nmp_dist-\-[ <dist\> ] : 光影距離大小
> 無預設

>##### .-nmp_dist-light-\-[ <dist\> ] : 光線距離大小
>> 無預設

>##### .-nmp_dist-shadow-\-[ <dist\> ] : 陰影距離大小
>> 無預設

#### .-nmp_color-\-[ <color\> ] : 光影顏色
> 預設為 transparent  

> ##### .-nmp_light-\-[ <color\> ] : 光線顏色
>> 預設為 transparent 

> ##### .-nmp_shadow-\-[ <color\> ] : 陰影顏色
>> 預設為 transparent  

#### .-nmp-blur-\-[ <blur\> ] : 光影模糊程度
> 預設為 base

> ##### .-nmp_blur-light-\-[ <blur\> ] : 光線模糊程度
>> 預設為 base

> ##### .-nmp_blur-shadow-\-[ <blur\> ] : 陰影模糊程度
>> 預設為 base
---

[範例](https://toonnyy8.github.io/neomorphism-in-tailwind/)

```html
<div class="_nmp_ -nmp_src--lt -nmp_light--pink-700 -nmp_shadow--black -nmp_dist--xs active:-nmp_shape--inner">
    使用 _nmp_ 函數
    -nmp_src--lt : 光線從左上方照過來
    -nmp_light--pink-700 : 光線顏色設定為 pink-700
    -nmp_shadow--black : 陰影顏色設定為 black
    -nmp_dist--xs : 光影距離大小設定為 xs
    active:-nmp_shape--inner : 點擊時將 shape 設定為 inner
</div>
```

---

## 自定義

可藉由 css 變數擴充參數
> 各 css 變數所掌管的效果
```css
/* 光亮處顏色 */
--nmp-color-light : rgba();

/* 陰影處顏色 */
--nmp-color-shadow : rgba();

/* 凹入 */
--nmp-inner : inset;
/* 凸出 */
--nmp-inner : ;

/* 光線距離大小 */
--nmp-dist-light : px;
/* 陰影距離大小 */
--nmp-dist-shadow : px;

/* 光線模糊 */
--nmp-blur-light : px;
/* 陰影模糊 */
--nmp-blur-shadow : px;

/* 光源平行偏移 */
--nmp-light-x : number;
/* 光源垂直偏移 */
--nmp-light-y : number;
/* 陰影平行偏移 */
--nmp-shadow-x : number;
/* 陰影垂直偏移 */
--nmp-shadow-y : number;
/* 用於調整光源方向 */
/* number 是單純數字，不加單位 */
```
