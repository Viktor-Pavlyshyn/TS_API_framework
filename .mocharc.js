module.exports = {
    require: [
        'ts-node/register'
    ],
    spec: './test/mocha/*.test.ts',
    reporter: 'mocha-multi-reporters',
    reporterOptions: ['configFile=reporterConfig.json'],
    slowe: 50000,
    timeout: 60000
}