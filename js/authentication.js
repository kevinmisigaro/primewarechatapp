function login() {
  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      location.href = "chat.html";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      location.href = "index.html";
    })
    .catch(function (error) {
      // An error happened.
    });
}
