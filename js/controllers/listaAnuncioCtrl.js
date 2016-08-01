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
		
		anuncio.data = new Date();
		anuncioAPI.saveAnuncio(anuncio).success(function (data) {
			delete $scope.anuncio;
			$scope.anuncioForm.$setPristine();
			carregarAnuncios();
		});
	};
	
	$scope.isAnuncioSelecionado = function (anuncios) {
		return anuncios.some(function (anuncio) {
			return anuncio.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarAnuncios();
	
});