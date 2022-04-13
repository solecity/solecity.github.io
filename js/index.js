const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Svelte",
  "Vue",
  "Node",
  "NPM",
  "Postman",
  "MongoDB",
  "Express",
  "MySQL",
  "Figma",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Blender",
  "Cinema 4D",
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
    id: "nomad",
    name: "NOMAD",
    positions: ["UI / UX Designer", "Front-End Developer"],
    skills: ["Adobe Illustrator", "HTML", "CSS", "JavaScript"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["design", "programming"],
    id: "feiraArtesanato",
    name: "FEIRA DE ARTESANATO VILA DO CONDE",
    positions: ["UI / UX Designer", "Java Developer"],
    skills: ["Adobe Illustrator", "Adobe XD", "Java", "Android Studio"],
    img: "/img/feira-artesanato.png",
  },
  {
    tabs: ["programming"],
    id: "hydraTaskManager",
    name: "HYDRA TASK MANAGER",
    positions: ["Full-Stack Developer"],
    skills: ["JavaScript", "React", "MongoDb", "Express", "NodeJs"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["design", "programming"],
    id: "lune",
    name: "LUNE - FINANCE TRACKER",
    positions: ["UI / UX Designer", "Full-Stack Developer"],
    skills: ["Figma", "JavaScript", "React", "MongoDb", "Express", "NodeJs"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["design"],
    id: "tusky",
    name: "TUSKY - COMPANY MANAGER",
    positions: ["UI / UX Designer"],
    skills: ["Figma"],
    img: "/img/no-image.png",
  },
  {
    tabs: ["art"],
    id: "thePromisedReef",
    name: "THE PROMISED REEF",
    positions: ["Concept Artist"],
    skills: ["Drawing", "Adobe Photoshop"],
    img: "/img/the-promised-reef.png",
  },
];

window.onload = () => {
  const menuCircle = document.getElementsByClassName("menu-circle")[0];
  const body = document.getElementsByTagName("body")[0];

  menuCircle.addEventListener("click", () => {
    body.classList.toggle("open-menu");
  });

  loadSkills();
  loadProjects();

  document.getElementById("defaultOpen").click();

  handleModal();
};

window.onclick = (event) => {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const loadSkills = () => {
  const techWrapper = document.getElementById("techWrapper");
  const softWrapper = document.getElementById("softWrapper");

  createLabel(techSkills, techWrapper, "skill");
  createLabel(softSkills, softWrapper, "skill");
};

const loadProjects = () => {
  const projects = document.getElementById("projects");

  for (const project of projectsList) {
    const div = document.createElement("div");
    const info = document.createElement("div");
    const name = document.createElement("p");
    const button = document.createElement("button");

    div.style.backgroundImage = `url(${project.img})`;

    name.innerHTML = project.name;
    button.innerHTML = "Learn more";

    const positions = document.createElement("div");

    createLabel(project.positions, positions, "position");

    div.setAttribute("class", "project");
    info.setAttribute("class", "info");
    name.setAttribute("class", "name");
    button.setAttribute("id", `${project.id}`);
    button.setAttribute("class", "more");

    for (const tab of project.tabs) {
      div.classList.add(tab);
    }

    info.appendChild(name);
    info.appendChild(positions);
    info.appendChild(button);
    div.appendChild(info);
    projects.appendChild(div);
  }
};

const handleTabs = (e, tab) => {
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
      selected.style.display = "flex";
    }
  } else {
    for (let i = 0; i < project.length; i++) {
      project[i].style.display = "flex";
    }
  }

  e.currentTarget.className += " active";
};

const handleModal = () => {
  const moreButtons = document.getElementsByClassName("more");
  const modal = document.getElementById("modal");
  const close = document.getElementsByClassName("close")[0];

  for (const button of moreButtons) {
    button.addEventListener("click", () => {
      modal.style.display = "flex";

      showProject(button.id);
    });
  }

  close.onclick = function () {
    modal.style.display = "none";
  };
};

const showProject = (id) => {
  const header = document.getElementsByClassName("modal-header")[0];
  const modalTitle = document.getElementById("modalTitle");
  const skills = document.getElementById("skills");
  const positions = document.getElementById("positions");

  positions.innerHTML = "";
  skills.innerHTML = "";

  const project = projectsList
    .filter((project) => project.id === id)
    .reduce((obj, item) => (obj[item.id] = item));

  header.style.backgroundImage = `url(${project.img})`;

  modalTitle.innerHTML = project.name;

  createLabel(project.positions, positions, "position");
  createLabel(project.skills, skills, "skill");
};

const createLabel = (arr, wrapper, className) => {
  for (const skill of arr) {
    let p = document.createElement("p");

    p.innerHTML = skill;

    p.setAttribute("class", className);

    wrapper.appendChild(p);
  }
};
