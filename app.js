function onSignIn(googleUser) {
          var profile = googleUser.getBasicProfile();
        $("#name").text(profile.getname());
        $("#email").text(profile.getemail());
        $("#contact").text(profile.getcontact());
        $("#country").text(profile.getcountry());
        $("#state").text(profile.getstate());
        $(".data").css("display", "block");
        $("g-signin2").css("display", "none");
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("you are sign out successfully");
        $(".data").css("display", "none");
        $("g-signin2").css("display", "block");

    });
  }


//       var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
