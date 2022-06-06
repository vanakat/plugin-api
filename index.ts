import {Plugin} from 'obsidian';

declare global {
    interface Window {
        ['PluginApi']?: any
    }
}

export function registerAPI(name: string, api: any, plugin: Plugin) {
    window['PluginApi'] = window['PluginApi'] || {};

    window['PluginApi'][name] = api;

    plugin.register(() => {
        delete window['PluginApi'][name];
    });
}

export function pluginApi(name: string) {
    return window['PluginApi'][name];
}
