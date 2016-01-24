angular.module('kDev.controllers', ['kDev.services'])

.controller('AppCtrl', ['$scope', function($scope) {

  $scope.showMenu = function() {
    $scope.show = !$scope.show
  }
}])
.controller('LandingCtrl', ['$scope', function($scope){


}])
.controller('KilroyCtrl', ['$scope', 'DevInfo', function($scope, DevInfo){
  $scope.projectArray = DevInfo.getProjects;
  $scope.techArray = DevInfo.getTechStack;
  $scope.showPlaceholder = true;
  $scope.skills = DevInfo.getSkills;
  $scope.introText = DevInfo.getText;
  $scope.needsArray = DevInfo.getNeeds;
  $scope.emptyArray = function(){
    if ($scope.projectArray.length > 0) {
      $scope.showPlaceholder = false
    } else {
      $scope.showPlaceholder = true
    }
  }
  console.log($scope.projectArray.length);

}])
.controller('ProjectDetailCtrl', ['$scope', 'DevInfo','$stateParams', function($scope, DevInfo, $stateParams){
  $scope.project = DevInfo.getProject($stateParams.projectId);
  $scope.projectView = $scope.project.pages[0].image;
  $scope.changePV = function(pageId){
    var array = $scope.project.pages
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == pageId) {
        $scope.projectView = array[i].image;
        console.log($scope.projectView);
      }
    }
  }
  $scope.hoverOut = function () {
    this.showFade = false;
  };
  $scope.hoverIn = function () {
      this.showFade = true;
    };
}])
.controller('ContactCtrl', ['$scope', function($scope){


}])
.controller('BlogCtrl', ['$scope','$state', 'FakeBlog', 'Blog', '$uibModal', function($scope, $state, FakeBlog, Blog, $uibModal){
  $scope.signedIn = function(oauth) {
      $scope.user = oauth;
    };
  $scope.openPost = function(postId){

  }
  $scope.signedIn = function(oauth) {
    UserService.setCurrentUser(oauth)
    .then(function(user) {
      $scope.user = user;
    });
  };
  $scope.twitterScript = function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  var blog = Blog.res();
  // blog.query(function(data){
  //   $scope.posts = data;
  // }, function(err){
  //   console.log(err);
  // })
  $scope.posts = blog.query().$promise.then(function(data){
    $scope.posts = data;
    console.log($scope.posts[0])
  }, function(err){
    console.log(err)
  });

  $scope.colors = Blog.colors;
  for (var i = 0; i < $scope.posts.length; i++) {
    $scope.posts[i].color = colors[Math.floor(Math.random() * colors.length)];
  }

  $scope.favourites = Blog.getFavs().$promise.then(function(data){
    $scope.favourites = data;
  });

  console.log($scope.posts)
  $scope.colorFn = function(id) {
      var index = id >= $scope.colors.length
      var color = $scope.colors[index]

    // var color = $scope.colors[Math.floor(Math.random() * $scope.colors.length)]
    console.log(color);
     return {border: color};
  };
  $scope.openM = function (fav) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'templates/favModal.html',
      controller: 'FavModalCtrl',
      resolve: {
        fav: fav
      }
    });
  };
  //
  // $scope.post1 = Blog.getPost();

}])
.controller('FavModalCtrl', function($scope, $uibModalInstance, fav){
  $scope.currModal = fav;

})
.controller('PostCtrl', ['$scope', 'Blog','$stateParams', function($scope, Blog, $stateParams){
  var Blogp = Blog.getPost;
  Blogp.get({id: $stateParams.postId}, function(data){
    $scope.post = data;
      console.log(data);
  });
  $scope.likePost = function(postId){
    Blogp.get({id: postId}, function(data){
        data.likes += 1;
        console.log(data);
        data.$save();
        console.log(data);
    });
  }
}])
.controller('AboutCtrl', ['$scope', function($scope){


}])
.controller('CreateCtrl',['$scope', 'Blog', function($scope, Blog){
  $scope.admin = {
    akid: "",
    secret: ""
  };
  $scope.newPost = {
    title: "",
    quote: "",
    body: "",
    main_img: "",
    password: ""
  };
  $scope.newFav = {
    url: "",
    citation: "",
    password: ""
  }
  $scope.adminMe = function(){
    angular.module('kDev')
    .run(function(){
      console.log($scope.admin)
      AWS.config.update({accessKeyId: $scope.admin.akid, secretAccessKey: $scope.admin.secret});
      AWS.config.region = 'eu-west-1';
    })
  };
  $scope.postPost = function(){
    Blog.createPost($scope.newPost);
  }
  $scope.postFav = function(){
    Blog.createFav($scope.newFav);
  }
  // $scope.queryResult = Blog.getAll();
  // $scope.createTable = function(){
  //   Blog.createTable();
  // }
  $scope.newUser = {
    email: "",
    password: ""
  }
  $scope.signUp = function(){
    Blog.createUser($scope.newUser);
  }
}])
