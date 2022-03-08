const techSkills = [
  { name: "HTML", years: 4 },
  { name: "CSS", years: 4 },
  { name: "JavaScript", years: 4 },
  { name: "React", years: 2 },
  { name: "Svelte", years: 0 },
  { name: "Vue", years: 1 },
  { name: "Node", years: 4 },
  { name: "NPM", years: 4 },
  { name: "Postman", years: 2 },
  { name: "MongoDB", years: 4 },
  { name: "Express", years: 4 },
  { name: "MySQL", years: 1 },
  { name: "Figma", years: 2 },
  { name: "Adobe XD", years: 4 },
  { name: "Adobe Photoshop", years: 4 },
  { name: "Adobe Illustrator", years: 4 },
  { name: "Blender", years: 1 },
  { name: "Cinema 4D", years: 1 },
];

const softSkills = [
  "Teamwork",
  "Time Management",
  "Flexibility",
  "Adaptability",
  "Patience",
  "Creativity",
];

window.onload = function () {
  let menuCircle = document.getElementsByClassName("menu-circle")[0];
  let body = document.getElementsByTagName("body")[0];

  menuCircle.addEventListener("click", () => {
    body.classList.toggle("open-menu");
  });

  loadSkills();
};

const loadSkills = () => {
  let techWrapper = document.getElementById("tech-wrapper");

  for (let i = 0; i < techSkills.length; i++) {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let years = document.createElement("p");

    div.setAttribute("class", "skill");

    name.innerHTML = techSkills[i].name;
    name.setAttribute("class", "text");

    years.innerHTML = `${
      techSkills[i].years === 0
        ? "less than a year"
        : techSkills[i].years === 1
        ? `${techSkills[i].years} year`
        : `${techSkills[i].years} years`
    }`;
    years.setAttribute("class", "years");

    div.appendChild(name);
    div.appendChild(years);
    techWrapper.appendChild(div);
  }

  let softWrapper = document.getElementById("soft-wrapper");

  for (let i = 0; i < softSkills.length; i++) {
    let p = document.createElement("p");

    p.innerHTML = softSkills[i];
    p.setAttribute("class", "skill");

    softWrapper.appendChild(p);
  }
};
