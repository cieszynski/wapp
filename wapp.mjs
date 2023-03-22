/* wapp.mjs */

let globalTheme = {
    fontRegular: "Roboto-Regular.ttf",
    fontMedium: "Roboto-Medium.ttf",
    fontIcons: "MaterialIcons-Regular.ttf",
    fontIconsOutlined: "MaterialIconsOutlined-Regular.otf",

    colorLightPrimary: '103, 80, 164',
    colorLightPrimaryContainer: '234, 221, 255',
    colorLightSecondary: '98, 91, 113',
    colorLightSecondaryContainer: '232, 222, 248',
    colorLightTertiary: '125, 82, 96',
    colorLightTertiaryContainer: '255, 216, 228',
    colorLightSurface: '255, 251, 254',
    colorLightBackground: '255, 251, 254',
    colorLightError: '179, 38, 30',
    colorLightErrorContainer: '249, 222, 220',
    colorLightOnPrimary: '255, 255, 255',
    colorLightOnPrimaryContainer: '33, 0, 94',
    colorLightOnSecondary: '255, 255, 255',
    colorLightOnSecondaryContainer: '30, 25, 43',
    colorLightOnTertiary: '255, 255, 255',
    colorLightOnTertiaryContainer: '55, 11, 30',
    colorLightOnSurface: '28, 27, 31',
    colorLightOnSurfaceVariant: '73, 69, 78',
    colorLightOnError: '255, 255, 255',
    colorLightOnErrorContainer: '65, 14, 11',
    colorLightOnBackground: '28, 27, 31',
    colorLightOutline: '121, 116, 126',
    colorLightOutlineVariant: '196, 199, 197',
    colorLightShadow: '0, 0, 0',
    colorLightSurfaceTint: '103, 80, 164',
    colorLightInverseSurface: '49, 48, 51',
    colorLightInverseOnSurface: '244, 239, 244',
    colorLightInversePrimary: '208, 188, 255',
    colorLightScrim: '0, 0, 0',

    colorDarkPrimary: '208, 188, 255',
    colorDarkPrimaryContainer: '79, 55, 139',
    colorDarkSecondary: '204, 194, 220',
    colorDarkSecondaryContainer: '74, 68, 88',
    colorDarkTertiary: '239, 184, 200',
    colorDarkTertiaryContainer: '99, 59, 72',
    colorDarkSurface: '28, 27, 31',
    colorDarkBackground: '28, 27, 31',
    colorDarkError: '242, 184, 181',
    colorDarkErrorContainer: '140, 29, 24',
    colorDarkOnPrimary: '55, 30, 115',
    colorDarkOnPrimaryContainer: '234, 221, 255',
    colorDarkOnSecondary: '51, 45, 65',
    colorDarkOnSecondaryContainer: '232, 222, 248',
    colorDarkOnTertiary: '73, 37, 50',
    colorDarkOnTertiaryContainer: '255, 216, 228',
    colorDarkOnSurface: '230, 225, 229',
    colorDarkOnSurfaceVariant: '202, 196, 208',
    colorDarkOnError: '96, 20, 16',
    colorDarkOnErrorContainer: '249, 222, 220',
    colorDarkOnBackground: '230, 225, 229',
    colorDarkOutline: '147, 143, 153',
    colorDarkOutlineVariant: '68, 71, 70',
    colorDarkShadow: '0, 0, 0',
    colorDarkSurfaceTint: '208, 188, 255',
    colorDarkInverseSurface: '230, 225, 229',
    colorDarkInverseOnSurface: '49, 48, 51',
    colorDarkInversePrimary: '103, 80, 164',
    colorDarkScrim: '0, 0, 0'
}

/* if (navigationItem.seen)
return elem;
navigationItem.seen = true;

(new CSSStyleSheet()).replace(`
`).then((sheet) => { document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet });
 */

