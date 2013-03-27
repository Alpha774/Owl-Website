$(document).ready(function () {


  var zoomin = function () {
    // Retrieve the address for the enlarged image.
    var zoomed = $(this).attr('zoom');
    // The image source in the zoomBox fades in.
    $('#zoomBox img').hide().attr('src', zoomed).fadeIn();
  }

  var zoomout = function () {
    // The enlarged version of the thumbnail disappears.
    $('#zoomBox img').hide();
  }

  // The zoom code is connected to anything that is of the "zoomable" class in the HTML.
  $('.zoomable').mouseover( zoomin );
  // The first thumbnail appears in enlarged form
  $('.zoomable:first').trigger('mouseover');


});