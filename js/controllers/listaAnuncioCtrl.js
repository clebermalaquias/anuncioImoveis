angular.module("listaAnuncio").controller("listaAnuncioCtrl", function ($scope, anuncioAPI) {
	
	$scope.app = "Lista Anuncio";
	$scope.anuncios = [];
	

	var carregarAnuncios = function () {
		anuncioAPI.getAnuncios().success(function (data) {
			console.log(data.result);
			$scope.anuncios = data.result;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	

	$scope.adicionarAnuncio = function (anuncio) {
		
		
		anuncioAPI.saveAnuncio(anuncio).success(function (data) {
			delete $scope.anuncio;
			$scope.anuncioForm.$setPristine();
			carregarAnuncios();
		});
	};
	
	

	carregarAnuncios();
	
});