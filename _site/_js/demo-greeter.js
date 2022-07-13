import { LitElement, html, css } from 'lit';

class DemoGreeter extends LitElement {
    static styles = css`
    b { color: red; }
  `;

    static properties = {
        name: {},
        items: { type: Array }
    };

    constructor() {
        super();
        this.items = ["bread", "eggs", "cheese"];
    }

    render() {
        return html`
        <ul>
            ${this.items.map((item) => html`<li>${item}</li>`)}
        </ul>
        <demo-hello></demo-hello>`;
    }
}
customElements.define('demo-greeter', DemoGreeter);