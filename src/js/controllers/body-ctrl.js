BodyCtrl.$inject = ['$scope', '$http', 'Users']
export function BodyCtrl($scope, $http, users){
	console.log(users)

	$scope.httpList = () => {
		$http.get($scope.listURL || 'http://localhost:33333/users')
			.then(res => $scope.listBody = res)
	}
	$scope.httpCreate = (data) => {
		data.ts = Date.now()
		$http.post($scope.createURL || 'http://localhost:33333/users', data)
			.then(res => $scope.createBody = res)
	}
	$scope.httpRead = id => {
		$http.get($scope.readURL)
			.then(res => $scope.readBody = res)		
	}
	$scope.httpUpdate = (data) => {
		data.ts = Date.now()
		$http.put($scope.updateURL, data)
			.then(res => $scope.updateBody = res)
	}
	$scope.httpDelete = id => {
		$http.delete($scope.deleteURL)
			.then(res => $scope.deleteBody = res)		
	}
}
