// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// package that check if test runs inside a docker container
// https://hackernoon.com/running-karma-tests-with-headless-chrome-inside-docker-ae4aceb06ed3
// https://www.npmjs.com/package/is-docker
const isDocker = require('is-docker')();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/docker-angular'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    // custom launcher for running test inside docker container
    customLaunchers: {
      ChromeCustom: {
        base: 'ChromeHeadless',
        // We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
        // more permissions than Docker allows by default)
        flags: isDocker ? ['--no-sandbox'] : []
      }
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'], // change this to custom chrome when running inside a docker container
    singleRun: false,
    restartOnFileChange: true
  });
};
