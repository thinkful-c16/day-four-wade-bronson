'use strict';

function updateSelectedThumbnail() {
  $('.thumbnail').on('click', function(event) {
    const selectedThumbnailSrc = $(event.currentTarget).find('img').attr('src');
    const selectedThumbnailAlt = $(event.currentTarget).find('img').attr('alt');

    console.log(selectedThumbnailSrc);

    $('.hero img').attr('src', selectedThumbnailSrc).attr('alt', selectedThumbnailAlt);

  });
}

$(document).ready(function() {
  updateSelectedThumbnail();
});