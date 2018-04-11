// Add new todo
$('.add-todo').keydown(function(e) {
    if (e.which == 13 && $('.add-todo').val() !== '') { // press enter
        addTodo(e.target.value);
    }
});

const addTodo = (value) => {
    const newTodo = getTodoHTML(value);
    $('.add-todo').val(''); // clear the input bar
    $('.todo-list').prepend(newTodo); // add todo to the beginning of the list
};

const getTodoHTML = (value) => {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${value}
    <span class="badge">
        <svg class="todo-button__done" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="todo-button__done" d="M0 0h24v24H0z" fill="none"/><path class="todo-button__done" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg><svg class="todo-button__clear" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="todo-button__clear" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path class="todo-button__clear" d="M0 0h24v24H0z" fill="none"/></svg>
    </span>
</li>`;
};

/* delegate 事件代理：把監聽事件往上交給父元素。
   以下兩功能由 '.todo-button__clear'、'.todo-button__done' 交給 '.todo-list' */

// Clear todo
$('.todo-list').click(function(e) {
    if ($(e.target).hasClass('todo-button__clear')) {
        $(e.target).closest('li').remove(); // http://api.jquery.com/closest/ （比較和 '.parent()' 不同用法）
    };
});

// Mark todo as done/undone
$('.todo-list').click(function(e) {
    if ($(e.target).hasClass('todo-button__done')) {
        const listItem = $(e.target).closest('li');
        // Mark as undone
        if (listItem.hasClass('todo-item__done')) {
            listItem.removeClass('todo-item__done');
            listItem.css('background-color', '');
            listItem.css('text-decoration', '');
        }
        // Mark as done 
        else {
            listItem.addClass('todo-item__done');
            listItem.css('background-color', '#cccccc');
            listItem.css('text-decoration', 'line-through');
        };
    };
});
