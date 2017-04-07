import 'jquery'
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import angular from 'angular'
import ngResource from 'angular-resource'

import config from './config'
import main from './main'

let module = angular.module('app', [ngResource], config)
module.run(main)
export default module.name
