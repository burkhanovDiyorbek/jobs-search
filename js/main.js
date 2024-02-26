const con = document.querySelector(".cards-container");

const xhr = new XMLHttpRequest();

xhr.open("GET", "./js/jobs.json");

xhr.onload = () => {
  showJobs(JSON.parse(xhr.response));
};

xhr.send();

function showJobs(arr) {
  arr.forEach((item) => {
    const { id, date, jobType, title, description, location } = item;

    con.innerHTML += `
   <div class="card">
        <img src="./img/jobs/${id}.png" alt="img" />
        <p class="time">
          <span>${date}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#6E8098" />
          </svg>
          <span>${jobType} time</span>
        </p>
        <h2 class="title">${title}</h2>
        <p class="description">${description}</p>
        <p class="location">${location}</p>
      </div>
  `;
  });
}

const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const tog = document.querySelector(".theme_tog");

dark.addEventListener("click", () => {
  document.body.classList.add("body-dark");
});

light.addEventListener("click", () => {
  document.body.classList.remove("body-dark");
});

tog.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");
});

const filterBtn = document.querySelector(".filter-btn");
const modal = document.querySelector(".modal");

filterBtn.addEventListener("click", () => {
  modal.classList.add("modal-true");
  document.body.style = "overflow:hidden;";
});

modal.addEventListener("click", (e) => {
  e.target == e.currentTarget
    ? (modal.classList.remove("modal-true"),
      (document.body.style = "overflow:visible;"))
    : "";
});

window.addEventListener("keydown", (e) => {
  e.key == "Escape" ? modal.classList.remove("modal-true") : "";
  document.body.style = "overflow:visible;";
});
