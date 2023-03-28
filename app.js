



const grid4 = document.querySelector(".grid-4");
const grid5 = document.querySelector(".grid-5");
const grid1 = document.querySelector(".grid-1");
const grid2 = document.querySelector(".grid-2");
const grid3 = document.querySelector(".grid-3");
const next = document.querySelector(".switch-next");
const prev = document.querySelector(".switch-prev");
 


next.addEventListener("click", () => {
  console.log(next);
  grid1.classList.toggle("prev");
  grid2.classList.toggle("prev");
  grid3.classList.toggle("prev");
  
});

prev.addEventListener("click", () => {
  console.log(next);
  grid1.classList.toggle("prev");
  grid2.classList.toggle("prev");
  grid3.classList.toggle("prev");
});








