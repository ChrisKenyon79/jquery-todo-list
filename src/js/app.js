



$(document).ready(function(){

var xButton = '<a><button>X</button></a>;'


$('#toDoList').on('submit', function(elem) {
  elem.preventDefault();
  var input = $('#inputSpot').val();
  $('#taskList').append('<li>' + input + xButton + '</li>')
});


$(document).on('click', 'a', function(e) {
  e.preventDefault();
  $(this).parent().remove();
})


});



// No Event delegation
// $('ul li').click(function() {
//   alert('Clicked!');
// });

// Event delegation
//$('ul').on('click', 'li', function() {
//  alert('Clicked!');
//});

//$('#itemList').on('click', 'li', function() {
  //itemlist.remove()

/*

function addListItem() {
    var textToAdd = $('#new-text').val(); // The finish class is css styling
    $('#list').append('<li class="item"><input type="checkbox" class="finish" />' + textToAdd + '<button class="delete">Delete</button></li>');
    $('#new-text').val('');
}

function deleteItem() {
    $(this).parent().remove();
}

$(document).ready(function() {
    $('#add').on('click', addListItem);
    $(document).on('click', '.delete', deleteItem);
});

})
*/
