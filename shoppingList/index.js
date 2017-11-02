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

function addItem() {
  const addItemInput = $('#js-shopping-list-form').find('input').text();
  $('#js-shopping-list-form').on('submit', function(event) {
    $('ul').append('<li><span class="shopping-item"> ' + $(addItemInput) + ' </span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
  });
}

$(addItem);