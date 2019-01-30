

[![Version](https://img.shields.io/badge/version-0.0.2-green.svg?style=for-the-badge)](#) [![mantained](https://img.shields.io/maintenance/yes/2019.svg?style=for-the-badge)](#)

[![maintainer](https://img.shields.io/badge/maintainer-Ian%20Richardson%20%40iantrich-blue.svg?style=for-the-badge)](#)

## Support
Hey dude! Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/zJtVxUAgH)

# Personal Capital Card
💵 Personal Capital Lovelace Card

This card is for [Lovelace](https://www.home-assistant.io/lovelace) on [Home Assistant](https://www.home-assistant.io/) that display account data from the [sensor.personalcapital](https://github.com/custom-components/sensor.personalcapital) custom component.

# NOTE: Firefox releases before 67 are not supported
https://twitter.com/_developit/status/1090364879377260544

## Options

| Name | Type | Requirement | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:pc-card`
| title | string | **Optional** | Card title

## Installation

### Step 1

Save [pc-card](https://github.com/custom-cards/pc-card/raw/master/pc-card.js) to `<config directory>/www/pc-card.js` on your Home Assistant instanse.

**Example:**

```bash
wget https://raw.githubusercontent.com/custom-cards/pc-card/master/pc-card.js
mv pc-card.js /config/www/
```

### Step 2

Link `pc-card` inside your `ui-lovelace.yaml`.

```yaml
resources:
  - url: /local/pc-card.js?v=0
    type: module
```

### Step 3

Add a custom element in your `ui-lovelace.yaml`

```yaml
      - type: custom:pc-card
        title: Money
```

[Troubleshooting](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)
