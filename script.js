(function ($) {
  "use strict";

  $(".tentang-text").on('click', function () {
    $("body").addClass("tentang-on");
  });
  $(".tentang-close").on('click', function () {
    $("body").removeClass("tentang-on");
  });


  $(".kontak-text").on('click', function () {
    $("body").addClass("kontak-on");
  });
  $(".kontak-close").on('click', function () {
    $("body").removeClass("kontak-on");
  });


  $(".wisata").on('click', function () {
    $("body").addClass("wisata-on");
  });
  $(".wisata-close").on('click', function () {
    $("body").removeClass("wisata-on");
  });


  $(".tarian").on('click', function () {
    $("body").addClass("tarian-on");
  });
  $(".tarian-close").on('click', function () {
    $("body").removeClass("tarian-on");
  });


  $(".makanan").on('click', function () {
    $("body").addClass("makanan-on");
  });
  $(".makanan-close").on('click', function () {
    $("body").removeClass("makanan-on");
  });

  
})(jQuery); 