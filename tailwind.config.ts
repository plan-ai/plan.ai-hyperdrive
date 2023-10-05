/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/layouts/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        screens: {
            xs: "640px",
            sm: "768px",
            md: "950px",
            lg: "1200px",
            xl: "1300px",
            "2xl": "1440px",
            "3xl": "1650px",
            "4xl": "1780px",
            "5xl": "2160px", // only need to control product grid mode in ultra 4k device
        },
        extend: {
            colors: {
                primary: "fe9a3e",
                "primary-custom-100": "#3F2710",
                "primary-custom-200": "#130B04",
                "primary-custom-300": "#0B0602",
                "primary-custom-400": "#4D4137",
                "light-gray": "#24262C",
                "new-yellow": "#F5E468",
                "new-green": "#6BAE63",
                "blue-green": "#24998B",
                "new-teal": "#0E313F",
                "new-red": "#FA9090",
                "new-blue": "#2A4B6B",
            },
            spacing: {
                13: "3.375rem",
            },
            margin: {
                "1/2": "50%",
            },
            padding: {
                full: "100%",
            },
            width: {
                "calc-320": "calc(100% - 320px)",
                "calc-358": "calc(100% - 358px)",
            },
            fontFamily: {
                body: ["Fira Code", "monospace"],
            },
            fontSize: {
                "5xs": ["5px", "9px"],
                "4xs": ["7px", "11px"],
                "3xs": ["9px", "13px"],
                "2xs": ["11px", "15px"],
                "13px": ["13px", "18px"],
            },
            borderWidth: {
                3: "3px",
            },
            boxShadow: {
                main: "0px 6px 18px rgba(0, 0, 0, 0.04)",
                light: "0px 4px 4px rgba(0, 0, 0, 0.08)",
                large: "0px 8px 16px rgba(17, 24, 39, 0.1)",
                card: "0px 2px 6px rgba(0, 0, 0, 0.06)",
                transaction: "0px 8px 16px rgba(17, 24, 39, 0.06)",
                expand: "0px 0px 50px rgba(17, 24, 39, 0.2)",
                button: "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            },
            dropShadow: {
                main: "0px 4px 8px rgba(0, 0, 0, 0.08)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                blink: "blink 1.4s infinite both;",
                "move-up": "moveUp 500ms infinite alternate",
                "scale-up": "scaleUp 500ms infinite alternate",
                "drip-expand": "expand 500ms ease-in forwards",
                "drip-expand-large": "expand-large 600ms ease-in forwards",
                "move-up-small": "moveUpSmall 500ms infinite alternate",
            },
            keyframes: {
                blink: {
                    "0%": { opacity: 0.2 },
                    "20%": { opacity: 1 },
                    "100%": { opacity: 0.2 },
                },
                expand: {
                    "0%": {
                        opacity: 0,
                        transform: "scale(1)",
                    },
                    "30%": {
                        opacity: 1,
                    },
                    "80%": {
                        opacity: 0.5,
                    },
                    "100%": {
                        transform: "scale(30)",
                        opacity: 0,
                    },
                },
                "expand-large": {
                    "0%": {
                        opacity: 0,
                        transform: "scale(1)",
                    },
                    "30%": {
                        opacity: 1,
                    },
                    "80%": {
                        opacity: 0.5,
                    },
                    "100%": {
                        transform: "scale(96)",
                        opacity: 0,
                    },
                },
                moveUp: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-20px)" },
                },
                moveUpSmall: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-10px)" },
                },
                scaleUp: {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
        fontFamily: {
            custom: ["Inter", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
