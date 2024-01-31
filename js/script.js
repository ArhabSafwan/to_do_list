const input = document.querySelector("input");
const btn = document.querySelector(".taskInput > button");

btn.addEventListener("click", addList);

function addList() {
  const assigned = document.querySelector(".assigned");
  const Completed = document.querySelector(".completed");
  

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const unCheckBtn = document.createElement("button");
  const date = document.createElement('p');
  

  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  delBtn.innerHTML = '<i class="fa fa-trash"></i>';
  unCheckBtn.innerHTML = '<i class="fa fa-angle-up"></i>';
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Set to true for 12-hour format, false for 24-hour format
  };
  date.innerHTML = new Date().toLocaleDateString("en-us", options);

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    assigned.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
    newLi.appendChild(unCheckBtn);
    newLi.appendChild(date);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
    newLi.appendChild(unCheckBtn);
    console.log(unCheckBtn);
    newLi.appendChild(date);
  });

  unCheckBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    assigned.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
    checkBtn.style.display = "inline";
    newLi.appendChild(date);
  });

  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
