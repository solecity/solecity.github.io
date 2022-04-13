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
    name: "nomad",
    year: 201806,
    positions: ["UI / UX Designer", "Front-End Developer"],
    description: "",
    skills: ["Adobe Illustrator", "HTML", "CSS", "JavaScript"],
    img: "/img/nomad.png",
    source: "https://github.com/solecity/NOMAD",
    //demo: "https://solecity.github.io/NOMAD/",
  },
  {
    tabs: ["design", "programming"],
    id: "artisanFair",
    name: "artisan's fair vila do conde",
    year: 202007,
    positions: ["UI / UX Designer", "Java Developer"],
    description:
      "The challenge was to create an application that would allow our visitors to have real time access to all the different events, artisan booths and activities carried out during the fair.",
    skills: ["Adobe Illustrator", "Adobe XD", "Java", "Android Studio"],
    img: "/img/feira-artesanato.png",
    source: "https://github.com/ESMAPP/Artesanato_2.0_Android",
    design: "https://www.behance.net/gallery/99300747/UIUX-Artisans-Fair-app",
  },
  {
    tabs: ["programming"],
    id: "hydraTaskManager",
    name: "hydra task manager",
    year: 201909,
    positions: ["Full-Stack Developer"],
    description:
      "Development of a data analysis module, incorporated in the HydraDev human resources platform, which extracts data from the reports that are submitted daily by the development team.",
    skills: ["JavaScript", "React", "MongoDb", "Express", "NodeJs"],
    img: "/img/hydra-dev.png",
    source: "private",
  },
  {
    tabs: ["design", "programming"],
    id: "lune",
    name: "lune - finance tracker",
    year: 202111,
    positions: ["UI / UX Designer", "Full-Stack Developer"],
    description: "",
    skills: ["Figma", "JavaScript", "React", "MongoDb", "Express", "NodeJs"],
    img: "/img/lune.png",
  },
  {
    tabs: ["design"],
    id: "tusky",
    name: "tusky - company manager",
    year: 202201,
    positions: ["UI / UX Designer"],
    description: "",
    skills: ["Figma"],
    img: "/img/tusky.png",
  },
  {
    tabs: ["art"],
    id: "thePromisedReef",
    name: "the promised reef",
    year: 201507,
    positions: ["Concept Artist", "2D Artist"],
    description:
      "This project consisted in the development of a prototype, incorporating game design practices and art asset production.",
    skills: ["Drawing", "Adobe Photoshop"],
    img: "/img/the-promised-reef.png",
    artwork: "https://www.artstation.com/artwork/1BPQK",
  },
  {
    tabs: ["art"],
    id: "villageAssetPack",
    name: "village asset pack",
    year: 201610,
    positions: ["2D Artist"],
    description:
      "This project consisted in the production of pixel art game assets.",
    skills: ["Drawing", "Adobe Photoshop"],
    img: "/img/village-asset-pack.png",
    artwork: "https://www.artstation.com/artwork/4R5g2",
  },
  {
    tabs: ["art"],
    id: "queenMarah",
    name: "queen marah",
    year: 201510,
    positions: ["Concept Artist"],
    description: "",
    skills: ["Drawing", "Adobe Photoshop"],
    img: "/img/queen-marah.png",
    artwork: "https://www.artstation.com/artwork/0d9b8",
  },
  {
    tabs: ["art"],
    id: "sassa",
    name: "sassa",
    year: 201502,
    positions: ["Concept Artist"],
    description: "",
    skills: ["Drawing", "Adobe Photoshop"],
    img: "/img/sassa.png",
    artwork: "https://www.artstation.com/artwork/l6edJ",
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

  projectsList.sort((a, b) => (a.year < b.year ? 1 : -1));

  console.log(projectsList);

  for (const project of projectsList) {
    const div = document.createElement("div");
    const info = document.createElement("div");
    const name = document.createElement("p");
    const button = document.createElement("button");

    div.style.backgroundImage = `url(${project.img})`;

    name.innerHTML = project.name.toUpperCase();
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
  const close = document.getElementsByClassName("btn-close")[0];

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
  const positions = document.getElementById("positions");
  const description = document.getElementById("description");
  const skills = document.getElementById("skills");

  positions.innerHTML = "";
  skills.innerHTML = "";

  const project = projectsList
    .filter((project) => project.id === id)
    .reduce((obj, item) => (obj[item.id] = item));

  header.style.backgroundImage = `url(${project.img})`;

  modalTitle.innerHTML = project.name;
  description.innerHTML = project.description;

  createLabel(project.positions, positions, "position");
  createLabel(project.skills, skills, "skill");

  handleButtons(project);
};

const createLabel = (arr, wrapper, className) => {
  for (const skill of arr) {
    const p = document.createElement("p");

    p.innerHTML = skill;

    p.setAttribute("class", className);

    wrapper.appendChild(p);
  }
};

const handleButtons = (project) => {
  const footer = document.getElementsByClassName("modal-footer")[0];

  footer.innerHTML = "";

  if (project.source) {
    let source = "";

    if (project.source === "private") {
      source = createButton("Private", "source", "", true);
    } else {
      source = createButton("Source", "source", project.source);
    }

    footer.appendChild(source);
  }

  if (project.demo) {
    const demo = createButton("Live Demo", "demo", project.demo);

    footer.appendChild(demo);
  }

  if (project.design) {
    const design = createButton("Design", "design", project.design);

    footer.appendChild(design);
  }

  if (project.artwork) {
    const artwork = createButton("Artwork", "artwork", project.artwork);

    footer.appendChild(artwork);
  }
};

const createButton = (name, idName, href, isDisabled = false) => {
  const button = document.createElement("button");

  button.innerHTML = name;
  button.href = href;

  button.setAttribute("id", idName);

  if (isDisabled) button.disabled = true;
  else button.disabled = false;

  button.addEventListener("click", () => {
    window.open(href, "_blank");
  });

  return button;
};
