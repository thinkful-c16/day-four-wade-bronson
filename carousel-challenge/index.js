'use strict';

$(function() {
  $('.thumbnail').on('click', function(event) {
    const selectedThumbnail = $(event.currentTarget).find('img');
    $('.hero').replaceWith($(selectedThumbnail));
  });
});