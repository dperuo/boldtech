class ServerUtilsService {
  static $import = ['$http', '$q']

  constructor() {}

  findServer() {}
}

angular
  .module('server.utils', [])
  .service('ServerUtilsService', ServerUtilsService)
