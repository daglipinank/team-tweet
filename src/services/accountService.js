app.service('getAccountsService', function(){
  var accountList = ["@codinghouse","@agilelabs"];
  this.getAccountList = function(){
    return accountList;
  }
});