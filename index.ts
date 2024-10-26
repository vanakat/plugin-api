import { Plugin, Notice } from 'obsidian';

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
    if ('PluginApi' in window && name in window['PluginApi']) {
        return window['PluginApi'][name];
    } else {
        new Notice(`Plugin ${name} not found. Please install ${name} first.`)
    }
}
