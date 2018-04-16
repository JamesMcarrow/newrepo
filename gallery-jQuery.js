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
          });
          
        $('#second-artist').click(function(){
            
            $('#second-artist-detail').toggle(300);   
              
              $('#first-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
          });
          
        $('#third-artist').click(function(){
            
            $('#third-artist-detail').toggle(300);   
              
              $('#second-artist-detail').hide(150);
              $('#first-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
          });
          
        $('#fourth-artist').click(function(){
            
            $('#fourth-artist-detail').toggle(300);   
              
              $('#second-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#first-artist-detail').hide(150);
              $('#fifth-artist-detail').hide(150);
          });
          
        $('#fifth-artist').click(function(){
            
            $('#fifth-artist-detail').toggle(300);   
              
              $('#second-artist-detail').hide(150);
              $('#third-artist-detail').hide(150);
              $('#fourth-artist-detail').hide(150);
              $('#first-artist-detail').hide(150);
          });
});