/* TODO toggle button */
export const iconButton = (properties) => {
    const elem = Object.create(null, {
        onclick: { value: (e) => { console.log(e)}, writable: true },
        node: {
            value: (function () {
                const button = document.createElement('button');
                button.addEventListener('click', (e) => {
                    if(elem.node.ariaPressed) {
                        elem.node.ariaPressed = {
                            true: 'false', false: 'true'
                        }[elem.node.ariaPressed]
                    }
                    console.log(elem.node.ariaPressed)
                    elem.onclick(e);
                })
                button.dataset.icon = '\ue88a';
                button.className = 'icon';
                return button;
            })()
        },
        checked: {
            set(bool) {
                this.node.ariaPressed = String(bool)
            }
        },
        type: {
            set(name) {
                this.node.className = `icon ${name}`;
            }
        },
        title: {
            set(str) { this.node.title = str; },
            get() { return this.node.title; }
        },
    });

    Object.assign(elem, properties);
    Object.freeze(elem);

    if (iconButton.seen)
        return elem;
    iconButton.seen = true;

    (new CSSStyleSheet()).replace(`
    button[aria-pressed=true] {
        border: 2px solid blue;
    }
    button.icon {
        width: 40rem;
        height: 40rem;
        border-radius: 20rem;
        margin: 4rem;
        font-size: 0;
    }
    
    button.icon::after {
        color: rgba(var(--color-on-surface-variant), 1);
        line-height: 1.6;
        font-family: Font-Icons;
        font-weight: 500;
        font-size: 24rem;
        content: attr(data-icon);
    }
    
    button.icon:disabled::after {
        color: rgba(var(--color-on-surface), .38);
    }
    
    button.icon:not(:disabled, :active):hover {
        background-image: linear-gradient(rgba(var(--color-on-surface-variant), .08) 0 100%);
    }
    
    button.icon:not(:disabled):active,
    button.icon:focus {
        background-image: linear-gradient(rgba(var(--color-on-surface-variant), .12) 0 100%);
    }
    
    button.icon.filled {
        background-color: rgba(var(--color-primary), 1);
    }
    
    button.icon.filled::after {
        color: rgba(var(--color-on-primary), 1);
    }
    
    button.icon.filled:disabled {
        background-color: rgba(var(--color-on-surface), .12);
    }
    
    button.icon.filled:disabled::after {
        color: rgba(var(--color-on-surface), .38);
    }
    
    button.icon.filled:not(:disabled, :active):hover {
        background-image: linear-gradient(rgba(var(--color-on-primary), .08) 0 100%);
    }
    
    button.icon.filled:not(:disabled, :active):hover::after  {
        color: rgba(var(--color-on-primary), 1);
    }
    
    button.icon.filled:not(:disabled, :active):active, 
    button.icon.filled:not(:disabled, :active):focus {
        background-image: linear-gradient(rgba(var(--color-on-primary), .12) 0 100%);
    }
    
    button.icon.filled:not(:disabled, :active):active::after, 
    button.icon.filled:not(:disabled, :active):focus::after  {
        color: rgba(var(--color-on-primary), 1);
    }
    /*  */
    
    
    button.icon.filled-tonal {
        background-color: rgba(var(--color-secondary-container), 1);
    }
    
    button.icon.filled-tonal::after {
        color: rgba(var(--color-on-secondary-container), 1);
    }
    
    button.icon.filled-tonal:disabled {
        background-color: rgba(var(--color-on-surface), .12);
    }
    
    button.icon.filled-tonal:disabled::after {
        color: rgba(var(--color-on-surface), .38);
    }
    
    button.icon.filled-tonal:not(:disabled, :active):hover {
        background-image: linear-gradient(rgba(var(--color-on-secondary-container), .08) 0 100%);
    }
    
    button.icon.filled-tonal:not(:disabled, :active):hover::after  {
        color: rgba(var(--color-on-secondary-container), 1);
    }
    
    button.icon.filled-tonal:not(:disabled, :active):active, 
    button.icon.filled-tonal:not(:disabled, :active):focus {
        background-image: linear-gradient(rgba(var(--color-on-secondary-container), .12) 0 100%);
    }
    
    button.icon.filled-tonal:not(:disabled, :active):active::after, 
    button.icon.filled-tonal:not(:disabled, :active):focus::after  {
        color: rgba(var(--color-on-secondary-container), 1);
    }
    /*  */
    
    
    button.icon.outlined {
        border: 1rem solid rgba(var(--color-outline), 1);
    }
    
    button.icon.outlined::after {
        color: rgba(var(--color-on-surface-variant), 1);
    }
    
    button.icon.outlined:disabled {
        background-color: rgba(var(--color-on-surface), .12);
    }
    
    button.icon.outlined:disabled::after {
        color: rgba(var(--color-on-surface), .38);
    }
    
    button.icon.outlined:not(:disabled, :active):hover {
        background-image: linear-gradient(rgba(var(--color-on-surface-variant), .08) 0 100%);
    }
    
    button.icon.outlined:not(:disabled, :active):hover::after  {
        color: rgba(var(--color-on-surface-variant), 1);
    }
    
    button.icon.outlined:not(:disabled, :active):active, 
    button.icon.outlined:not(:disabled, :active):focus {
        background-image: linear-gradient(rgba(var(--color-on-surface-variant), .12) 0 100%);
    }
    
    button.icon.outlined:not(:disabled, :active):active::after, 
    button.icon.outlined:not(:disabled, :active):focus::after  {
        color: rgba(var(--color-on-surface-variant), 1);
    }
    `).then((sheet) => { document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet });

    return elem;
}

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
        /* width: 100%; */
        margin: auto;
        position: absolute;
        top: 0;
    }

    @media screen and (max-width: 599px) {
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
    }

    @media screen and (min-width: 600px) and (max-width: 839px) {
        label.navigation {
            width: 80rem;
            height: 56rem;
        }
    
        label.navigation input::before {
            content: "";
            position: relative;
            border-radius: 16rem;
            display: block;
            height: 32rem;
            width: 56rem;
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
    }

    @media screen and (min-width: 840px) {

        label.navigation {
            width: 360rem;
            width: 336rem;
            height: 56rem;
            text-align: left;
            padding: 22rem 0 0 58rem;
            font-size: 14rem;
            margin: 0 12rem;
        }
    
        label.navigation input::before {
            content: "";
            position: relative;
            border-radius: 28rem;
            display: block;
            width: 100%;
            height: 100%;
        }
    
        label.navigation input::after {
            font-size: 24rem;
            line-height: 2.3;
            position: absolute;
            top: 0;
            left: 16rem;
        }
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

        @media screen and (max-width: 599px) {
            nav {   /* BOTTOM NAVIGATION */
            justify-content: center;
            column-gap: 8rem;
            width: 100%;
            height: 80rem;
            padding: 12rem 0 16rem 0;
        }
        }

        @media screen and (min-width: 600px) and (max-width: 839px) {
            nav {
                /* RAIL */
                justify-content: center;
                flex-direction: column;
                row-gap: 12px;
                width: 80px;
                height: 100%;
            }
        }

        @media screen and (min-width: 840px) {
            nav {
                /* DRAWER */
                flex-direction: column;
                width: 360rem;
                height: 100%;
            }
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
            src: url("${globalTheme.fontRegular}");
        }

        @font-face {
            font-family: "Font-Medium";
            src: url("${globalTheme.fontMedium}");
        }

        @font-face {
            font-family: "Font-Icons";
            src: url("${globalTheme.fontIcons}");
        }

        @font-face {
            font-family: "Font-Icons-Outlined";
            src: url("${globalTheme.fontIconsOutlined}");
        }

        @media (prefers-color-scheme: light) {
            :root {
                --color-primary: ${globalTheme.colorLightPrimary};
                --color-primary-container: ${globalTheme.colorLightPrimaryContainer};
                --color-secondary: ${globalTheme.colorLightSecondary};
                --color-secondary-container: ${globalTheme.colorLightSecondaryContainer};
                --color-tertiary: ${globalTheme.colorLightTertiary};
                --color-tertiary-container: ${globalTheme.colorLightTertiaryContainer};
                --color-surface: ${globalTheme.colorLightSurface};
                --colr-background: ${globalTheme.colorLightBackground};
                --color-error: ${globalTheme.colorLightError};
                --color-error-container: ${globalTheme.colorLightErrorContainer};
                --color-on-primary: ${globalTheme.colorLightOnPrimary};
                --color-on-primary-container: ${globalTheme.colorLightOnPrimaryContainer};
                --color-on-secondary: ${globalTheme.colorLightOnSecondary};
                --color-on-secondary-container: ${globalTheme.colorLightOnSecondaryContainer};
                --color-on-tertiary: ${globalTheme.colorLightOnTertiary};
                --color-on-tertiary-container: ${globalTheme.colorLightOnTertiaryContainer};
                --color-on-surface: ${globalTheme.colorLightOnSurface};
                --color-on-surface-variant: ${globalTheme.colorLightOnSurfaceVariant};
                --color-on-error: ${globalTheme.colorLightOnError};
                --color-on-error-container: ${globalTheme.colorLightOnErrorContainer};
                --color-on-background: ${globalTheme.colorLightOnBackground};
                --color-outline: ${globalTheme.colorLightOutline};
                --color-outline-variant: ${globalTheme.colorLightOutlineVariant};
                --color-shadow: ${globalTheme.colorLightShadow};
                --color-surface-tint: ${globalTheme.colorLightSurfaceTint};
                --color-inverse-surface: ${globalTheme.colorLightInverseSurface};
                --color-inverse-on-surface: ${globalTheme.colorLightInverseOnSurface};
                --color-inverse-primary: ${globalTheme.colorLightInversePrimary};
                --color-scrim: ${globalTheme.colorLightScrim};
            }
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --color-primary: ${globalTheme.colorDarkPrimary};
                --color-primary-container: ${globalTheme.colorDarkPrimaryContainer};
                --color-secondary: ${globalTheme.colorDarkSecondary};
                --color-secondary-container: ${globalTheme.colorDarkSecondaryContainer};
                --color-tertiary: ${globalTheme.colorDarkTertiary};
                --color-tertiary-container: ${globalTheme.colorDarkTertiaryContainer};
                --color-surface: ${globalTheme.colorDarkSurface};
                --colr-background: ${globalTheme.colorDarkBackground};
                --color-error: ${globalTheme.colorDarkError};
                --color-error-container: ${globalTheme.colorDarkErrorContainer};
                --color-on-primary: ${globalTheme.colorDarkOnPrimary};
                --color-on-primary-container: ${globalTheme.colorDarkOnPrimaryContainer};
                --color-on-secondary: ${globalTheme.colorDarkOnSecondary};
                --color-on-secondary-container: ${globalTheme.colorDarkOnSecondaryContainer};
                --color-on-tertiary: ${globalTheme.colorDarkOnTertiary};
                --color-on-tertiary-container: ${globalTheme.colorDarkOnTertiaryContainer};
                --color-on-surface: ${globalTheme.colorDarkOnSurface};
                --color-on-surface-variant: ${globalTheme.colorDarkOnSurfaceVariant};
                --color-on-error: ${globalTheme.colorDarkOnError};
                --color-on-error-container: ${globalTheme.colorDarkOnErrorContainer};
                --color-on-background: ${globalTheme.colorDarkOnBackground};
                --color-outline: ${globalTheme.colorDarkOutline};
                --color-outline-variant: ${globalTheme.colorDarkOutlineVariant};
                --color-shadow: ${globalTheme.colorDarkShadow};
                --color-surface-tint: ${globalTheme.colorDarkSurfaceTint};
                --color-inverse-surface: ${globalTheme.colorDarkInverseSurface};
                --color-inverse-on-surface: ${globalTheme.colorDarkInverseOnSurface};
                --color-inverse-primary: ${globalTheme.colorDarkInversePrimary};
                --color-scrim: ${globalTheme.colorDarkScrim};
            }
        }
        *,
        *::before,
        *::after {
            margin: 0;
            box-sizing: border-box;
            user-select: none;
        }

        *:focus { outline: none; }
        
        body {
            background-color: rgba(var(--color-surface), 1);
            display: flex;
            height: 100%;
        }
        
        button {
            border: none;
            background: none;
        }

        html {
            height: 100%;
            font-size: 6.25%;
            font-family: Font-Regular;
        }

        main {
            flex: 1;
            outline: 1px solid blue;
        }

        @media screen and (max-width: 599px) {
            body {
                flex-direction: column;
            }
        }

        @media screen and (min-width: 600px) and (max-width: 839px) {
            body {
                flex-direction: row-reverse;
            }
        }

        @media screen and (min-width: 840px) {
            body {
                flex-direction: row-reverse;
            }
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
                    set(arr) {
                        this.node.replaceChildren();
                        arr.forEach(item => {
                            this.node.appendChild(item.node);
                        })
                    }
                },
                navigationBar: {
                    set(other) {
                        const old = document.querySelector('nav');/* TODO */
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