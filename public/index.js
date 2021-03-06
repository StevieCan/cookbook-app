// /* global Vue, VueRouter, axios */

// var HomePage = {
//   template: "#home-page",
//   data: function() {
//     return {
//       message: "Welcome to Vue.js!"
//     };
//   },
//   created: function() {},
//   methods: {},
//   computed: {}
// };

// var SamplePage = {
//   template: "#sample-page",
//   data: function() {
//     return {
//       message: "Welcome to the sample page!"
//     };
//   },
//   created: function() {},
//   methods: {},
//   computed: {}
// };

// var router = new VueRouter({
//   routes: [
//             { path: "/", component: HomePage },
//             { path: '/sample', component: SamplePage }
//             ],
//   scrollBehavior: function(to, from, savedPosition) {
//     return { x: 0, y: 0 };
//   }
// });

// var app = new Vue({
//   el: "#vue-app",
//   router: router
// });

/* global Vue, VueRouter, axios */

// var HomePage = {
//   template: "#home-page",
//   data: function() {
//     return {
//       message: "Welcome to Vue.js!"
//     };
//   },
//   created: function() {},
//   methods: {},
//   computed: {}
// };

var RecipesIndexPage = {
  template: "#recipes-index-page",
  data: function() {
    return {
      recipes: []
    };
  },
  created: function() {
    axios
    .get("/api/recipes")
    .then(function(response) {
      this.recipes = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var RecipesShowPage = {
  template: "#recipes-show-page",
  data: function() {
    return { 
      recipe: {
        id: "",
        title: "",
        ingredients: "",
        directions: "",
        chef: "",
        prep_time: "",
        image_url: "",
        formatted: [
          {
            prep_time: "",
            ingredients: [],
            directions: [],
            created_at: ""
          }
        ],

      }
    };
  },
  created: function() {
    axios
    .get("/api/recipes/" + this.$route.params.id )
    .then(function(response) {
      this.recipe = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var RecipesNewPage = {
  template: "#recipes-new-page",
  data: function() {
    return {
      title: "",
      ingredients: "",
      directions: "",
      prepTime: "",
      imageURL: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prepTime,
        image_url: this.imageURL
      };
      axios
        .post("/api/recipes", params)
        .then(function(response) {
          router.push("/#/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var LogoutPage = {
  template: "<h1>Logout</h1>",
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

var router = new VueRouter({
  routes: [
            { path: "/", component: RecipesIndexPage },
            { path: "/signup", component: SignupPage },
            { path: "/login", component: LoginPage },
            { path: "/logout", component: LogoutPage },
            { path: "/recipes", component: RecipesIndexPage },
            { path: "/recipes/new", component: RecipesNewPage },
            { path: "/recipes/:id", component: RecipesShowPage }
          ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});











