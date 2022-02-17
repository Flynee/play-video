const TAG = '===========================永無BUG===========================';
class LogInfo {
    constructor() {
        this.version = LogInfo.version;
    }

    // eslint-disable-next-line class-methods-use-this
    apply(compiler) {
        const logger = compiler.getInfrastructureLogger(TAG);
        compiler.hooks.shouldEmit.tap('LogInfo', () => {
            logger.info(`
                    有bug是不可能有bug的
                    这辈子也不可能有bug
            `);
        });
    }
}
LogInfo.version = 0.1;
module.exports = LogInfo;
