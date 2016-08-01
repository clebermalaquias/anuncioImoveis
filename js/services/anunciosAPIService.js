angular.module("listaAnuncio").factory("anuncioAPI", function ($http, config) {
	var _getAnuncios = function () {

		return $http.get(config.baseUrl + "/anuncio");
	};

	var _saveAnuncio = function (anuncio) {
		return $http.post(config.baseUrl + "/anuncio", anuncio, {
		    headers: {
		        "Authorization": 'Token token="egeniusfounders2016"'
		    }
		});
	};

	return {
		getAnuncios: _getAnuncios,
		saveAnuncio: _saveAnuncio
	};
});