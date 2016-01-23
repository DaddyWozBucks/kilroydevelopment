angular.module('kDev.services', [])
.factory('DevInfo', function(){
  var text = {
    land_1: "Hello and thanks for checking out my site! My name is Warwick and I am a not-so-newly minted freelance developer.",
    land_2: "Technology has always been a passion of mine and last year I upped and left and started afresh in Barcelona with some help from my friends over at Ironhack :). At Ironhack I snapped up Ruby (and Rails, of course), JS some other indespensable tools to the modern web developer. SInce the course I have been coding almost exclusively in AngularJS, using it in conjuction with the Ionic Framework to build mobile apps and websites loaded with functionality. Just starting to dip my toe in the Angular 2 pool in anticipation of Ionic 2 :D! ",
    land_3: "So whether you have the next big idea, your business could use a fresh online presence or you want to see how to make tech actually work for YOU - get in touch! "
  }
  var techstackArray = [
    {
      id: 0,
      name: "AngularJs",
      web: "www.angularjs.org",
      images: ["http://www.w3schools.com/angular/pic_angular.jpg","http://www.softagon.com.br/wp-content/uploads/2015/02/AngularJS.jpg",],
      comment: "Angular JS is an extremely awesome language to play around with. With it you can build fast and powerful web apps as well as multiplatform mobile apps using the Ionic Framework."
    },
    {
      id: 1,
      name: "Ruby (on Rails)",
      web: "https://www.ruby-lang.org",
      images: ["http://programmernode.com/ruby/ruby.png","https://upload.wikimedia.org/wikipedia/commons/0/0f/Ruby-logo-notext.png"],
      comment: "Ruby was the language I liked the most during the Ironhack course. It's easy to read and easy to write and using the immense library of gems out there you can get it to do just about anything."
    },
    {
      id: 2,
      name: "Amazon Web Services",
      web: "http://www.aws.amazon.com",
      images: ["https://pbs.twimg.com/profile_images/468736866120781824/iEDOgfAJ_400x400.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/2000px-AmazonWebservices_Logo.svg.png"],
      comment: ""
    }
  ]
  var projectArray = [
    {
      id: "1",
      title: "Kilroy Development",
      snippet: "My personal site, upon which you currently surf",
      text: "This is the first incarnation of my personal site (well, at least the first one that I didnt hate after completing, hence the minimalist design.) </br> It was built with AngularJS with LumX providing a wrapper for the Google Material Design Elements. The blog is being implemented using Amazon's DynamoDD cloud based NoSQL service. As time goes by expect changes!",
      pages: [
        {
          id: 1,
          title: "Landing",
          image: "assets/images/projects/kdev/kilroydev.jpg"
        },
        {
          id: 2,
          title: "About",
          image: ""
        },
        {
          id: 3,
          title: "Blog",
          image: ""
        },
        {
          id: 4,
          title: "Projects",
          image: ""
        },
        {
          id: 5,
          title: "Projects: in Detail",
          image: ""
        }

      ]
    },
    {
      id: "2",
      title: "DDJbyDesign",
      snippet: "Website of artist, designer, property developer and Welshman - Dafydd Dale-Jones",
      text: "I met Dafydd while he was setting up a display of his artwork. We got to chatting about the need for artists to have an online presence and given he is such a character I offered to build him this site. The goal of this website is to provide a platform to showcase his 'aRt', design projects and provide a point of contact for future business ventures. The site itself is built with entirely with AngularJS, using Bootstrap to keep things mobile friendly. The site itself his hosted on Amazon's S3 storage and routed through AWS Route 53",
      pages: [
        {
          id: 1,
          title: "Landing",
          image: "/assets/images/projects/ddj/landing.jpg"
        },
        {
          id: 2,
          title: "Art",
          image: "/assets/images/projects/ddj/art.jpg"
        },
        {
          id: 3,
          title: "Design",
          image: "/assets/images/projects/ddj/design.jpg"
        },
        {
          id: 4,
          title: "Photography",
          image: "/assets/images/projects/ddj/photo.jpg"
        },
        {
          id: 5,
          title: "Property",
          image: "/assets/images/projects/ddj/property.jpg"
        },
        {
          id: 6,
          title: "Design: In Detail",
          image: "/assets/images/projects/ddj/designdetail.jpg"
        },
        {
          id: 7,
          title: "Art: In Detail",
          image: "/assets/images/projects/ddj/artdetail.jpg"
        },
        {
          id: 8,
          title: "Contact",
          image: "/assets/images/projects/ddj/landing.jpg"
        },
        {
          id: 9,
          title: "Introduction",
          image: "/assets/images/projects/ddj/landing.jpg"
        }
      ]
    }
  ]
  var skillsArray = [
    {
      id: 0,
      name: "AngularJS",
      value: 75
    },
    {
      id: 1,
      name: "Ruby on Rails",
      value: 80
    },
    {
      id: 2,
      name: "Ionic",
      value: 65
    },
    {
      id: 3,
      name: "PostgreSQL (& SQLite)",
      value: 80
    },
    {
      id: 4,
      name: "Sass",
      value: 70
    }
  ]
  return {
    getProjects: projectArray,
    getTechStack: techstackArray,
    getText: text,
    getSkills: skillsArray,
    getProject: function(id){
      for (var i = 0; i < projectArray.length; i++) {
        if(projectArray[i].id == id){
          return projectArray[i]
        }
      }
    }
  }
})
.factory('UserService', function($q, $http) {
  var service = {
    _user: null,
    setCurrentUser: function(u) {
      if (u && !u.error) {
        service._user = u;
        return service.currentUser();
      } else {
        var d = $q.defer();
        d.reject(u.error);
        return d.promise;
      }
    },
    currentUser: function() {
      var d = $q.defer();
      d.resolve(service._user);
      return d.promise;
    }
  };
  return service;
})
.factory('FakeBlog', function(){
  var fakeposts = [
    {
      id: 1,
      title: "¡Bienvenido!",
      quote: "Not all those who wander are lost",
      body: "Whoah - first post.. what to say... I've never been much for blogging (I'm usually satisfied with 140 characters of shouting into the abyss) but given this new direction my life has taken I feel it only right to start sharing it with you (everyone) Having left dreary Lonodn and my stalling career in sales I went back to my first love - technology. 8 weeks of intensive practical learning (mmm, my favourite kind) I had a foothold in the world of programming. From this foothold I could see the vastness of what I didnt know. So followed months of practice and experimention, trying different styles, frameworks and learning new ones. I have learnt a lot, about myself and the languages I write in and now begin my new life freelancing in Barcelona.  I hope we get to work together some day! :)",
      main_img: "http://40.media.tumblr.com/428b9044f8a7ce5cc64e0e0f41613991/tumblr_o1388m0LsZ1qz6f9yo1_500.jpg",
      color: ""
    },
    {
      id: 2,
      title: "Under Construction",
      quote: "We're sorry folks!",
      body: "This part of the site is still under contruction!",
      main_img: "http://41.media.tumblr.com/3ee4d5d6230db1defa9c673997c45932/tumblr_o12olmoMH21qz6f9yo2_500.jpg",
      color: ""
    }
  ]
  var colors = [
    // "#8E39E9","#85F02D", "#2D85F0", "#39E9E6", "#E97139",
     "rgb(63, 63, 191)","rgb(191, 63, 191)",
       "rgb(191, 191, 63)", "rgb(75, 225, 75)",
        "rgb(150, 75, 225)","rgb(75, 225, 225)"
  ]
  var othercolors = [
    "rgb(63, 63, 191)","rgb(191, 63, 191)",
     "rgb(191, 191, 63)", "rgb(75, 225, 75)",
      "rgb(150, 75, 225)","rgb(75, 225, 225)"
  ]
  for (var i = 0; i < fakeposts.length; i++) {
    fakeposts[i].color = colors[Math.floor(Math.random() * colors.length)];
  }

  var favourites = [{url:"http://56.media.tumblr.com/23e5d64100fd998668b540ef09c6c823/tumblr_o16i88tySE1qz6f9yo1_500.jpg"},{url:"http://57.media.tumblr.com/04903d996316e84d21f0b6f444d559c0/tumblr_o168zwS8vg1qz6f9yo1_500.gif"},
          {url:"http://files.explosm.net/comics/Rob/thehunt.png"}, {url:"http://files.explosm.net/comics/Matt/bad-choice-of-words.png"}, {url:"http://www.smbc-comics.com/comics/1453046082-20160117.png"}
    ]
  return {
    posts: fakeposts,
    colors: colors,
    favourites: favourites,
    getPost: function(postId){

      for (var i = 0; i < fakeposts.length; i++) {
        if (fakeposts[i].id == postId) {
          console.log(fakeposts[i])
          return fakeposts[i]
        };
      };
    }
  }
})
.factory('Blog', function($resource, $cacheFactory){
  var blogCache = $cacheFactory('BlogCache');
  var BlogRes = $resource('http://CVDB-dev.elasticbeanstalk.com/posts/:id', {id: '@id'})

  var FavRes = $resource('http://CVDB-dev.elasticbeanstalk.com/favourites/:favId', {favId: '@favId'})
  var colors = [
     "rgb(63, 63, 191)","rgb(191, 63, 191)",
       "rgb(191, 191, 63)", "rgb(75, 225, 75)",
        "rgb(150, 75, 225)","rgb(75, 225, 225)"
  ]


  return {
    getFavs: function(){
      return FavRes.query();
    },
    colors: colors,
    getPosts: function(){
     return BlogRes.query();
    },
    res: function(){
      return $resource('https://094e263d.ngrok.io/posts/:id', {id: '@id'}, {
        'get': { method: 'GET', cache: blogCache},
        'query' : {method: 'GET', cache: blogCache, isArray:true }
      })
    },
    getPost: BlogRes
  };
})
// https://094e263d.ngrok.io
