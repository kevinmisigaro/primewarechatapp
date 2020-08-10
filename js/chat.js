moment.locale();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    database.ref("users/").on("child_added", function (snapshot) {
      if (snapshot.key != user.uid) {
        var chatname = document.getElementById("chatname");
        chatname.innerHTML = snapshot.val().name;

        var image = document.getElementById("profileImage");
        image.src = snapshot.val().image;
      }
    });

    getMessages();
  } else {
    // No user is signed in.
  }
});

function getMessages() {
  database.ref("messages").on("child_added", function (snapshot) {
    var messagesList = document.getElementById("allMessages");

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        if (snapshot.val().sender == user.uid) {
          var messageContainer = document.createElement("div");
          messageContainer.className = "d-flex justify-content-end mb-4";

          var messageBody = document.createElement("div");
          messageBody.className = "msg_cotainer_send";
          messageBody.innerText = snapshot.val().message;

          // var time = document.createElement("span");
          // time.className = "msg_time_send";
          // time.innerHTML = moment(snapshot.val().time).format("lll");

          // messageBody.appendChild(time);
          messageContainer.appendChild(messageBody);

          messagesList.appendChild(messageContainer);
        } else {
          var messageContainer = document.createElement("div");
          messageContainer.className = "d-flex justify-content-start mb-4";

          var messageBody = document.createElement("div");
          messageBody.className = "msg_cotainer";
          messageBody.innerText = snapshot.val().message;

          // var time = document.createElement("span");
          // time.className = "msg_time";
          // time.innerHTML = moment(snapshot.val().time).format("lll");

          // messageBody.appendChild(time);
          messageContainer.appendChild(messageBody);

          messagesList.appendChild(messageContainer);
        }
      }
    });
  });
}

function deleteChat() {
  database.ref("messages").on("child_removed", function (snapshot) {
    var messagesList = document.getElementById("allMessages");
    messagesList.innerHTML = "";
  });
  database.ref("messages").remove();
}

function sendMessage() {
  var message = document.getElementById("message").value;

  var userId;

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      userId = user.uid;

      if (message != "") {
        database.ref("messages/").push().set({
          message: message,
          sender: userId,
          time: Date.now(),
        });

        document.getElementById("message").value = "";
      }
    }
  });
}
