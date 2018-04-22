// JavaScript Document


$(document).ready(function() {
 //galerie
        $("#1").click(function() {
              $('#gallery-full').css("background-image","url('gal_img_1.jpg')");

        });

        $("#2").click(function() {
              $('#gallery-full').css("background-image","url('gal_img_2.jpg')");

        });

        $("#3").click(function() {
              $('#gallery-full').css("background-image","url('gal_img_3.jpg')");

        });

        $("#4").click(function() {
              $('#gallery-full').css("background-image","url('gal_img_4.jpg')");

        });

        $("#5").click(function() {
              $('#gallery-full').css("background-image","url('gal_img_5.jpg')");

        });
// konec galerie
// rozkliky

        $('.line-artist-detail').hide();

        $('#first-artist').click(function(){

            $('#first-artist-detail').toggle(300);

              $('#second-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
              $('#sixth-artist-detail').hide(150);
          });

        $('#second-artist').click(function(){

            $('#second-artist-detail').toggle(300);

              $('#first-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
              $('#sixth-artist-detail').hide(150);
          });

        $('#third-artist').click(function(){

            $('#third-artist-detail').toggle(300);

              $('#second-artist-detail').hide(150);
              $('#first-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
              $('#sixth-artist-detail').hide(150);
          });

        $('#fourth-artist').click(function(){

            $('#fourth-artist-detail').toggle(300);

              $('#second-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#first-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
              $('#sixth-artist-detail').hide(150);
          });

        $('#fifth-artist').click(function(){

            $('#fifth-artist-detail').toggle(300);

              $('#second-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#first-artist-detail').hide(150);
              $('#sixth-artist-detail').hide(150);
         });

        $('#sixth-artist').click(function(){

            $('#sixth-artist-detail').toggle(300);

              $('#second-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#first-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
          });
// divadlo prouzky
        

//smooth scroll
          $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
