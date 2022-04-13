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
