import { LitElement, html, css } from "lit";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "";
    this.link = "";
    this.buttonText = "";
    this.description = "";
    this.image = "";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      :host([fancy]) {
        display: inline-block;
        background-color: lightblue;
        border: 2px solid coral;
        box-shadow: 10px 5px 5px red;

        .card {
          background-color: orange;
        }
      }
      .controls {
        margin: 8px 0;
      }

      .cardlist {
        display: flex;
      }

      .card {
        background-color: gray;
        width: 400px;
        margin: 0 8px;
        text-align: center;
        border-radius: 24px;
      }

      .card-image {
        margin: auto;
        width: 400px;
        border-radius: 24px 24px 0 0;
      }

      .title {
        width: 50%;
        margin: 24px auto;
        padding: 4px 0;
        border-radius: 12px;
        background-color: white;
        color: black;
      }

      .desc {
        color: white;
        font-size: 20px;
        width: 75%;
        margin: 20px auto;
      }

      .details {
        padding: 20px 50px;
        margin-top: 8px;
        margin-bottom: 20px;
        border-radius: 16px;
        font-size: 24px;
      }

      .details:hover {
        cursor: pointer;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div id="cardlist">
        <div class="card">
          <img class="card-image" src=${this.image} />

          <h1 class="title">${this.title}</h1>

          <!-- put this in your render method where you had details -->
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>${this.description}</slot>
            </div>
          </details>

          <a class="link" href=${this.link}>
            <button class="details">${this.buttonText}</button>
          </a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      buttonText: { type: String },
      description: { type: String },
      image: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
