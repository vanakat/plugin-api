# Obsidian Plugin API

Standartized way of exposing and using Obsidian Plugin APIs

## Installation

```shell
npm install --save-dev @vanakat/plugin-api
```

## Usage

This module exposes 2 functions:

* `registerAPI(name, api, plugin)` - registers plugin API in global variable (`window`)
* `pluginApi(name)` - returns plugin API based on its name

## Examples

Following plugin already use `@vanakat/plugin-api`:

* [Zotero Bridge](https://github.com/vanakat/zotero-bridge) as a API provider
* [Zotero Link](https://github.com/vanakat/zotero-link) as API consumer

## License

MIT
