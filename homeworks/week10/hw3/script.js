
var list = [];

// Add new todo
$('.add-todo').keydown(function(e) {
  if (e.which == 13 && $('.add-todo').val() !== '') {
    let todo = e.target.value;

    // Insert new todo at the beginning of the list
    list.unshift({
      content: todo,
      isDone: false,
      id: ''
    });

    render();

    // Clear the input bar
    $('.add-todo').val('');
  };
});


// Remove todo
$('.todo-list').click(function(e) {
  if ($(e.target).hasClass('todo-button__clear')) {

    // Find the index of the selected item
    let listItem = $(e.target).parents('li');
    let id = $('.todo-item').index(listItem);

    // Filter the list
    list[id].id = id;
    list = list.filter(item => item.id !== id);

    render();
  };
});


// Mark todo as done/undone
$('.todo-list').click(function(e) {
  if ($(e.target).hasClass('todo-button__done')) {

    // Find the index of the selected item
    let listItem = $(e.target).parents('.todo-item');
    let id = $('.todo-item').index(listItem);

    if (list[id].isDone === false) {
      // Mark as done
      list[id].isDone = true;
    } else {
      // Mark as undone
      list[id].isDone = false;
    };

    render(); 
  };
});


// Function render()
const render = () => {
  
  $('.todo-item').remove();

  for (let i = 0; i < list.length; i++) {

    if (list[i].isDone) {
      // Item which is done
      $('.todo-list').append(`<li class="list-group-item d-flex justify-content-between align-items-center todo-item" style="background-color: #cccccc; text-decoration: line-through;">
      ${list[i].content}
      <span class="badge">
          <svg class="todo-button__done" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="todo-button__done" d="M0 0h24v24H0z" fill="none"/><path class="todo-button__done" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg><svg class="todo-button__clear" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="todo-button__clear" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path class="todo-button__clear" d="M0 0h24v24H0z" fill="none"/></svg>
      </span>
  </li>`);
    } else {
      // Item which is undone
      $('.todo-list').append(`<li class="list-group-item d-flex justify-content-between align-items-center todo-item">
      ${list[i].content}
      <span class="badge">
          <svg class="todo-button__done" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="todo-button__done" d="M0 0h24v24H0z" fill="none"/><path class="todo-button__done" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg><svg class="todo-button__clear" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="todo-button__clear" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path class="todo-button__clear" d="M0 0h24v24H0z" fill="none"/></svg>
      </span>
  </li>`);
    };
  }
};


/* 
Note

Another method to find the index of listItem:
Use the data-* attribute in the HTML tag to embed custom data. 
`data-index="${i}"`

*/