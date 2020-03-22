
module.exports = ({ addUtilities, variants, theme }) => {
    let neomorphismUtilities = {
        ".neomorphism": {
            "--nmp-light-color": "rgba(0, 0, 0, 0)",
            "--nmp-shadow-color": "rgba(0, 0, 0, 0)",
            "--nmp-inner": "",
            "--nmp-size": "0px",
            "--nmp-light-blur": "calc(2 * var(--nmp-size))",
            "--nmp-shadow-blur": "calc(2 * var(--nmp-size))",
            "--nmp-light-w": "0",
            "--nmp-light-h": "0",
            "--nmp-shadow-w": "0",
            "--nmp-shadow-h": "0",
            "box-shadow":
                `var(--nmp-inner) calc(var(--nmp-shadow-w) * var(--nmp-size)) calc(var(--nmp-shadow-h) * var(--nmp-size)) var(--nmp-shadow-blur) var(--nmp-shadow-color),
                         var(--nmp-inner) calc(var(--nmp-light-w) * var(--nmp-size)) calc(var(--nmp-light-h) * var(--nmp-size)) var(--nmp-light-blur) var(--nmp-light-color)`
        },
        ".neomorphism-drop": {
            "--nmp-light-color": "rgba(0, 0, 0, 0)",
            "--nmp-shadow-color": "rgba(0, 0, 0, 0)",
            "--nmp-size": "0px",
            "--nmp-light-blur": "calc(2 * var(--nmp-size))",
            "--nmp-shadow-blur": "calc(2 * var(--nmp-size))",
            "--nmp-light-w": "0",
            "--nmp-light-h": "0",
            "--nmp-shadow-w": "0",
            "--nmp-shadow-h": "0",
            "-webkit-filter":
                `drop-shadow(calc(var(--nmp-shadow-w) * var(--nmp-size)) calc(var(--nmp-shadow-h) * var(--nmp-size)) var(--nmp-shadow-blur) var(--nmp-shadow-color))
                         drop-shadow(calc(var(--nmp-light-w) * var(--nmp-size)) calc(var(--nmp-light-h) * var(--nmp-size)) var(--nmp-light-blur) var(--nmp-light-color))`,
            "filter":
                `drop-shadow(calc(var(--nmp-shadow-w) * var(--nmp-size)) calc(var(--nmp-shadow-h) * var(--nmp-size)) var(--nmp-shadow-blur) var(--nmp-shadow-color))
                         drop-shadow(calc(var(--nmp-light-w) * var(--nmp-size)) calc(var(--nmp-light-h) * var(--nmp-size)) var(--nmp-light-blur) var(--nmp-light-color))`,
        },
        ".neomorphism-text": {
            "--nmp-light-color": "rgba(0, 0, 0, 0)",
            "--nmp-shadow-color": "rgba(0, 0, 0, 0)",
            "--nmp-size": "0px",
            "--nmp-light-blur": "calc(2 * var(--nmp-size))",
            "--nmp-shadow-blur": "calc(2 * var(--nmp-size))",
            "--nmp-light-w": "0",
            "--nmp-light-h": "0",
            "--nmp-shadow-w": "0",
            "--nmp-shadow-h": "0",
            "box-shadow":
                `calc(var(--nmp-shadow-w) * var(--nmp-size)) calc(var(--nmp-shadow-h) * var(--nmp-size)) var(--nmp-shadow-blur) var(--nmp-shadow-color),
                         calc(var(--nmp-light-w) * var(--nmp-size)) calc(var(--nmp-light-h) * var(--nmp-size)) var(--nmp-light-blur) var(--nmp-light-color)`,
        },

        ".nmp-l": {
            "--nmp-light-w": "-1",
            "--nmp-light-h": "0",
            "--nmp-shadow-w": "1",
            "--nmp-shadow-h": "0",
        },
        ".nmp-r": {
            "--nmp-light-w": "1",
            "--nmp-light-h": "0",
            "--nmp-shadow-w": "-1",
            "--nmp-shadow-h": "0",
        },

        ".nmp-t": {
            "--nmp-light-w": "0",
            "--nmp-light-h": "-1",
            "--nmp-shadow-w": "0",
            "--nmp-shadow-h": "1",
        },

        ".nmp-b": {
            "--nmp-light-w": "0",
            "--nmp-light-h": "1",
            "--nmp-shadow-w": "0",
            "--nmp-shadow-h": "-1",
        },

        ".nmp-lt": {
            "--nmp-light-w": "-1",
            "--nmp-light-h": "-1",
            "--nmp-shadow-w": "1",
            "--nmp-shadow-h": "1",
        },
        ".nmp-rb": {
            "--nmp-light-w": "1",
            "--nmp-light-h": "1",
            "--nmp-shadow-w": "-1",
            "--nmp-shadow-h": "-1",
        },

        ".nmp-rt": {
            "--nmp-light-w": "1",
            "--nmp-light-h": "-1",
            "--nmp-shadow-w": "-1",
            "--nmp-shadow-h": "1",
        },

        ".nmp-lb": {
            "--nmp-light-w": "-1",
            "--nmp-light-h": "1",
            "--nmp-shadow-w": "1",
            "--nmp-shadow-h": "-1",
        },

        ".nmp-inner": {
            "--nmp-inner": "inset",
        },

        ".nmp-outer": {
            "--nmp-inner": "",
        },

        ".nmp-xs": {
            "--nmp-size": "3px",
        },

        ".nmp-sm": {
            "--nmp-size": "7px",
        },

        ".nmp-base": {
            "--nmp-size": "11px",
        },

        ".nmp-md": {
            "--nmp-size": "15px",
        },

        ".nmp-lg": {
            "--nmp-size": "20px",
        },

        ".nmp-xl": {
            "--nmp-size": "25px",
        },

        ".nmp-2xl": {
            "--nmp-size": "30px",
        },

        ".nmp-3xl": {
            "--nmp-size": "35px",
        },

        ".nmp-4xl": {
            "--nmp-size": "40px",
        },

        ".nmp-5xl": {
            "--nmp-size": "45px",
        },

        ".nmp-6xl": {
            "--nmp-size": "50px",
        },

        ".nmp-blur-sm": {
            "--nmp-light-blur": "calc(1 * var(--nmp-size))",
            "--nmp-shadow-blur": "calc(1 * var(--nmp-size))",
        },

        ".nmp-blur-base": {
            "--nmp-light-blur": "calc(2 * var(--nmp-size))",
            "--nmp-shadow-blur": "calc(2 * var(--nmp-size))",
        },

        ".nmp-blur-md": {
            "--nmp-light-blur": "calc(3 * var(--nmp-size))",
            "--nmp-shadow-blur": "calc(3 * var(--nmp-size))",
        },

        ".nmp-light-blur-sm": {
            "--nmp-light-blur": "calc(1 * var(--nmp-size))",
        },

        ".nmp-light-blur-base": {
            "--nmp-light-blur": "calc(2 * var(--nmp-size))",
        },

        ".nmp-light-blur-md": {
            "--nmp-light-blur": "calc(3 * var(--nmp-size))",
        },

        ".nmp-shadow-blur-sm": {
            "--nmp-shadow-blur": "calc(1 * var(--nmp-size))",
        },

        ".nmp-shadow-blur-base": {
            "--nmp-shadow-blur": "calc(2 * var(--nmp-size))",
        },

        ".nmp-shadow-blur-md": {
            "--nmp-shadow-blur": "calc(3 * var(--nmp-size))",
        },
    }

    const colors = theme("colors", {});

    (["light", "shadow"]).forEach(type => {
        Object.keys(colors).forEach(color => {
            if (typeof colors[color] == "string") {
                neomorphismUtilities[`.nmp-${type}-${color}`] = {
                    [`--nmp-${type}-color`]: colors[color]
                }
            } else {
                Object.keys(colors[color]).forEach(colorLevel => {
                    neomorphismUtilities[`.nmp-${type}-${color}-${colorLevel}`] = {
                        [`--nmp-${type}-color`]: colors[color][colorLevel]
                    }
                })
            }
        })
    })

    addUtilities(
        neomorphismUtilities,
        {
            variants: variants("neomorphism") || ['responsive', 'hover', 'focus', 'active']
        }
    )
}
