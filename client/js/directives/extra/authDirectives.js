app.directive("logout", function() {
  return {
    retrict: 'AECM',
    templateUrl: '../partials/home.html',
    replace: false,
    scope: {
    }
  };
});

app.directive("login", function() {
  return {
    retrict: 'AECM',
    templateUrl: '../partials/login.html',
    replace: false,
    scope: {
    }
  };
});

app.directive("register", function() {
  return {
    retrict: 'AECM',
    templateUrl: '../partials/register.html',
    replace: false,
    scope: {
    }
  };
});
