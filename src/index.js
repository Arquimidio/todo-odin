import Task from "./components/Task";
import Project from "./components/Project";
import Memory from "./components/Memory";
import UserInterface from "./components/UserInterface";


function showProject(project) {
    const projectName = project.getName();
    const projectElement = UserInterface.initProject(projectName);
    projectElement.addEventListener('click', showTasks.bind(null, projectName));
}

function showProjects() {
    const projects = Memory.getProjects();

    for(const project of projects) {
        showProject(project);
    }
}

function showTasks(projectName) {
    UserInterface.clearChildren(UserInterface.todoDisplay);
    UserInterface.setSelectedDisplay(projectName);
    Memory
        .getTasks(projectName)
        .forEach(task => UserInterface.initSingleTask.call(UserInterface, task.title));
    const addTaskForm = UserInterface.initTaskAdder();
    addTaskForm.addEventListener('submit', submitTask.bind(null, projectName));
}

function submitProject(event) {
    event.preventDefault();
    const { value: projectName } = UserInterface.newProjectName; 
    const newProject = new Project(projectName);
    Memory.setProject.call(Memory, newProject);
    showProject(newProject)
    event.target.reset();
}

function submitTask(projectName, event) {
    event.preventDefault();
    const { target: { firstChild: input } } = event;
    Memory.setTask(projectName, new Task(input.value));
    UserInterface.initSingleTask(input.value);
    event.target.reset();
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

