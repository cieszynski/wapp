/* wapp.mjs */

/* if (navigationItem.seen)
return elem;
navigationItem.seen = true;

(new CSSStyleSheet()).replace(`
`).then((sheet) => { document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet });
 */

export const Row = (properties) => {
    const elem = Object.create(null, {
        node: {
            value: (function () {
                const div = document.createElement('div');
                return div;
            })()
        },
        content: {
            set(arr) {
                this.node.replaceChildren();
                arr.forEach(item => {
                    this.node.appendChild(item.node);
                })
            }
        },
    });

    Object.assign(elem, properties);
    Object.freeze(elem);

    return elem;
}

export const iconButton = (properties) => {
    const elem = Object.create(null, {
        onclick: { value: (e) => { console.log(e) }, writable: true },
        node: {
            value: (function () {
                const button = document.createElement('button');
                button.addEventListener('click', (e) => {
                    if (elem.node.ariaPressed) {
                        elem.node.ariaPressed = {
                            true: 'false', false: 'true'
                        }[elem.node.ariaPressed]
                    }
                    elem.onclick(e);
                })
                button.dataset.icon = '\ue88a';
                button.className = 'icon';
                return button;
            })()
        },
        disabled: { set(bool) { this.node.disabled = bool; } },
        checked: { set(bool) { this.node.ariaPressed = String(bool); } },
        type: { set(str) { this.node.className = `icon ${str}`; } },
        title: { set(str) { this.node.title = str; } },
        id: { set(str) { this.node.id = str; } },
    });

    Object.assign(elem, properties);
    Object.freeze(elem);

    if (iconButton.seen)
        return elem;
    iconButton.seen = true;

    (new CSSStyleSheet()).replace(`
    button.icon {
        width: 40rem;
        height: 40rem;
        border-radius: 20rem;
        margin: 4rem;
        font-size: 0;
    }
    
    button.icon::after {
        color: rgba(var(--color-on-surface-variant), 1);
        font-family: Font-Icons-Outlined;
        content: attr(data-icon);
        line-height: 1.6;
        font-weight: 500;
        font-size: 24rem;
    }

    button.icon[aria-pressed=true]::after {
        color: rgba(var(--color-primary), 1);
        font-family: Font-Icons;
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
    
    /* FILLED */
    /* Container (no toggle - default) */
    button.icon.filled {
        background-color: rgba(var(--color-primary), 1);
    }
    
    /* Container (unselected) */
    button.icon.filled[aria-pressed=false] {
        background-color: rgba(var(--color-surface-variant), 1);
    }
    
    /* Container (selected) */
    button.icon.filled[aria-pressed=true] {
        background-color: rgba(var(--color-primary), 1);
    }
    

    /* Icon (no toggle - default) */
    button.icon.filled::after {
        color: rgba(var(--color-on-primary), 1);
    }
    /* Icon (toggle-unselected) */
    button.icon.filled[aria-pressed=false]::after {
        color: rgba(var(--color-primary), 1);
    }
    /* Icon (toggle -selected) */
    button.icon.filled[aria-pressed=true]::after {
        color: rgba(var(--color-on-primary), 1);
    }

    
    button.icon.filled:disabled {
        background-color: rgba(var(--color-on-surface), .12);
    }
    
    button.icon.filled:disabled::after {
        color: rgba(var(--color-on-surface), .38);
    }
    /*
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
      */
    
    
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

    (new CSSStyleSheet()).replace(`
        @font-face {
            font-family: "Font-Regular";
            src: url("Roboto-Regular.ttf");
        }

        @font-face {
            font-family: "Font-Medium";
            src: url("Roboto-Medium.ttf");
        }

        @font-face {
            font-family: "Font-Icons";
            src: url("MaterialIcons-Regular.ttf");
        }

        @font-face {
            font-family: "Font-Icons-Outlined";
            src: url("MaterialIconsOutlined-Regular.otf");
        }

        @media (prefers-color-scheme: light) {
            :root {
                --color-primary: var(--color-light-primary, 103, 80, 164);
                --color-primary-container: var(--color-light-primary-container, 234, 221, 255);
                --color-secondary: var(--color-light-secondary, 98, 91, 113);
                --color-secondary-container: var(--color-light-secondary-container, 232, 222, 248);
                --color-tertiary: var(--color-light-tertiary, 125, 82, 96);
                --color-tertiary-container: var(--color-light-tertiary-container, 255, 216, 228);
                --color-surface: var(--color-light-surface, 255, 251, 254);
                --color-background: var(--color-light-background, 255, 251, 254);
                --color-error: var(--color-light-error, 179, 38, 30);
                --color-error-container: var(--color-light-error-container, 249, 222, 220);
                --color-on-primary: var(--color-light-on-primary, 255, 255, 255);
                --color-on-primary-container: var(--color-light-on-primary-container, 33, 0, 94);
                --color-on-secondary: var(--color-light-on-secondary, 255, 255, 255);
                --color-on-secondary-container: var(--color-light-on-secondary-container, 30, 25, 43);
                --color-on-tertiary: var(--color-light-on-tertiary, 255, 255, 255);
                --color-on-tertiary-container: var(--color-light-on-tertiary-container, 55, 11, 30);
                --color-on-surface: var(--color-light-on-surface, 28, 27, 31);
                --color-on-surface-variant: var(--color-light-on-surface-variant, 73, 69, 78);
                --color-on-error: var(--color-light-on-error, 255, 255, 255);
                --color-on-error-container: var(--color-light-on-error-container, 65, 14, 11);
                --color-on-background: var(--color-light-on-background, 28, 27, 31);
                --color-outline: var(--color-light-outline, 121, 116, 126);
                --color-outline-variant: var(--color-light-outline-variant, 196, 199, 197);
                --color-shadow: var(--color-light-shadow, 0, 0, 0);
                --color-surface-tint: var(--color-light-surface-tint, 103, 80, 164);
                --color-inverse-surface: var(--color-light-inverse-surface, 49, 48, 51);
                --color-inverse-on-surface: var(--color-light-inverse-on-surface, 244, 239, 244);
                --color-inverse-primary: var(--color-light-inverse-primary, 208, 188, 255);
                --color-scrim: var(--color-light-scrim, 0, 0, 0);
            }
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --color-primary: var(--color-dark-primary, 208, 188, 255);
                --color-primary-container: var(--color-dark-primary-container, 79, 55, 139);
                --color-secondary: var(--color-dark-secondary, 204, 194, 220);
                --color-secondary-container: var(--color-dark-secondary-container, 74, 68, 88);
                --color-tertiary: var(--color-dark-tertiary, 239, 184, 200);
                --color-tertiary-container: var(--color-dark-tertiary-container, 99, 59, 72);
                --color-surface: var(--color-dark-surface, 28, 27, 31);
                --color-background: var(--color-dark-background, 28, 27, 31);
                --color-error: var(--color-dark-error, 242, 184, 181);
                --color-error-container: var(--color-dark-error-container, 140, 29, 24);
                --color-on-primary: var(--color-dark-on-primary, 55, 30, 115);
                --color-on-primary-container: var(--color-dark-on-primary-container, 234, 221, 255);
                --color-on-secondary: var(--color-dark-secondary, 51, 45, 65);
                --color-on-secondary-container: var(--color-dark-on-secondary-container, 232, 222, 248);
                --color-on-tertiary: var(--color-dark-on-tertiary, 73, 37, 50);
                --color-on-tertiary-container: var(--color-dark-on-tertiary-container, 255, 216, 228);
                --color-on-surface: var(--color-dark-on-surface, 28,27,31);
                --color-on-surface-variant: var(--color-dark-on-surface-variant, 202, 196, 208);
                --color-on-error: var(--color-dark-on-error, 96, 20, 16);
                --color-on-error-container: var(--color-dark-on-error-container, 249, 222, 220);
                --color-on-background: var(--color-dark-on-background, 230, 225, 229);
                --color-outline: var(--color-dark-outline, 147, 143, 153);
                --color-outline-variant: var(--color-dark-outline-variant, 68, 71, 70);
                --color-shadow: var(--color-dark-shadow, 0, 0, 0);
                --color-surface-tint: var(--color-dark-surface-tint, 208, 188, 255);
                --color-inverse-surface: var(--color-dark-inverse-surface, 230, 225, 229);
                --color-inverse-on-surface: var(--color-dark-inverse-on-surface, 49, 48, 51);
                --color-inverse-primary: var(--color-dark-inverse-primary, 103, 80, 164);
                --color-scrim: var(--color-dark-scrim, 0, 0, 0);
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
    `).then((sheet) => {
        document.adoptedStyleSheets[document.adoptedStyleSheets.length] = sheet;

        for (const [key, value] of Object.entries(currentTheme)) {
            document.documentElement.style.setProperty(key, value);
        }
    });

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