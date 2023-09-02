
module.exports = ({ addComponents, variants, theme }) => {
    let neumorphismUtilities = {
        "._nmp_": {
            "--nmp-color-light": "rgba(0, 0, 0, 0)",
            "--nmp-color-shadow": "rgba(0, 0, 0, 0)",
            "--nmp-inner": "",
            "--nmp-dist-light": "0px",
            "--nmp-dist-shadow": "0px",
            "--nmp-blur-light": "calc(2 * var(--nmp-dist-light))",
            "--nmp-blur-shadow": "calc(2 * var(--nmp-dist-shadow))",
            "--nmp-light-x": "0",
            "--nmp-light-y": "0",
            "--nmp-shadow-x": "0",
            "--nmp-shadow-y": "0",
            "box-shadow":
                `var(--nmp-inner) calc(var(--nmp-shadow-x) * var(--nmp-dist-shadow)) calc(var(--nmp-shadow-y) * var(--nmp-dist-shadow)) var(--nmp-blur-shadow) var(--nmp-color-shadow),
                         var(--nmp-inner) calc(var(--nmp-light-x) * var(--nmp-dist-light)) calc(var(--nmp-light-y) * var(--nmp-dist-light)) var(--nmp-blur-light) var(--nmp-color-light)`
        },
        "._nmp_drop": {
            "--nmp-color-light": "rgba(0, 0, 0, 0)",
            "--nmp-color-shadow": "rgba(0, 0, 0, 0)",
            "--nmp-dist-light": "0px",
            "--nmp-dist-shadow": "0px",
            "--nmp-blur-light": "calc(2 * var(--nmp-dist-light))",
            "--nmp-blur-shadow": "calc(2 * var(--nmp-dist-shadow))",
            "--nmp-light-x": "0",
            "--nmp-light-y": "0",
            "--nmp-shadow-x": "0",
            "--nmp-shadow-y": "0",
            "-webkit-filter":
                `drop-shadow(calc(var(--nmp-shadow-x) * var(--nmp-dist-shadow)) calc(var(--nmp-shadow-y) * var(--nmp-dist-shadow)) var(--nmp-blur-shadow) var(--nmp-color-shadow))
                         drop-shadow(calc(var(--nmp-light-x) * var(--nmp-dist-light)) calc(var(--nmp-light-y) * var(--nmp-dist-light)) var(--nmp-blur-light) var(--nmp-color-light))`,
            "filter":
                `drop-shadow(calc(var(--nmp-shadow-x) * var(--nmp-dist-shadow)) calc(var(--nmp-shadow-y) * var(--nmp-dist-shadow)) var(--nmp-blur-shadow) var(--nmp-color-shadow))
                         drop-shadow(calc(var(--nmp-light-x) * var(--nmp-dist-light)) calc(var(--nmp-light-y) * var(--nmp-dist-light)) var(--nmp-blur-light) var(--nmp-color-light))`,
        },
        "._nmp_text": {
            "--nmp-color-light": "rgba(0, 0, 0, 0)",
            "--nmp-color-shadow": "rgba(0, 0, 0, 0)",
            "--nmp-dist-light": "0px",
            "--nmp-dist-shadow": "0px",
            "--nmp-blur-light": "calc(2 * var(--nmp-dist-light))",
            "--nmp-blur-shadow": "calc(2 * var(--nmp-dist-shadow))",
            "--nmp-light-x": "0",
            "--nmp-light-y": "0",
            "--nmp-shadow-x": "0",
            "--nmp-shadow-y": "0",
            "text-shadow":
                `calc(var(--nmp-shadow-x) * var(--nmp-dist-shadow)) calc(var(--nmp-shadow-y) * var(--nmp-dist-shadow)) var(--nmp-blur-shadow) var(--nmp-color-shadow),
                         calc(var(--nmp-light-x) * var(--nmp-dist-light)) calc(var(--nmp-light-y) * var(--nmp-dist-light)) var(--nmp-blur-light) var(--nmp-color-light)`,
        },

        ".-nmp_shape--outer": {
            "--nmp-inner": "",
        },
        ".-nmp_shape--inner": {
            "--nmp-inner": "inset",
        }
    }

    let userDefined = theme("neumorphism", {})

    let sources = {
        "l": 0,
        "lt": Math.PI * (1 / 4),
        "t": Math.PI * (1 / 2),
        "rt": Math.PI * (3 / 4),
        "r": Math.PI,
        "rb": Math.PI * (5 / 4),
        "b": Math.PI * (3 / 2),
        "lb": Math.PI * (7 / 4),
    }
    Object.keys(userDefined.sources).forEach((source) => {
        sources[source] = userDefined.sources[source]
    })
    Object.keys(sources).forEach((source) => {
        neumorphismUtilities[`.-nmp_src--${source}`] = {
            "--nmp-light-x": `${-Math.cos(sources[source])}`,
            "--nmp-light-y": `${-Math.sin(sources[source])}`,
            "--nmp-shadow-x": `${Math.cos(sources[source])}`,
            "--nmp-shadow-y": `${Math.sin(sources[source])}`,
        }
    })

    let distances = {
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
    }
    Object.keys(userDefined.distances).forEach((distance) => {
        distances[distance] = userDefined.distances[distance]
    })
    Object.keys(distances).forEach((distance) => {
        neumorphismUtilities[`.-nmp_dist--${distance}`] = {
            "--nmp-dist-light": distances[distance],
            "--nmp-dist-shadow": distances[distance]
        }
        neumorphismUtilities[`.-nmp_dist-light--${distance}`] = {
            "--nmp-dist-light": distances[distance],
        }
        neumorphismUtilities[`.-nmp_dist-shadow--${distance}`] = {
            "--nmp-dist-shadow": distances[distance],
        }
    })

    let blurs = {
        "sm": (value) => `calc(1 * var(${value}))`,
        "base": (value) => `calc(2 * var(${value}))`,
        "md": (value) => `calc(3 * var(${value}))`
    }
    Object.keys(userDefined.blurs).forEach((blur) => {
        blurs[blur] = userDefined.blurs[blur]
    })
    Object.keys(blurs).forEach((blur) => {
        neumorphismUtilities[`.-nmp_blur--${blur}`] = {
            "--nmp-blur-light": blurs[blur]("--nmp-dist-light"),
            "--nmp-blur-shadow": blurs[blur]("--nmp-dist-shadow")
        }
        neumorphismUtilities[`.-nmp_blur-light--${blur}`] = {
            "--nmp-blur-light": blurs[blur]("--nmp-dist-light"),
        }
        neumorphismUtilities[`.-nmp_blur-shadow--${blur}`] = {
            "--nmp-blur-shadow": blurs[blur]("--nmp-dist-shadow"),
        }
    })

    let colors = theme("colors", {});
    Object.keys(colors).forEach(color => {
        if (typeof colors[color] == "string") {
            neumorphismUtilities[`.-nmp_color--${color}`] = {
                "--nmp-color-light": colors[color],
                "--nmp-color-shadow": colors[color]
            }
            neumorphismUtilities[`.-nmp_light--${color}`] = {
                "--nmp-color-light": colors[color]
            }
            neumorphismUtilities[`.-nmp_shadow--${color}`] = {
                "--nmp-color-shadow": colors[color]
            }
        } else {
            Object.keys(colors[color]).forEach(colorLevel => {
                neumorphismUtilities[`.-nmp_color--${color}-${colorLevel}`] = {
                    "--nmp-color-light": colors[color][colorLevel],
                    "--nmp-color-shadow": colors[color][colorLevel]
                }
                neumorphismUtilities[`.-nmp_light--${color}-${colorLevel}`] = {
                    "--nmp-color-light": colors[color][colorLevel]
                }
                neumorphismUtilities[`.-nmp_shadow--${color}-${colorLevel}`] = {
                    "--nmp-color-shadow": colors[color][colorLevel]
                }
            })
        }
    })

    addComponents(
        {
            [`@variants ${[variants("neumorphism") || ['responsive', 'hover', 'focus', 'active']]}`]: neumorphismUtilities
        }
    )
}
