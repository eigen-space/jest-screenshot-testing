module.exports = (function () {
    const dts = require('dts-bundle');

    function DtsBundlePlugin(options) {
        this.options = options || {};
    }

    DtsBundlePlugin.prototype.apply = function(compiler) {
        compiler.hooks.done.tap({ name: 'DtsBundlePlugin' }, () => {
            dts.bundle(this.options);
        });
    };

    return DtsBundlePlugin;
})();