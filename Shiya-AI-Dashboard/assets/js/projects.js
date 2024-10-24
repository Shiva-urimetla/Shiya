document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");
    const addProjectBtn = document.getElementById("add-project-btn");
    const newProjectInput = document.getElementById("new-project");
  
    let projects = [];
  
    const renderProjects = () => {
      projectList.innerHTML = "";
      projects.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.innerHTML = `${index + 1}. ${project} <button onclick="deleteProject(${index})">Delete</button>`;
        projectList.appendChild(projectItem);
      });
    };
  
    const deleteProject = (index) => {
      projects.splice(index, 1);
      renderProjects();
    };
  
    addProjectBtn.addEventListener("click", () => {
      const project = newProjectInput.value;
      if (project) {
        projects.push(project);
        newProjectInput.value = "";
        renderProjects();
      }
    });
  
    window.deleteProject = deleteProject;
  });
  