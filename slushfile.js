(function IIFE() {
  'use strict';

  var gulp = require('gulp');
  var inquirer = require('inquirer');

  var scaffold = require('./scaffold');
  var model = require('./model');
  var controller = require('./controller');

  gulp.task('default', function(done) {
    inquirer.prompt(scaffold.prompts, scaffold.template(done));
  });

  gulp.task('model', function(done) {
    inquirer.prompt(model.prompts, model.template(done));
  });

  gulp.task('controller', function(done) {
    inquirer.prompt(controller.prompts, controller.template(done));
  });
})();
