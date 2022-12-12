import Task from "./components/Task";
import Project from "./components/Project";
import Memory from "./components/Memory";
import UserInterface from "./components/UserInterface";

function showProject(project) {
    const projectElement = UserInterface.initProject(project.getName());
    projectElement.addEventListener('click', showTasks);
}

function showProjects() {
    const projects = Memory.getProjects();

    for(const project of projects) {
        showProject(project);
    }
}

function showTasks(event, projectName) {
    console.log(projectName);
    UserInterface.clearTodoDisplay();
    Memory
        .getTasks(projectName)
        .forEach(UserInterface.initSingleTask.bind(UserInterface, projectName));
}

function submitProject(event) {
    event.preventDefault();
    const { value: projectName } = UserInterface.newProjectName; 
    Memory.setProject.call(Memory, new Project(projectName));
    UserInterface.updateProjects(Memory.getProjects());
    event.target.reset();
}

function submitTask(projectName, event) {
    event.preventDefault();
    const { target: { firstChild: input } } = event;
    Memory.setTask(projectName, new Task(input.value));
    this.initAllTasks(projectName);
}

/*=========== EVENT LISTENING ===========*/

window.addEventListener('beforeunload', () => {
    Memory.saveToStorage();
}, { capture: true })

document.addEventListener('DOMContentLoaded', () => {
   showProjects();
})

UserInterface.projectsAdder.addEventListener(
    'submit',
    submitProject
)

