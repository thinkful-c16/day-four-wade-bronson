'use strict';

function checkItem() {
  const shoppingItemCheckButton = $('li .shopping-item-toggle');
  $(shoppingItemCheckButton).on('click', function(event) {
    $(event.currentTarget).parents('li').find('.shopping-item').addClass('shopping-item__checked');

  });
}

function deleteItem() {
  const shoppingItemDeleteButton = $('li .shopping-item-delete');
  $(shoppingItemDeleteButton).on('click', function(event) {
    $(event.currentTarget).parents('li').remove();
  });
}

function addItem() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    const addItemInput = $('.js-shopping-list-entry').val();
    $('.shopping-list').append(
      `<li>
      <span class="shopping-item">${addItemInput}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`
    );
    $(checkItem);
    $(deleteItem);
    console.log('I am triggering!');
    console.log(addItemInput);
    $('.js-shopping-list-entry').val('');
  });
}

// // $('body').on('click', function(event) {
//   if (event.currentTarget === $('input[name = shopping-list-entry]')
// }

$(addItem);
$(checkItem);
$(deleteItem);