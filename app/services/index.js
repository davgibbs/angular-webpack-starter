'use strict';


var angular = require('angular');

import 'bootstrap/dist/css/bootstrap.css'

angular.module('dashboard').service('GithubStatusService', require('./github-status.service'));
