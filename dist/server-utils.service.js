var ServerUtilsService = (function () {
    function ServerUtilsService() {
    }
    ServerUtilsService.prototype.findServer = function () { };
    ServerUtilsService.$import = ['$http', '$q'];
    return ServerUtilsService;
}());
angular
    .module('server.utils', [])
    .service('ServerUtilsService', ServerUtilsService);
//# sourceMappingURL=server-utils.service.js.map