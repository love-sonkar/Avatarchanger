let namee = document.getElementById("nameid");

let button = document.getElementById("button");

let imgChange = document.getElementById("image");

button.addEventListener("click", () => {
  let result = namee.value;
  imgChange.setAttribute("src", `https://joeschmoe.io/api/v1/${result}`);
});
