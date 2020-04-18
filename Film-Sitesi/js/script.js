var filmListesi = ['The Gentlemen', 'Black Widow', 'Artemis Fowl', 'Mulan', 'Bloodshot'];
var idListesi = ['deneme', 'deneme2', 'deneme3', 'deneme4', 'deneme5'];
var data;
function getanswer() {

  for (let i = 0; i < filmListesi.length; i++) {
    $.get("https://www.omdbapi.com/?s=" + filmListesi[i] + "&apikey=ba1f4581", function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);
      var posterurl = data.Search[0].Poster;
      document.getElementById(idListesi[i]).innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'>";

    });
  }


  var top10 = ['Arrival', 'Hobbit', 'Call Me by Your Name', 'La La Land', 'Avatar', 'The Artist', 'Life of Pi', 'Star Wars', 'Iron Man', 'Slumdog Millionaire', 'The Revenant', 'The Avengers', 'The King’s Speech', 'The Bourne Ultimatum', 'Guardians of the Galaxy', 'Blade Runner 2049', 'Shutter Island', 'Deadpool', 'Ford v Ferrari', 'Logan', 'Gone Girl', '12 Years a Slave', 'Prisoners', 'Mad Max: Fury Road', 'Into the Wild', 'No Country for Old Men', 'There Will Be Blood', 'Inside Out', 'The Wolf of Wall Street', 'Warrior', 'Jaws', 'Toy Story 3', 'Inglourious Basterds', '3 Idiots', 'Django Unchained', 'WALL-E', 'Avengers Endgame', 'Joker', 'Avengers: İnfinity War', 'The Dark Knight Rises', 'The Intouchables', 'Whiplash', 'Interstellar', 'Inception', 'The Dark Knight', 'The Post', 'extinction', 'Lost In Space', 'Justice League', 'Coco'];
  for (let index = 0; index < top10.length; index++) {
    $.get("https://www.omdbapi.com/?s=" + top10[index] + "&apikey=ba1f4581", function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);
      var title = data.Search[0].Title;
      var posterurl = data.Search[0].Poster;
      document.getElementById(index).innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'><br><span>" + title + "</span>";



    });

  }


}
var data;
function top50Film() {
  $("#goster").hide();

  var top10 = ['Arrival', 'Hobbit', 'Call Me by Your Name', 'La La Land', 'Avatar', 'The Artist', 'Life of Pi', 'Star Wars', 'Iron Man', 'Slumdog Millionaire', 'The Revenant', 'The Avengers', 'The King’s Speech', 'The Bourne Ultimatum', 'Guardians of the Galaxy', 'Blade Runner 2049', 'Shutter Island', 'Deadpool', 'Ford v Ferrari', 'Logan', 'Gone Girl', '12 Years a Slave', 'Prisoners', 'Mad Max: Fury Road', 'Into the Wild', 'No Country for Old Men', 'There Will Be Blood', 'Inside Out', 'The Wolf of Wall Street', 'Warrior', 'Jaws', 'Toy Story 3', 'Inglourious Basterds', '3 Idiots', 'Django Unchained', 'WALL-E', 'Avengers Endgame', 'Joker', 'Avengers: İnfinity War', 'The Dark Knight Rises', 'The Intouchables', 'Whiplash', 'Interstellar', 'Inception', 'The Dark Knight', 'The Post', 'extinction', 'Lost In Space', 'Justice League', 'Coco'];
  for (let index = 0; index < top10.length; index++) {
    $.get("https://www.omdbapi.com/?s=" + top10[index] + "&apikey=ba1f4581", function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);
      var title = data.Search[0].Title;
      var posterurl = data.Search[0].Poster;
      document.getElementById(index).innerHTML = " <img class='d-block w-100 imgBoyutu' src= '" + posterurl + "'><br><span>" + title + "</span>";



    });

  }

}

function cagir(q) {
  
  $("#gizle").hide();
  if(document.getElementById('kelime').value==''){
    $('#gizle').show();
    $("#goster").hide();
  }else{
    $("#goster").show();

  }
  $.get("https://www.omdbapi.com/?s=" + q + "&apikey=ba1f4581", function (rawdata) {
    var rawstring = JSON.stringify(rawdata);
    data = JSON.parse(rawstring);
    var title = data.Search[0].Title;
    var posterurl = data.Search[0].Poster;
    document.getElementById('answer').innerHTML = " <img src= '" + posterurl + "'><br><span>" + title + "</span>";
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




