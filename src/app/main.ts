import * as React from "react";
import * as ReactDOM from "react-dom";
import * as retargetEvents from "react-shadow-dom-retarget-events";
import * as $ from "jquery";
import { App } from "./app";

const currentDocument = document.currentScript.ownerDocument;

class CustomElement extends HTMLElement {
    static get is() {
        return "custom-element";
    }

    constructor() {
        super();
        this.dispose = this.dispose.bind(this);
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        const template = currentDocument.querySelector("#customElement");
        const instance = (template as any).content.cloneNode(true);
        shadowRoot.appendChild(instance);

        this.renderReactApp();
    }

    renderReactApp() {
        ReactDOM.render(
            React.createElement(App, {"onDispose": this.dispose}),
            this.shadowRoot.querySelector("#reactContainer")
        );

        retargetEvents(this.shadowRoot);
    }

    dispose() {
        $(this).remove();
    }
}

customElements.define(CustomElement.is, CustomElement);