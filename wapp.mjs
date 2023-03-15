/* wapp.mjs */

const
    CSS_DEFAULT = 0,
    CSS_COMPACT = 1,
    CSS_MEDIUM = 2,
    CSS_EXPANDED = 3;

const
    css_compact = new CSSStyleSheet(),
    css_default = new CSSStyleSheet();

export const navigationItem = (properties) => {
    const elem = Object.create(null, {
        node: {
            value: (function () {
                const label = document.createElement('label');
                const input = document.createElement('input');
                const span = document.createElement('span');
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

    elem.node.addEventListener('click', function (e) {
        for (const child of this.children) {
            console.log(child)
        }
    })

    return elem;
}

export const application = (properties) => {
    const elem = Object.create(null);

    return new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", (event) => {
            css_default.insertRule(`
            *,
            *::before,
            *::after {
                margin: 0;
                box-sizing: border-box;
                user-select: none;
            }`);

            css_compact.insertRule(`
                @media screen and (max-width: 599px) {
                    body { background-color: #ddd;}
                }
            `);

            document.adoptedStyleSheets[CSS_DEFAULT] = css_default;
            document.adoptedStyleSheets[CSS_COMPACT] = css_compact;

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
                            css_default.insertRule(`
                                nav { background-color: red; height: 80px; }
                            `);
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
}