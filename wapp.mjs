/* wapp.mjs */

let globalTheme = {
    fonts: {
        regular: "Roboto-Regular.ttf",
        medium: "Roboto-Medium.ttf",
        icons: "MaterialIcons-Regular.ttf",
        iconsOutlined: "MaterialIconsOutlined-Regular.otf",
    },
    colors: {
        light: {
            surface: '200, 100, 200'
        },
        dark: {

        }
    }
}

/* if (navigationItem.seen)
return elem;
navigationItem.seen = true;

(new CSSStyleSheet()).replace(`
`).then((sheet) => { document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet });
 */

export const navigationItem = (properties) => {
    const elem = Object.create(null, {
        oninput: { value: (e) => { }, writable: true },
        onchange: { value: (e) => { }, writable: true },
        node: {
            value: (function () {
                const label = document.createElement('label');
                const input = document.createElement('input');
                const span = document.createElement('span');
                input.addEventListener('input', (e) => { elem.oninput(e) });
                input.addEventListener('change', (e) => { elem.onchange(e) });
                input.dataset.icon = '\ue88a';
                label.className = 'navigation';
                label.append(input, span);
                input.name = 'navigation';
                input.type = 'radio';
                return label;
            })()
        },
        label: {
            set(str) { this.node.lastElementChild.textContent = str; },
            get() { return this.node.lastElementChild.textContent; }
        },
        checked: {
            set(bool) { this.node.firstElementChild.checked = bool; },
            get() { return this.node.firstElementChild.checked; }
        },
        icon: {
            set(str) { this.node.firstElementChild.dataset.icon = str; },
            get() { return this.node.firstElementChild.dataset.icon; }
        },
    });

    Object.assign(elem, properties);
    Object.freeze(elem);

    if (navigationItem.seen)
        return elem;
    navigationItem.seen = true;

    (new CSSStyleSheet()).replace(`
    label.navigation {
        font-family: Font-Medium;
        font-weight: 500;
        font-size: 12rem;
        line-height: 1;
        position: relative;
        display: block;
        padding: 36rem 0 0 0;
        text-align: center;
    }
       
    label.navigation input {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        appearance: none;
        position: absolute;
    }
    
    label.navigation input::after {
        content: attr(data-icon);
        font-family: Font-Icons-Outlined;
        font-weight: 500;
        font-size: 24rem;
        line-height: 1.3;
    }
    
    label.navigation input:checked::after {
        font-family: Font-Icons;
    }
    
    label.navigation {
        width: 100%;
        height: 100%;
    }
    
    label.navigation input::before {
        content: "";
        position: relative;
        border-radius: 16rem;
        display: block;
        height: 32rem;
        width: 64rem;
        margin: auto;
    }
    
    label.navigation input::after {
        position: relative;
        width: 100%;
        margin: auto;
        text-align: center;
        position: absolute;
        top: 0;
    }

    /* ENABLED */
    label.navigation input:checked::before {
        /* Active indicator	Color*/
        background-color: rgba(var(--color-secondary-container), 1);
    }
    
    label.navigation input:checked+span {
        /* Text Color (active) */
        color: rgba(var(--color-on-surface), 1);
    }
    
    label.navigation input+span {
        /* Text Color (inactive) */
        color: rgba(var(--color-on-surface-variant), 1);
    }
    
    label.navigation input:checked::after {
        /* Icon (optional) Color (active) */
        color: rgba(var(--color-on-secondary-container), 1);
    }
    
    label.navigation input::after {
        /* Icon (optional) Color (inactive) */
        color: rgba(var(--color-on-surface-variant), 1);
    }
    
    /* HOVERED */
    label.navigation input:checked:not(:active):hover::before {
        /* State layer color (active) */
        background-image: linear-gradient(rgba(var(--color-on-surface), .08) 0 100%);
    }
    
    label.navigation input:not(:active):hover::before {
        /* State layer color (inactive) */
        background-image: linear-gradient(rgba(var(--color-on-surface-variant), .08) 0 100%);
    }
    
    /* FOCUSED / PRESSED */
    label.navigation input:checked:focus::before,
    label.navigation input:checked:active::before {
        /* State layer color (active) */
        background-image: linear-gradient(rgba(var(--color-on-surface), .12) 0 100%);
    }
    
    label.navigation input:focus::before,
    label.navigation input:active::before {
        /* State layer color (inactive) */
        background-image: linear-gradient(rgba(var(--color-on-surface-variant), .12) 0 100%);
    }
    `).then((sheet) => { document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet });

    return elem;
}

