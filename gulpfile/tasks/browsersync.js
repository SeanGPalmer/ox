// ==== BROWSERSYNC ==== //

var gulp        = require('gulp')
  , browsersync = require('browser-sync')
  , config      = require('../config').browsersync
;

// BrowserSync: be sure to setup `proxy` in `/gulpconfig.js`
gulp.task('browsersync', ['build'], function() {
    browsersync(config);
});
