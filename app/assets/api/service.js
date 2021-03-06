//创建一个公用的数据管理仓库
/**
 * 根据分类信息取数据
 * @type {Object}
 */
app.factory('commonService', ['$http', function($http) {
    var service = {};
    service.getData = function(type, callBack) {
          $http({
                  url: './data/book_' + type + '.json',
                  method: 'get'
              })
              .then(function(res) {
                  console.log('获取数据成功')
                  callBack(res);
              }, function(err) {
                  console.dir(err);
              })
      }
    return service;
}])
