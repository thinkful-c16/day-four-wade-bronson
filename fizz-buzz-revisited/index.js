'use strict';

function fizzBuzz(countTo) {
  let results = [];
  for (let i = 0; i < countTo; i++) {
    if (i % 15 === 0 ){
      results.push('fizzbuzz');
    }
    else if (i % 5 === 0){
      results.push('buzz');
    }
    else if (i % 3 === 0){
      results.push('fizz');
    }
    else {
      results.push(i);
    }
  }
  return results;
}

function displayResults(results) {
    for (let i = 0; i < results.length; i++) {
        $(.js-results).append(
        `<div class="fizz-buzz-item">
        <span>` + i + `</span>
      </div>`);
    }
}

function fizzBuzzSubmit() {
    $(#number-chooser).submit(function(event) {
        event.preventDefault();
        let countTo = (event.currentTarget).val();
        $(fizzBuzz(countTo));
        $(displayResults(results));
        $(".js-results").empty();
    });
}

$(fizzBuzzSubmit);