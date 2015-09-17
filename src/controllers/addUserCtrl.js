app.controller("AddUserCtrl", ($scope,getAuthorizeService) => {
  $scope.addUser = function(){
    getAuthorizeService.getAccountList();
  }
});