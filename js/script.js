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

  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  delBtn.innerHTML = '<i class="fa fa-trash"></i>';
  unCheckBtn.innerHTML = '<i class="fa fa-angle-up"></i>';


  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    assigned.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);  
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
    newLi.appendChild(unCheckBtn);
    console.log(unCheckBtn);
  });

  unCheckBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    assigned.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
    checkBtn.style.display = "inline"; 
    unCheckBtn.style.display = "none";
  });


  delBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
