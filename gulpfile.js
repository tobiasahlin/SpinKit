/*jshint multistr: true */
var _ = require('lodash');
var fs = require('fs');
var Q = require('q');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var rimraf = require('gulp-rimraf');

var htmlTmpl = '\n\
<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <title><%= title %></title>\n\
  <link rel="stylesheet" type="text/css" href="<%= cssFilename %>">\n\
</head>\n\
<body>\n\
 <%= bodyContent %>\n\
</body>\n\
</html>';

gulp.task('clean-styles', function() {
  return gulp.src('./css', {read: false})
             .pipe(rimraf());
});


gulp.task('styles', ['clean-styles'], function() {
  return gulp.src('./scss/spinkit.scss')
             .pipe(sass({errLogToConsole: true}))
             .pipe(autoprefixer('last 2 versions', {map: false}))
             .pipe(gulp.dest('./css'));
});


gulp.task('clean-html', function() {
  return gulp.src('./html', {read: false})
             .pipe(rimraf());
});


// Generates HTML files from the usage examples found in the SCSS files
gulp.task('html', ['styles', 'clean-html'], function() {
  var dirName = './scss/spinners/';
  var allDeferred = Q.defer();

  fs.mkdirSync('./html');

  fs.readdir(dirName, function(err, filenames) {
    var promises = filenames.map(function(filename) {
      var deferred = Q.defer();
      var title = filename.substr(1).replace('.scss', '').replace(/-/g, ' ');
      var htmlFilename = filename.substr(1).replace('.scss', '.html');
      var readFile = function(err, content) {
        if (err) { console.log(err); }
        var bodyContent = content.match(/Usage:([\s\S]+\*.+\>)/)[1]
                                 .replace(/ \*/g, '');
        var html = _.template(htmlTmpl, {
          cssFilename: '../css/spinkit.css',
          title: title,
          bodyContent: bodyContent
        });
        fs.writeFile('./html/' + htmlFilename, html, function(err, data) {
          if (err) { console.log(err); }
          deferred.resolve();
        });
      };

      fs.readFile(dirName + filename, {encoding: 'utf8'}, readFile);
      return deferred.promise;
    });
    Q.all(promises).then(allDeferred.resolve);

  });

  return allDeferred;
});


gulp.task('build', ['html', 'styles']);


gulp.task('default', ['build']);


gulp.task('watch', ['build'], function() {
  gulp.watch('./scss/**/*.scss', ['build']);
});
