var filmListesi = ['The Gentlemen', 'Black Widow', 'Artemis Fowl', 'Mulan', 'Bloodshot'];
var data;
function getanswer() {

  $.get("https://www.omdbapi.com/?s=" + filmListesi[0] + "&apikey=ba1f4581", function (rawdata) {
    var rawstring = JSON.stringify(rawdata);
    data = JSON.parse(rawstring);
    var posterurl = data.Search[0].Poster;
    document.getElementById('deneme').innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'>";



  });
  $.get("https://www.omdbapi.com/?s=" + filmListesi[1] + "&apikey=ba1f4581", function (rawdata) {
    var rawstring = JSON.stringify(rawdata);
    data = JSON.parse(rawstring);
    var posterurl = data.Search[0].Poster;
    document.getElementById('deneme2').innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'>";


  });
  $.get("https://www.omdbapi.com/?s=" + filmListesi[2] + "&apikey=ba1f4581", function (rawdata) {
    var rawstring = JSON.stringify(rawdata);
    data = JSON.parse(rawstring);
    var posterurl = data.Search[0].Poster;
    document.getElementById('deneme3').innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'>";


  });
  $.get("https://www.omdbapi.com/?s=" + filmListesi[3] + "&apikey=ba1f4581", function (rawdata) {
    var rawstring = JSON.stringify(rawdata);
    data = JSON.parse(rawstring);
    var posterurl = data.Search[0].Poster;
    document.getElementById('deneme4').innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'>";


  });
  $.get("https://www.omdbapi.com/?s=" + filmListesi[4] + "&apikey=ba1f4581", function (rawdata) {
    var rawstring = JSON.stringify(rawdata);
    data = JSON.parse(rawstring);
    var posterurl = data.Search[0].Poster;
    document.getElementById('deneme5').innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'>";


  });
}
$(document).ready(function () {
  var $imagesCarousel = $('.carouselOfImages').flickity({
    contain: true,
    autoPlay: true,
    wrapAround: true,
    friction: 0.3
  });
  function resizeCells() {
    var flkty = $imagesCarousel.data('flickity');
    var $current = flkty.selectedIndex
    var $length = flkty.cells.length
    if ($length <= '5') {
      $imagesCarousel.flickity('destroy');
    }
    $('.carouselOfImages .carouselImage').removeClass("nextToSelected");
    $('.carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelected");
    if ($current + 1 == $length) {
      var $endCell = "0"
    } else {
      var $endCell = $current + 1
    }
    $('.carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
  };
  resizeCells();

  $imagesCarousel.on('scroll.flickity', function () {
    resizeCells();
  });



  $(".carouselImage img").click(function () {
    var $this = $(this);
    var imageID = $this.attr('data-tab');
    var imageSrc = $this.attr('src');

    $('.' + imageID).removeClass('hide');
    $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
  });

  $('.product-detail-close,.product-detail').on('click', function () {
    $('.product-detail').addClass('hide');
  });

  $('.modal-video').on('hidden.bs.modal', function (e) {
    $('.modal-video iframe').attr('src', $('.modal-video iframe').attr('src'));
  });

  autoPlayYouTubeModal();

  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-the-video]');
    trigger.click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-the-video"),
        videoSRCauto = videoSRC + "&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
      $('.modal-video').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  }

  $(window).on('load resize', function () {
    var $window = $(window);
    $('.modal-fill-vert .modal-body > *').height(function () {
      return $window.height() - 60;
    });
  });
});





