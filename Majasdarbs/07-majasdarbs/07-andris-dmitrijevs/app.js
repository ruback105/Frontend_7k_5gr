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

const taskListKey = "task_list";

let taskList = JSON.parse(localStorage.getItem(taskListKey)) || [];

const inputField = document.getElementById("input");
const tasksElements = document.querySelector(".mytasks");
const submitButton = document.getElementById("submit-button");

const renderTask = () => {
    const taskListArray = taskList.map((taskElement, idx) => {
        return `<li data-id=${idx}>
        <p data-id=${idx} class=${taskElement.done ? "done" : ""}>${
            taskElement.name
        }</p>
        <span class="remove">❌</span></li>`;
      });
     
     tasksElements.innerHTML = taskListArray.join(""); 
   };

const addTask = (e) => { 
    e.preventDefault();

    const inputValue = inputField.value;

    taskList.push({
        name: inputValue,
        done: false,
    });

    saveToLocalStorage(taskListKey, taskList);

    inputField.value = "";
};

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));

    if (key === taskListKey) {
        renderTask();
    }
};



const toggleDone = (e) => {
    const pressedElement = e.target;
    let liDataId = pressedElement.getAttribute("data-id");
    
        if (liDataId) {
        taskList[liDataId].done = !taskList[liDataId].done;
    } 
        else if (pressedElement.classList.contains("remove")) {
        liDataId = pressedElement.parentElement.getAttribute("data-id");
        taskList.splice(liDataId, 1);
    }


    saveToLocalStorage(taskListKey, taskList);
};

submitButton.addEventListener("click", addTask);
tasksElements.addEventListener("click", toggleDone);

renderTask();