export const navigationBar = (properties) => {

    const elem = Object.create(null, {
        oninput: { value: (e) => { }, writable: true },
        onchange: { value: (e) => { }, writable: true },
        node: {
            value: (function () { 
                const nav = document.createElement('nav');
                nav.addEventListener('input', (e) => { elem.oninput(e) });
                nav.addEventListener('change', (e) => { elem.onchange(e) });
                return nav;
            })()
        },
        items: {
            value: [],
            writable: true
        },
        content: {
            set(arr) {
                this.items = [];
                for (const child of this.node.children) {
                    child.remove();
                }
                arr.forEach((item) => {
                    this.node.appendChild(item.node);
                    this.items.push(item);
                })
            }
        },
    });
    
    Object.assign(elem, properties);
    Object.freeze(elem);

    if (navigationBar.seen)
        return elem;
    navigationBar.seen = true;

    (new CSSStyleSheet()).replace(`
        nav { 
            z-index: 0;
            display: flex;
            height: 80px;
        }

        nav {   /* BOTTOM NAVIGATION */
            justify-content: center;
            column-gap: 8rem;
            width: 100%;
            height: 80rem;
            padding: 12rem 0 16rem 0;
        }
    `).then((sheet) => { document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet });

    return elem;
}

export const application = (properties, currentTheme = {}) => {

    globalTheme = Object.assign(globalTheme, currentTheme);
    globalTheme = Object.freeze(globalTheme);

    (new CSSStyleSheet()).replace(`
        @font-face {
            font-family: "Font-Regular";
            src: url("${globalTheme.fonts.regular}");
        }

        @font-face {
            font-family: "Font-Medium";
            src: url("${globalTheme.fonts.medium}");
        }

        @font-face {
            font-family: "Font-Icons";
            src: url("${globalTheme.fonts.icons}");
        }

        @font-face {
            font-family: "Font-Icons-Outlined";
            src: url("${globalTheme.fonts.iconsOutlined}");
        }

        @media (prefers-color-scheme: light) {
            :root {
                --color-primary: 103, 80, 164;
                /* #6750A4; */
                --color-primary-container: 234, 221, 255;
                /* #EADDFF */
                --color-secondary: 98, 91, 113;
                /* #625B71 */
                --color-secondary-container: ${globalTheme.colors.light.secondaryContainer}/* 232, 222, 248 */;
                /* #E8DEF8 */
                --color-tertiary: 125, 82, 96;
                /* #7D5260 */
                --color-tertiary-container: 255, 216, 228;
                /* #FFD8E4 */
                --color-surface: 255, 251, 254;
                /* #FFFBFE */
                --colr-background: 255, 251, 254;
                /* #FFFBFE */
                --color-error: 179, 38, 30;
                /* #B3261E */
                --color-error-container: 249, 222, 220;
                /* #F9DEDC */
                --color-on-primary: 255, 255, 255;
                /* #FFFFFF */
                --color-on-primary-container: 33, 0, 94;
                /* #21005E */
                --color-on-secondary: 255, 255, 255;
                /* #FFFFFF */
                --color-on-secondary-container: 30, 25, 43;
                /* #1E192B */
                --color-on-tertiary: 255, 255, 255;
                /* #FFFFFF */
                --color-on-tertiary-container: 55, 11, 30;
                /* #370B1E */
                --color-on-surface: 28, 27, 31;
                /* #1C1B1F */
                --color-on-surface-variant: 73, 69, 78;
                /* #49454E */
                --color-on-error: 255, 255, 255;
                /* #FFFFFF */
                --color-on-error-container: 65, 14, 11;
                /* #410E0B */
                --color-on-background: 28, 27, 31;
                /* #1C1B1F */
                --color-outline: 121, 116, 126;
                /* #79747E */
                --color-outline-variant: 196, 199, 197;
                /* #C4C7C5 */
                --color-shadow: 0, 0, 0;
                /* #000000 */
                --color-surface-tint-color: 103, 80, 164;
                /* #6750A4 */
                --color-inverse-surface: 49, 48, 51;
                /* #313033 */
                --color-inverse-on-surface: 244, 239, 244;
                /* #F4EFF4 */
                --color-inverse-primary: 208, 188, 255;
                /* #D0BCFF */
                --color-scrim: 0, 0, 0;
                /* #000000 */
            }
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --color-primary: 208, 188, 255;
                /* #D0BCFF */
                --color-primary-container: 79, 55, 139;
                /* #4F378B */
                --color-secondary: 204, 194, 220;
                /* #CCC2DC */
                --color-secondary-container: 74, 68, 88;
                /* #4A4458 */
                --color-tertiary: 239, 184, 200;
                /* #EFB8C8 */
                --color-tertiary-container: 99, 59, 72;
                /* #633B48 */
                --color-surface: 28, 27, 31;
                /* #1C1B1F */
                --colr-background: 28, 27, 31;
                /* #1C1B1F */
                --color-error: 242, 184, 181;
                /* #F2B8B5 */
                --color-error-container: 140, 29, 24;
                /* #8C1D18 */
                --color-on-primary: 55, 30, 115;
                /* #371E73 */
                --color-on-primary-container: 234, 221, 255;
                /* #EADDFF */
                --color-on-secondary: 51, 45, 65;
                /* #332D41 */
                --color-on-secondary-container: 232, 222, 248;
                /* #E8DEF8 */
                --color-on-tertiary: 73, 37, 50;
                /* #492532 */
                --color-on-tertiary-container: 255, 216, 228;
                /* #FFD8E4 */
                --color-on-surface: 230, 225, 229;
                /* #E6E1E5 */
                --color-on-surface-variant: 202, 196, 208;
                /* #CAC4D0 */
                --color-on-error: 96, 20, 16;
                /* #601410 */
                --color-on-error-container: 249, 222, 220;
                /* #F9DEDC */
                --color-on-background: 230, 225, 229;
                /* #E6E1E5 */
                --color-outline: 147, 143, 153;
                /* #938F99 */
                --color-outline-variant: 68, 71, 70;
                /* #444746 */
                --color-shadow: 0, 0, 0;
                /* #000000 */
                --color-surface-tint-color: 208, 188, 255;
                /* #D0BCFF */
                --color-inverse-surface: 230, 225, 229;
                /* #E6E1E5 */
                --color-inverse-on-surface: 49, 48, 51;
                /* #313033 */
                --color-inverse-primary: 103, 80, 164;
                /* #6750A4 */
                --color-scrim: 0, 0, 0;
                /* #000000 */
            }
        }
        *,
        *::before,
        *::after {
            margin: 0;
            box-sizing: border-box;
            user-select: none;
        }
        
        html {
            height: 100%;
            font-size: 6.25%;
            font-family: Font-Regular;
        }

        @media screen and (max-width: 599px) {
            html {
                background-color: var(--color-surface);
            }
        }

        @media screen and (min-width: 600px) and (max-width: 839px) {

        }

        @media screen and (min-width: 840px) {

        }
    `).then((sheet) => { document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet });

    const elem = Object.create(null);

    const contentLoaded = new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", (event) => {

            Object.defineProperties(elem, {
                node: {
                    value: document.body.appendChild(document.createElement('main'))
                },
                content: {
                    value: [],
                    writable: true
                },
                navigationBar: {
                    set(other) {
                        const old = document.querySelector('nav');
                        if (!old) {
                            document.body.appendChild(other.node);
                        } else {
                            document.body.replaceChild(other.node, old);
                        }
                    }
                }
            });

            Object.assign(elem, properties);
            Object.freeze(elem);

            resolve(elem);
        });
    });

    return Promise.all([
        contentLoaded
    ]);
}