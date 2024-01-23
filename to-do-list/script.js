const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${inputBox.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        li.addEventListener("click", toggleTask);
        listContainer.appendChild(li);
        inputBox.value = ''; 
    }
}

function toggleTask() {
    this.classList.toggle("checked");
}

function deleteTask(btn) {
    const listItem = btn.parentNode;
    listContainer.removeChild(listItem);
}
