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

const projectsList = [
  {
    tabs: ["design", "programming"],
    name: "nomad",
    label: "NOMAD",
    positions: ["UI / UX Designer", "Front-End Developer"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["design", "programming"],
    name: "feiraArtesanato",
    label: "FEIRA DE ARTESANATO VILA DO CONDE",
    positions: ["UI / UX Designer", "Java Developer"],
    img: "/img/feira-artesanato.png",
  },
  {
    tabs: ["programming"],
    name: "hydraTaskManager",
    label: "HYDRA TASK MANAGER",
    positions: ["Full-Stack Developer"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["design", "programming"],
    name: "lune",
    label: "LUNE - FINANCE TRACKER",
    positions: ["UI / UX Designer", "Full-Stack Developer"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["design"],
    name: "tusky",
    label: "TUSKY - COMPANY MANAGER",
    positions: ["UI / UX Designer"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["art"],
    name: "thePromisedReef",
    label: "THE PROMISED REEF",
    positions: ["Concept Artist"],
    img: "/img/the-promised-reef.png",
  },
];

window.onload = function () {
  const menuCircle = document.getElementsByClassName("menu-circle")[0];
  const body = document.getElementsByTagName("body")[0];

  menuCircle.addEventListener("click", () => {
    body.classList.toggle("open-menu");
  });

  loadSkills();
  loadProjects();

  const moreButtons = document.getElementsByClassName("more");

  console.log("open", moreButtons);

  for (const button of moreButtons) {
    button.addEventListener("click", () => {
      console.log(button.id);
    });
  }

  document.getElementById("defaultOpen").click();
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

const loadProjects = () => {
  const projects = document.getElementById("projects");

  for (const project of projectsList) {
    const div = document.createElement("div");
    const info = document.createElement("div");
    const label = document.createElement("p");
    const button = document.createElement("button");

    div.style.backgroundImage = `url(${project.img})`;

    label.innerHTML = project.label;
    button.innerHTML = "Learn more";

    const positions = document.createElement("div");

    for (const pos of project.positions) {
      const position = document.createElement("p");

      position.innerHTML = pos;

      position.setAttribute("class", "position");

      positions.appendChild(position);
    }

    div.setAttribute("class", "project");
    info.setAttribute("class", "info");
    label.setAttribute("class", "label");
    button.setAttribute("id", `${project.name}More`);
    button.setAttribute("class", "more");

    for (const tab of project.tabs) {
      div.classList.add("class", tab);
    }

    info.appendChild(label);
    info.appendChild(positions);
    info.appendChild(button);
    div.appendChild(info);
    projects.appendChild(div);
  }
};

const handleProjects = (e, tab) => {
  const project = document.getElementsByClassName("project");
  const tabLinks = document.getElementsByClassName("tabLinks");
  const selectedTab = document.getElementsByClassName(tab);

  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  if (tab !== "all") {
    for (const selected of selectedTab) {
      selected.style.display = "block";
    }
  } else {
    for (let i = 0; i < project.length; i++) {
      project[i].style.display = "block";
    }
  }

  e.currentTarget.className += " active";
};
