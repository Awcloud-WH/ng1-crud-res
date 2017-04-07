body.$inject = ['$http']
export function body($http){
	return {
		restrict: 'E',
		template: template,
		controller: 'BodyCtrl',
		link: {
			post(scope, element, attrs){

			}
		}
	}
}

let template = `
<div class="container">
	<h1>restful CRUD example [http://localhost:33333/users]</h1>
	<div class="row">
		<div class="panel panel-default">
			<div class="panel-heading">list</div>
			<div class="panel-body">
				<form class="form">
					<div class="input-group">
						<div class="input-group-addon">url</div>
						<input class="form-control input-sm" value="http://localhost:33333/users" placeholder="http://localhost:33333/users" type="url" ng-model="listURL">
						<div class="input-group-btn"><button class="btn btn-success btn-sm" ng-click="httpList()">fetch</button></div>
					</div>
				</form>
				<div class="well" ng-if="listBody">

					<pre>
status: {{ listBody.status }}
body: 
<span ng-repeat="url in listBody.data" >{{ url }}: [http://localhost:33333/users/{{ url }}], 
</span>
					</pre>
				</div>
			</div>
		</div>

		<div class="panel panel-default">
			<div class="panel-heading">create</div>
			<div class="panel-body">
				<form class="form">
					<div class="input-group">
						<div class="input-group-addon">url</div>
						<input class="form-control input-sm" value="http://localhost:33333/users" placeholder="http://localhost:33333/users" type="url" ng-model="createURL">
						<div class="input-group-btn"><button class="btn btn-success btn-sm"
							ng-click="httpCreate({name: createName})">fetch</button></div>
					</div>
					<div class="input-group">
						<input type="text" ng-model="createName" class="form-control input-sm" />
					</div>
				</form>
				<div class="well" ng-if="createBody">
					<pre>
status: {{ createBody.status }}
body: {{ createBody.data }}
					</pre>
				</div>
			</div>
		</div>


		<div class="panel panel-default">
			<div class="panel-heading">read</div>
			<div class="panel-body">
				<form class="form">
					<div class="input-group">
						<div class="input-group-addon">url</div>
						<input class="form-control input-sm" value="http://localhost:33333/users" placeholder="http://localhost:33333/users/:id" type="url" ng-model="readURL">
						<div class="input-group-btn"><button class="btn btn-success btn-sm"
							ng-click="httpRead(readID)">fetch</button></div>
					</div>
				</form>
				<div class="well" ng-if="readBody">
					<pre>
status: {{ readBody.status }}
body: {{ readBody.data }}
					</pre>
				</div>
			</div>
		</div>

		<div class="panel panel-default">
			<div class="panel-heading">update</div>
			<div class="panel-body">
				<form class="form">
					<div class="input-group">
						<div class="input-group-addon">url</div>
						<input class="form-control input-sm" value="http://localhost:33333/users" placeholder="http://localhost:33333/users/:id"
							type="url" ng-model="updateURL">
						<div class="input-group-btn"><button class="btn btn-success btn-sm"
							ng-click="httpUpdate({name: updateName})">fetch</button></div>
					</div>
					<div class="input-group">
						<input type="text" ng-model="updateName" class="form-control input-sm" />
					</div>
				</form>
				<div class="well" ng-if="updateBody">
					<pre>
status: {{ updateBody.status }}
body: {{ updateBody.data }}
					</pre>
				</div>
			</div>
		</div>


		<div class="panel panel-default">
			<div class="panel-heading">delete</div>
			<div class="panel-body">
				<form class="form">
					<div class="input-group">
						<div class="input-group-addon">url</div>
						<input class="form-control input-sm" value="http://localhost:33333/users" placeholder="http://localhost:33333/users/:id"
							type="url" ng-model="deleteURL">
						<div class="input-group-btn"><button class="btn btn-success btn-sm"
							ng-click="httpDelete()">fetch</button></div>
					</div>
				</form>
				<div class="well" ng-if="deleteBody">
					<pre>
status: {{ deleteBody.status }}
body: {{ deleteBody.data }}
					</pre>
				</div>
			</div>
		</div>
	</div>
</div>
`
