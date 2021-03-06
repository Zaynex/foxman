class DebugPlugin {
    constructor(options) {
        if (!options.debugTool
            && (undefined !== options.debugTool)) {
            this.enable = false;
        }
    }

    init(serverPlugin) {
        serverPlugin.server.appendHtml({
            condition: DebugPlugin.condition,
            html: DebugPlugin.getHtml()
        });
    }

    static condition(request) {
        return request.query.debug == 1;
    }

    static getHtml() {
        return '<script src="/foxman_client/js/vconsole.min.js"></script>'
    }
}
export default DebugPlugin;
