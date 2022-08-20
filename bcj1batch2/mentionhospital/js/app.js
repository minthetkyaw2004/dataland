$(document).ready(function(){
    // console.log("hi i am working");

 //Start Header Section
  //Start Banner Section
//   $(".carousel").carousel({
//     interval:100
//   });
  //End Banner Section
 //End Header Section

 //Start Info Section
 $(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if(getscrolltop >= 450){
      $('.infotexts').addClass('fromlefts');
      $('.infopics').addClass('fromrights');
    }else{
        $('.infotexts').removeClass('fromlefts');
        $('.infopics').removeClass('fromrights');
    }
 })

  //Start Info Section

  //start adv section
  //  $('#videos').click(function(){
  //   var getmodal = $(this).data('bs-target');
  //   var getvideosrc = $(this).data("video");
  //   var videourlwithauto = getvideosrc+"?autoplay=1";

  //   $(getmodal + " iframe").attr("src",videourlwithauto);
  //   $(getmodal + " button.btn-close").click(function(){
  //     $(getmodal + " iframe").attr("src",getvideosrc);
  //   })

  //   $(getmodal).click("hidden.bs.modal",function(){
  //     $(getmodal + " iframe").attr("src",getvideosrc);
  //   })

  //  })
  //start adv section

  //Start Premises Section
    $("#lightslider").lightSlider({
        item:4,
        // auto:true,
        loop:true,
        slideMove:2,
        speed:600
    }).play(); 
  //End Premises Section

  //Start Pricing Section
   $(window).scroll(function(){
    let getscroll = $(this).scrollTop();
    // console.log(getscroll);

    if(getscroll >= 2700){
      $(".cardone").addClass("movelefts");
      $(".cardtwo").addClass('movebottoms');
      $(".cardthree").addClass('moverights');
    }else{
      $(".cardone").removeClass("movelefts");
      $(".cardtwo").removeClass('movebottoms');
      $(".cardthree").removeClass('moverights');
    }
   });
  //End Pricing Section

  //Start Join Us Section
  $("#accordion").accordion();

   //End Join Us Section

   //Start Footer Section
     let getdate = new Date().getUTCFullYear();
     document.querySelector('#year').textContent = getdate;

    //End Footer Section

    //Start Progress
    //By jQuery
    $(window).scroll(function(){
      var getprogress = $("#progress");
      var getprogressval = $("#progressvalues");
      var getscrollTop = $(this).scrollTop();
      // console.log(getscrollTop);

      // var getscrollheight = $(document).height();
      // // console.log(getscrollheight);
      // var getclientheight = $(window).height();
      // // console.log(getclientheight);

      // var calcheight = getscrollheight - getclientheight;
      // var getfinalheight = Math.floor(getscrollTop * 100 / calcheight);
      // console.log(getfinalheight);

      //By Javascript
      var getscrollheight = document.documentElement.scrollHeight;
      console.log(getscrollheight);

      var getclientheight = document.documentElement.clientHeight;
      console.log(getclientheight)

      var calcheight = getscrollheight - getclientheight;
      var getfinalheight = Math.floor(getscrollTop * 100 / calcheight);
      console.log(getfinalheight);

      getprogressval.text(`${getfinalheight}%`);
      getprogress.css({
        background:`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
      })

      //project height - curentview height
      //scrolltop * 100 / (projectheight - curentviewheight);
    });
    //End Progress
});