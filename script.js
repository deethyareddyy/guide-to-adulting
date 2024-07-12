var button = $('button.calc'); 
button.on("click", submitForm);

function submitForm(event){
  event.preventDefault();
  var income = $('.inc')
  var needs = income.val() * 0.5;
  var wants = income.val() * 0.3;
  var savings = income.val() * 0.2;
  console.log(savings)

  $('#message').text(
    `Recommended monthly spending:\n
    Needs: $${needs}\n
    Wants: $${wants}\n
    Savings:     $${savings}`);


  console.log('this works')
}








$(document).ready(function() {
  $('#addItem').on("click", function(event) {
    event.preventDefault();

    var task = $('.task').val().trim();
    if (task === "") {
      return;
    }

    var uniqueId = `item-${Date.now()}`; // Use timestamp to ensure uniqueness

    // Create a new checkbox element with a unique ID based on the timestamp
    var checkbox = `<input type="checkbox" id="${uniqueId}" class="task-checkbox">`;
    // Create a label for the checkbox, linking it to the unique ID
    var label = `<label for="${uniqueId}">${task}</label>`;
    // Append the checkbox and label to the #itemList element
    $('#itemList').append(`<div>${checkbox}${label}</div>`);

    // Clear input field after adding item
    $('.task').val('');

    // Debugging: log the HTML added to #itemList
    console.log(`Added: <div>${checkbox}${label}</div>`);
  });
});
