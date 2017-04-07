import * as controllers from './controllers/'
import * as directives from './directives/'

config.$inject = ['$provide', '$compileProvider', '$controllerProvider', '$httpProvider']
export default function config($provide, compile, controller, $httpProvider){
	compile.directive(directives)
	controller.register(controllers)

	$provide.factory('Users', ['$resource',
		$resource => $resource('http://localhost:33333/users/:id', { id: '@id'}, { update: { method: 'PUT' } })
	])
}
