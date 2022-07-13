import { LitElement, html, css } from 'lit';
//import '@material/mwc-button';

class DemoHello extends LitElement {
    static styles = css`
    b { color: red; }
  `;

    static properties = {
        name: {},
        items: { type: Array }
    };

    constructor() {
        super();
    }

    render() {
        return html`<mwc-button label="standard"></mwc-button>`;
    }
}
customElements.define('demo-hello', DemoHello);