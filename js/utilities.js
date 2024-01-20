import { createTodoItem } from "./htmlFactory.js";

// ########## Constants ##########

const DELETE = "delete";
const DONE = "done";
const MOVE_DOWN = "move-down";
const MOVE_UP = "move-up";

// ########## Functions ##########

function deleteItem(target) {
  const todoList = document.querySelector(".todo-list");
  const articleParent = getClosest(target, ".todo-item");
  todoList.removeChild(articleParent);
}

function getClosest(element, closest) {
  return element.closest(closest);
}

function markAsDone(target) {
  const articleParent = getClosest(target, ".todo-item");
  const content = articleParent.firstElementChild;
  const doneIcon = articleParent.querySelector(".done");
  const contentIsCompleted = content.classList.contains("complete");

  if (contentIsCompleted) {
    content.classList.remove("complete");
    doneIcon.innerText = "done";
  } else {
    content.classList.add("complete");
    doneIcon.innerText = "undo";
  }
}

function moveItem(target, direction) {
  const todoList = document.querySelector(".todo-list");
  const todoListItems = todoList.children;
  const todoItem = getClosest(target, ".todo-item");
  const indexOfTodoItem = Array.from(todoListItems).indexOf(todoItem);

  if (direction === MOVE_UP) {
    if (indexOfTodoItem === 0) return;

    const previousTodoListItem = todoListItems[indexOfTodoItem - 1];
    todoList.insertBefore(todoItem, previousTodoListItem);
  }

  if (direction === MOVE_DOWN) {
    if (indexOfTodoItem === todoListItems.length - 1) return;

    const nextTodoListItem = todoListItems[indexOfTodoItem + 1];
    todoList.insertBefore(nextTodoListItem, todoItem);
  }
}

// ########## Exported functions ##########

export function handleClick(target) {
  const classList = target.classList;

  switch (classList[0]) {
    case DELETE:
      deleteItem(target);
      break;
    case DONE:
      markAsDone(target);
      break;
    case MOVE_DOWN:
      moveItem(target, MOVE_DOWN);
      break;
    case MOVE_UP:
      moveItem(target, MOVE_UP);
      break;
  }
}

export function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const inputValue = form.firstElementChild.value;

  if (inputValue === "") return;

  const newTodoItem = {
    text: inputValue,
  };

  const newTodoItemHtml = createTodoItem(newTodoItem);
  const todoList = document.querySelector(".todo-list");
  todoList.insertAdjacentHTML("afterbegin", newTodoItemHtml);
  form.reset();
}
