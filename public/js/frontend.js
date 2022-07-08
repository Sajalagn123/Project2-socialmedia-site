
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
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

  var path = window. location. pathname;
  var page = path. split('/'). pop();

  if(page == 'products') {
  /*** My Products List */
    $.ajax({
      type: 'GET',
      url: '/api/users/isloggedin',
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      if (data.status == 'success') {

        $('.isLoggedIn').show();

        $.ajax({
          type: 'GET',
          url: '/api/products/mylist',
          dataType: 'json',
          encode: true,
        }).done(function (data) {

          var tableHtml = '\
                            <tr class=\'ui-widget-header\'>\
                                <td>Name</td>\
                                <td>Price</td>\
                                <td>Description</td>\
                                <td>Image</td>\
                                <td></td>\
                            </tr>\
                ';
          for (let i in data) {
            tableHtml += '\
                            <tr>\
                                <td>'+ data[i].product_name + '</td>\
                                <td>'+ data[i].price + '</td>\
                                <td>'+ data[i].description + '</td>\
                                <td><img width="300" src="'+ data[i].image + '"></td>\
                                <td><button onclick=\'removeProduct('+ data[i].id + ')\'>Remove</button></td>\
                            </tr>\
                ';
          }

          $('#productsTable').html(tableHtml);

          $('.isLoggedIn').show();


        });
      } else {
        $('.notloggedIn').show();
      }
    });
  } else if(path=='/') {
  /**Homepage List */
    $.ajax({
      type: 'GET',
      url: '/api/products/list',
      dataType: 'json',
      encode: true,
    }).done(function (data) {

      var tableHtml = '\
                            <tr class=\'ui-widget-header\'>\
                                <td>Name</td>\
                                <td>Price</td>\
                                <td>Description</td>\
                                <td>Image</td>\
                            </tr>\
                ';
      for (let i in data) {
        tableHtml += '\
                            <tr>\
                                <td>'+ data[i].product_name + '</td>\
                                <td>'+ data[i].price + '</td>\
                                <td>'+ data[i].description + '</td>\
                                <td><img width="300" src="'+ data[i].image + '"></td>\
                            </tr>\
                ';
      }

      $('#productsTable').html(tableHtml);


    });
  }

});

/** New Product **/
$('#productForm').on('submit', (e) => {
  e.preventDefault();
  let name = $('input[name=productName]').val();
  let price = $('input[name=productPrice]').val();
  let description = $('input[name=productDescription]').val();
  let image = $('input[name=productImage]').val();

  var formData = { name: name, price: price, description: description, image: image };
  $.ajax({
    type: 'POST',
    url: '/api/products/add',
    data: formData,
    dataType: 'json',
    encode: true,
  }).done(function (data) {
    if (data.status == 'success') {
      location.reload();
    }
  });

});

/** Remove Product **/
function removeProduct(productId) {
  var option = confirm('Remove product ?');
  if (option) {

    var formData = { productId: productId };
    $.ajax({
      type: 'POST',
      url: '/api/products/remove',
      data: formData,
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      if (data.status == 'success') {
        location.reload();
      }
    });

  }

}

/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
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

  var path = window. location. pathname;
  var page = path. split('/'). pop();

  if(page == 'products') {
  /*** My Products List */
    $.ajax({
      type: 'GET',
      url: '/api/users/isloggedin',
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      if (data.status == 'success') {

        $('.isLoggedIn').show();

        $.ajax({
          type: 'GET',
          url: '/api/products/mylist',
          dataType: 'json',
          encode: true,
        }).done(function (data) {

          var tableHtml = '\
                            <tr class=\'ui-widget-header\'>\
                                <td>Name</td>\
                                <td>Price</td>\
                                <td>Description</td>\
                                <td>Image</td>\
                                <td></td>\
                            </tr>\
                ';
          for (let i in data) {
            tableHtml += '\
                            <tr>\
                                <td>'+ data[i].product_name + '</td>\
                                <td>'+ data[i].price + '</td>\
                                <td>'+ data[i].description + '</td>\
                                <td>'+ data[i].image + '</td>\
                                <td><button onclick=\'removeProduct('+ data[i].id + ')\'>Remove</button></td>\
                            </tr>\
                ';
          }

          $('#productsTable').html(tableHtml);

          $('.isLoggedIn').show();


        });
      } else {
        $('.notloggedIn').show();
      }
    });
  } else if(path=='/') {
  /**Homepage List */
    $.ajax({
      type: 'GET',
      url: '/api/products/list',
      dataType: 'json',
      encode: true,
    }).done(function (data) {

      var tableHtml = '\
                            <tr class=\'ui-widget-header\'>\
                                <td>Name</td>\
                                <td>Price</td>\
                                <td>Description</td>\
                                <td>Image</td>\
                            </tr>\
                ';
      for (let i in data) {
        tableHtml += '\
                            <tr>\
                                <td>'+ data[i].product_name + '</td>\
                                <td>'+ data[i].price + '</td>\
                                <td>'+ data[i].description + '</td>\
                                <td>'+ data[i].image + '</td>\
                            </tr>\
                ';
      }

      $('#productsTable').html(tableHtml);


    });
  }

});

/** New Product **/
$('#productForm').on('submit', (e) => {
  e.preventDefault();
  let name = $('input[name=productName]').val();
  let price = $('input[name=productPrice]').val();
  let description = $('input[name=productDescription]').val();
  let image = $('input[name=productImage]').val();

  var formData = { name: name, price: price, description: description, image: image };
  $.ajax({
    type: 'POST',
    url: '/api/products/add',
    data: formData,
    dataType: 'json',
    encode: true,
  }).done(function (data) {
    if (data.status == 'success') {
      location.reload();
    }
  });

});

/** Remove Product **/
// eslint-disable-next-line no-redeclare
function removeProduct(productId) {
  var option = confirm('Remove product ?');
  if (option) {

    var formData = { productId: productId };
    $.ajax({
      type: 'POST',
      url: '/api/products/remove',
      data: formData,
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      if (data.status == 'success') {
        location.reload();
      }
    });

  }

}
