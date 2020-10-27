function signUp() {
    var email = document.querySelector('#signupemail').value
    var password = document.querySelector('#signuppassword').value
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        console.log(user);
        window.location.assign("./webapp/");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, ' ', errorMessage)
      });
}

function signIn() {
    var email = document.querySelector('#signinemail').value
    var password = document.querySelector('#signinpassword').value
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user);
        window.location.assign("./webapp/");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, ' ', errorMessage)
      });
}

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });