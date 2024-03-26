// 인풋에 내용을 쓰고 등록 버튼을 클릭하면
// 리스트에 내용이 추가된다.

// const todoInput = document.getElementById('todo-input');
// console.log(todoInput)

//stackoverflow


const todoInput = document.querySelector ('.todo-input');
const todoBtn = document.querySelector ('.todo-input-btn');
const todoList = document.querySelector('.todo-list-ul');

const delitem = (event) => {
  const target = event.target.parentElement;
  target.remove();
}

todoBtn.addEventListener('click', function(){
  const todo = todoInput.value.trim();

    if (todo != '') {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const button = document.createElement('button');

      input.type = 'checkbox';
      span.textContent = todo;
      button.innerText = 'Delete';
      button.addEventListener('click',delitem);

      label.classList.add('todo-list-item');
      input.classList.add('todo-list-check');
      span.classList.add('todo-list-content');
      button.classList.add('todo-list-delete');

      label.appendChild(input);
      label.appendChild(span);
      label.appendChild(button);
      li.appendChild(label);
      todoList.appendChild(li);

    }
    else {
      alert('할 일을 입력해주세요.')
    }
});


