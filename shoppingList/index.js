'use strict';

function checkItem() {
  const shoppingItemChecked = $('.shopping-item');
  $('.shopping-item-toggle').on('click', function() {
    shoppingItemChecked.addClass('shopping-item__checked');
  });
}

$(checkItem);

