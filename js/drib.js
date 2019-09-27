
// Set the Access Token
var accessToken = '42ce5ee946739117560090ca3624a7d8cf5a66412cd8fce3d35e2053b4d68272';

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {                
          $('#shots').prepend(
            '<div class="col-block item-folio" data-aos="fade-up"><div class="item-folio__thumb"><a href="'+ val.html_url +'" class="thumb-link" title="' + val.title + '" data-size="1920x4990"><img src="'+ val.images.hidpi +'"/></a></div><div class="item-folio__text"><h3 class="item-folio__title">' + val.title + '</h3></div></div>'
            )
        })
      }
      else {
        $('#shots').append('<p>No shots yet!</p>');
      }
    }
});



// API Variables

//Image width 800x600 (Animated)
  // val.images.hidpi 
//Image width 400x300
  // val.images.normal
//Image width 200x150
  // val.images.teaser
//Title
  // val.title
//Description
  // val.description
//URL
  // val.html_url</script>

