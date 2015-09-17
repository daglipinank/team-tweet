app.controller("TweetCtrl", ($scope,getAccountsService) => {
  $scope.accounts = getAccountsService.getAccountList();
});
