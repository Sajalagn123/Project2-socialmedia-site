// example frontend js file loaded into the views that need FE logic (clicks, forms, interactions, etc.)
$(function () {

  /** Register **/
  $('#registerForm').on('submit', (e) => {
    e.preventDefault();
    let email = $('input[name=registerEmail]').val();
    let password = $('input[name=registerPassword]').val();

    var formData = { email: email, password: password };
    $.ajax({
      type: 'POST',
      url: '/api/users/doregister',
      data: formData,
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      // eslint-disable-next-line eqeqeq
      if(data.status == 'success') {
        $('.success').show();
      } else {
        $('.error').show();
      }
    });

  });


  /** Login **/
  $('#loginForm').on('submit', (e) => {
    e.preventDefault();
    let email = $('input[name=registerEmail]').val();
    let password = $('input[name=registerPassword]').val();

    var formData = { email: email, password: password };
    $.ajax({
      type: 'POST',
      url: '/api/users/dologin',
      data: formData,
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      // eslint-disable-next-line eqeqeq
      if(data.status == 'success') {
        $('.success').show();
      } else {
        $('.error').show();
      }
    });

  });

  $.ajax({
    type: 'GET',
    url: '/api/users/isloggedin',
    dataType: 'json',
    encode: true,
  }).done(function (data) {
    // eslint-disable-next-line eqeqeq
    if(data.status == 'success') {
      $('.isLoggedIn').show();
    } else {
      $('.notloggedIn').show();
    }
  });

});
//do other frontend stuff here!
