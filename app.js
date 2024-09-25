const text = document.querySelector(".add");
const task = document.querySelector("#task");
const warn = document.querySelector(".alert");
const trash = document.querySelector("span");

function addTask() {
  if (text.value === "") {
    let p = document.createElement("p");
    p.innerHTML = warn.value;
    warn.style.display = "block";
    setTimeout(() => {
      warn.style.display = "none";
    }, 5000);
  } else {
    let li = document.createElement("li");
    li.innerHTML = text.value;

    task.appendChild(li);

    let btnn = document.createElement("button");
    btnn.classList.add("btn1");
    li.appendChild(btnn);

    let del = document.createElement("img");

    del.classList.add("trashh");
    del.src = "trash.png";

    btnn.appendChild(del);

    li.addEventListener("click", () => {
      li.classList.toggle("checked");
    });

    btnn.addEventListener("click", () => {
      li.remove();
    });
  }

  text.value = "";
}
