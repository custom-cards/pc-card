import {
  LitElement,
  html
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
import { repeat } from "https://unpkg.com/lit-html@0.9.0/lib/repeat.js?module";

class PcCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {}
    };
  }

  constructor() {
    super();
  }

  getCardSize() {
    return 1;
  }

  setConfig(config) {
    this._config = config;
  }

  render() {
    if (!this._config || !this.hass) {
      return html``;
    }

    const states = this.hass.states;
    const pc_networth = states["sensor.pc_networth"];
    let pc_entities = [];

    Object.keys(states).forEach(function(entity) {
      if (entity.match("sensor.pc_") && !entity.match("sensor.pc_networth")) {
        pc_entities.push(states[entity]);
      }
    });

    return html`
      <ha-card .header="${this._config.title}">
        ${
          pc_networth
            ? html`
                <paper-item>
                  ${pc_networth.attributes.friendly_name.replace("PC ", "")}:
                  ${pc_networth.state}
                </paper-item>
              `
            : ""
        }
        ${
          repeat(
            pc_entities,
            (item, index) =>
              html`
                <paper-item>
                  ${item.attributes.friendly_name.replace("PC ", "")}:
                  ${item.state}
                </paper-item>
              `
          )
        }
      </ha-card>
    `;
  }
}

customElements.define("pc-card", PcCard);
