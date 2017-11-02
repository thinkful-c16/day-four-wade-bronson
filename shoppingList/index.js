'use strict';

function checkItem() {
  const shoppingItemCheckButton = $('li .shopping-item-toggle');
  $(shoppingItemCheckButton).on('click', function(event) {
    $(event.currentTarget).parents('li').find('.shopping-item').addClass('shopping-item__checked');

  });
}

$(checkItem);

function deleteItem() {
  const shoppingItemDeleteButton = $('li .shopping-item-delete');
  $(shoppingItemDeleteButton).on('click', function(event) {
    $(event.currentTarget).parents('li').remove();
  });

}

$(deleteItem);