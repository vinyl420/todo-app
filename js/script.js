  let i = 0;

function addTask() {
    let todo = document.getElementById("todo").value;
    let div = document.createElement("div");
    let li = document.createElement("li");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");

    let createDiv = document.getElementById("list").appendChild(div);
    createDiv.appendChild(li);
    let appendBtn1 = createDiv.appendChild(btn1);
    let appendBtn2 = createDiv.appendChild(btn2);

    createDiv.id = i;
    appendBtn1.id = "del" + i;
    appendBtn1.setAttribute("onclick", "deleteTask(this.id)");
    btn1.innerHTML = "Delete";

    appendBtn2.id = "com" + i;
    appendBtn2.setAttribute("onclick", "completeTask(this.id)");
    btn2.innerHTML = "Complete";

    li.id = "li" + i;
    li.innerHTML = todo;

    i++;
}

function deleteTask(element) {
    let del = document.getElementById(element);
    let parent = del.parentNode;

    parent.remove();
}

function completeTask(element) {
    let number = element.slice(3);
    let liElement = document.getElementById("li" + number);
    liElement.style.textDecoration = "line-through";
}
