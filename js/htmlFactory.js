export function createTodoItem(item) {
  const htmlAsString =
    /*html*/
    `<article class="todo-item box-shadow">
      <div class="content">
        <p class="text">${item.text}</p>
      </div>
      <div class="action-buttons">
        <span class="move-up material-symbols-outlined">
          arrow_upward
        </span>
        <span class="move-down material-symbols-outlined">
          arrow_downward
        </span>
        <span class="delete material-symbols-outlined">
          delete
        </span>
        <span class="done material-symbols-outlined">
          done
        </span>
      </div>
    </article>`;

  return htmlAsString;
}

// Maybe add in later
// <p class="author">${item.author}</p>;
