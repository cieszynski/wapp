/* wapp.mjs */

const
    CSS_DEFAULT = 0,
    CSS_COMPACT = 1,
    CSS_MEDIUM = 2,
    CSS_EXPANDED = 3;

const
    css_compact = new CSSStyleSheet(),
    css_default = new CSSStyleSheet(),
    css_medium = new CSSStyleSheet(),
    css_expanded = new CSSStyleSheet();

export const navigationItem = (properties) => {
    const elem = Object.create(null, {
        node: {
            value: (function () {
                const label = document.createElement('label');
                const input = document.createElement('input');
                const span = document.createElement('span');
                input.dataset.icon = '\ue88a';
                label.className = 'navigation';
                label.append(input, span);
                input.name = 'navigation';
                input.type = 'radio';
                return label;
            })()
        },
        label: {
            set(text) { this.node.lastElementChild.textContent = text; },
            get() { return this.node.lastElementChild.textContent; }
        },
        content: {
            value: [],
            writable: true
        },
    });

    Object.assign(elem, properties);
    Object.freeze(elem);

    if (!navigationItem.seen) {
        navigationItem.seen = true;

        css_default.insertRule(`
            label.navigation {
                font-family: Roboto-Medium;
                font-weight: 500;
                font-size: 12rem;
                line-height: 1;
                position: relative;
                display: block;
                padding: 36rem 0 0 0;
                text-align: center;
            }
        `)

        css_default.insertRule(`
            label.navigation input {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                appearance: none;
                position: absolute;
            }
            `)

        css_default.insertRule(`
        label.navigation input::after {
            content: attr(data-icon);
            font-family: Material-Icons-Outlined;
            font-weight: 500;
            font-size: 24rem;
            line-height: 1.3;
        }
            `)

        css_default.insertRule(`
        label.navigation input:checked::after {
            font-family: Material-Icons;
        }
        `);

        css_compact.insertRule(`
        label.navigation {
            width: 100%;
            height: 100%;
        }
        `);

        css_compact.insertRule(`
        label.navigation input::before {
            content: "";
            position: relative;
            border-radius: 16rem;
            display: block;
            height: 32rem;
            width: 64rem;
            margin: auto;
        }
        `);

        css_compact.insertRule(`
        label.navigation input::after {
            position: relative;
            width: 100%;
            margin: auto;
            text-align: center;
            position: absolute;
            top: 0;
        }
        `);
    }

    return elem;
}

export const navigationBar = (properties) => {

    const elem = Object.create(null, {
        node: {
            value: document.createElement('nav')
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

    if (!navigationBar.seen) {
        navigationBar.seen = true;

        css_default.insertRule(`
            nav { 
                z-index: 0;
                display: flex;
                background-color: rgba(0,0,0,.01); 
                height: 80px;
            }
        `);

        css_compact.insertRule(`
        nav {   /* BOTTOM NAVIGATION */
            justify-content: center;
            column-gap: 8rem;
            width: 100%;
            height: 80rem;
            padding: 12rem 0 16rem 0;
        }
        `)
    }

    return elem;
}

export const theme = (properties) => {
    const elem = Object.create(null, {
        regularFont: {
            value: new FontFace("Roboto-Regular", "url(Roboto-Regular.ttf)"),
            writable: true
        },
        mediumFont: {
            value: new FontFace("Roboto-Medium", "url(Roboto-Medium.ttf)"),
            writable: true
        },
        iconFont: {
            value: new FontFace("Material-Icons", "url(MaterialIcons-Regular.ttf)"),
            writable: true
        },
        iconOutlinedFont: {
            value: new FontFace("Material-Icons-Outlined", "url(MaterialIconsOutlined-Regular.otf)"),
            writable: true
        }
    });

    Object.assign(elem, properties);
    Object.freeze(elem);

    return elem;
}

export const application = (properties, defaultTheme = theme()) => {
    document.fonts.add(defaultTheme.regularFont);
    document.fonts.add(defaultTheme.mediumFont);
    document.fonts.add(defaultTheme.iconFont);
    document.fonts.add(defaultTheme.iconOutlinedFont);

    const elem = Object.create(null);

    const contentLoaded = new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", (event) => {
            css_default.insertRule(`
            *,
            *::before,
            *::after {
                margin: 0;
                box-sizing: border-box;
                user-select: none;
            }`);

            css_default.insertRule(`
            html {
                height: 100%;
                font-size: 6.25%;
                font-family: Roboto-Regular;
            }`)

            css_compact.insertRule(`
            @media screen and (max-width: 599px) {
                body { background-color: #ddd;}
            }`);

            document.adoptedStyleSheets[CSS_DEFAULT] = css_default;
            document.adoptedStyleSheets[CSS_COMPACT] = css_compact;
            document.adoptedStyleSheets[CSS_MEDIUM] = css_medium;
            document.adoptedStyleSheets[CSS_EXPANDED] = css_expanded;

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
        defaultTheme.regularFont.load,
        defaultTheme.mediumFont.load,
        defaultTheme.iconFont.load,
        defaultTheme.iconOutlinedFont.load,
        contentLoaded
    ]);
}