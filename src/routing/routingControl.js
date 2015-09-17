// configure our routes
app.config(function($routeProvider) {
  $routeProvider

// route for the home page
.when('/', {
  templateUrl : 'src/views/tweet.html',
  controller  : 'TweetCtrl'
})

// route for the add page
.when('/addUser', {
  templateUrl : 'src/views/addUser.html',
  controller  : 'AddUserCtrl'
})
});