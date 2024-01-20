import { createTodoItem } from "./htmlFactory.js";
import { handleClick, handleSubmit } from "./utilities.js";

// ########## Create default Items ##########
const todoList = document.querySelector(".todo-list");

const defaultTodos = [
  { author: "Niklas", text: "Clean the bathroom" },
  { author: "Niklas", text: "Do 15 push-ups" },
  { author: "Niklas", text: "Do the laundry" },
];

const defaultTodosHtml = defaultTodos.map((item) => createTodoItem(item));
todoList.insertAdjacentHTML("afterbegin", defaultTodosHtml.join(""));

// ########## Register EventListeners ##########

const main = document.querySelector("main");
main.addEventListener("click", (e) => handleClick(e.target));

const form = document.querySelector(".create-form");
form.addEventListener("submit", (e) => handleSubmit(e));
