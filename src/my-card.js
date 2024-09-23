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
    this.title = "Title";
    this.link = "hax.psu.edu";
    this.detail = "Details";
    this.description = "A squirrel in a field eating a nut.";
  }

  static get styles() {
    return css`
      :host {
        display: block;
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
        visibility: hidden;
      }

      .details:hover {
        cursor: pointer;
      }

      @media screen and (max-width: 800px) and (min-width: 500px) {
        .details {
          visibility: visible;
        }
      }
    `;
  }

  render() {
    return html`
      <div id="cardlist">
        <div class="card">
          <img
            class="card-image"
            src="https://th.bing.com/th/id/OIP.2KDrlQ3f5OSl13qi2Z3kgQHaEo?rs=1&pid=ImgDetMain"
          />

          <h1 class="title">${this.title}</h1>

          <p class="desc">${this.description}</p>

          <a class="link" href=${this.link}>
            <button class="details">${this.detail}</button>
          </a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      detail: { type: String },
      description: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
