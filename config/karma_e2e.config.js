// Karma E2E configuration

// base path, that will be used to resolve files and exclude
basePath = '../';

// list of files / patterns to load in the browser
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  //'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
  'tests/e2e/**/*.js',
  {pattern: 'examples/**/*', watched: true, included: false, served: false},
  {pattern: 'src/**/*', watched: true, included: false, served: false}
];

proxies = {
  '/': 'http://localhost:8000/'
}

// because we are using a proxy on / we need to set the
// urlRoot to this crazy value
urlRoot = '/__testacualar__/';

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['dots'];

// web server port
port = 10700;

// cli runner port
runnerPort = 10999;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
