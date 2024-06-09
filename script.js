document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('todo-input');
  const addButton = document.getElementById('add-todo-btn');
  const todoList = document.getElementById('todo-list');

  addButton.addEventListener('click', function () {
    const todoText = input.value.trim();
    if (todoText !== '') {
      const li = document.createElement('li');
      li.textContent = todoText;
      todoList.appendChild(li);
      input.value = '';
    }
  });
});
