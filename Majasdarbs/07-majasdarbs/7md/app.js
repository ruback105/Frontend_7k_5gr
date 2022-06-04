// TODO app (dienas planotaju)
// Nokopejiet šo mapi savas majas darba mape
// Aplikacijas darbas principi var apskatit video appDemo.mp4

/* Mums nepieciešams izviedot nelielu todo aplikaciju ar iespeju pievienot izdzest un atziment izdarito notikumu
    Mums nepieciešams 4 funkcijas
        addTask() - pievienot notikumu
            1 - izveleties inputa vertibu izmantojot selector.value;
            2 - izveido object priekš notikums 
                const task = {
                    textTask,
                    done: false
                }
            3 - izsaukt funkciju saveToLocalStorage

        saveToLocalStorage() - saglaba notikumu
            1 - jaizmanto JSON.stringify
            2 - jaizmanto atslegst vards 'taskList'

        renderTask() - izvada sarakstu notikumu
            1 - jaizmanto innerHTML
            2 - jaizmanto vienu no cikliem lai iziet cauri visam localstorage ierakstiem
            3 - šis html palidzes izvadit datus
            return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
            4 - Gadijuma ja elements ir apziments ka izdarits mums nepiecišams pievienot klassi .done ../style.css
                Lidz ar to nepieciešams izveidot parbaudi if else lai parbaudit test.done === 'true'

        toggleDone() - atzimet ka izdarito
            Mums nepiecišams pievinot 2 eventListener
                addEventListener('submit', addTask);   ----> nostradas kad mes nospiedam pievinot pogu un izsaucam funkciju addTask
                addEventListener('click', toggleDone); ----> nostradas kad mes nospiedam uz elementu saraksta un izsaucam funkciju toggleDone

                funkcija toogleDone dara divas darbibas
                gadijuma ja bija nospiesta izdžešanas poga, mes izdesam elementu no localStorage izsaucam renderTask funkciju lai atjaunto sarakstu
                gadijuma ja bija nospiest elements mes nomainam elementam done vertibu done: false --> done: true un izsaucam renderTask funkciju lai atjauno sarakstu
*/

const taskListKey = "task_list"; // key for storing/getting data from local storage

let taskList = JSON.parse(localStorage.getItem(taskListKey)) || []; // get data from local storage or create empty array

// selected elements
const inputField = document.getElementById("input");
const tasksElements = document.querySelector(".myTasks");
const submitButton = document.getElementById("submit-button");

/*
  Function, that renders list
  It should render item value itself
  In case if task is done, class should be rendered
*/
const renderTask = () => {
  const taskListArray = taskList.map((taskElement, idx) => {
    return `<li data-id=${idx}>
    <p data-id=${idx} class=${taskElement.done ? "done" : ""}>${
      taskElement.name
    }</p>
    <span class="remove">❌</span></li>`;
  });

  tasksElements.innerHTML = taskListArray.join(""); // render data in html by parsing array to string
};

// function that add task to the local storage
const addTask = (e) => {
  e.preventDefault(); // prevent default page reload behaviour

  const inputValue = inputField.value; // get value from input field

  taskList.push({
    name: inputValue,
    done: false,
  }); // push new task to the task list

  saveToLocalStorage(taskListKey, taskList); // save task list to local storage

  inputField.value = ""; // reset default value of the input field
};

/*
  Function, that sets value inside local storage
  key if the name, which will be assigned to the value inside the local storage, so you can get it by this name
  value should be stringified before push, because we might want to store object type (array/object)
*/
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));

  // if we update task list, rerender it
  if (key === taskListKey) {
    renderTask();
  }
};

/*
    Function that performs one of 2 actions:
    1) Add done to list item
    2) Remove task from the list
 */
const toggleDone = (e) => {
  const pressedElement = e.target; // getting element that was clicked
  let liDataId = pressedElement.getAttribute("data-id"); // getting data id attribute

  // if data id attribute exists
  if (liDataId) {
    taskList[liDataId].done = !taskList[liDataId].done; // changing done to list item
  }
  //else if data id doesnt exist and element has remove (remove button)
  else if (pressedElement.classList.contains("remove")) {
    liDataId = pressedElement.parentElement.getAttribute("data-id"); // get parent element data id (li data-id attribute)
    taskList.splice(liDataId, 1); // remove task from list array by data-id attribute value
  }

  saveToLocalStorage(taskListKey, taskList); // saving data to local storage
};

// triggers, when add button is clicked
submitButton.addEventListener("click", addTask);
// triggers when something inside of the list is clicked
tasksElements.addEventListener("click", toggleDone);

renderTask(); // initial htmt list render
