import "./graphical/css/main.css";
import "./graphical/css/responsive.css";
import Task from "./components/Task";
import Project from "./components/Project";
import Memory from "./components/Memory";
import UserInterface from "./components/UserInterface";



function loadProject(project) {
    const projectName = project.getName();
    const projectElement = UserInterface.renderProject(projectName);
    projectElement.addEventListener(
        'click', 
        showTasks.bind(null, projectName)
    );
}

function loadProjects() {
    const projects = Memory.getProjects();

    for(const project of projects) {
        loadProject(project);
    }
}

function showTasks(projectName) {
    UserInterface.clearChildren(UserInterface.todoDisplay);
    UserInterface.setSelectedProject(projectName);
    Memory
        .getTasks(projectName)
        .forEach(
            task => UserInterface.renderTask.call(
                UserInterface, 
                task.title
            )
        );
    const addTaskForm = UserInterface.renderTaskAdder();
    addTaskForm.addEventListener(
        'submit', 
        submitTask.bind(null, projectName)
    );
}

function submitProject(event) {
    event.preventDefault();
    const { value: projectName } = UserInterface.newProjectName; 
    if(!Memory.projectExists(projectName)) {
        const newProject = new Project(projectName);
        Memory.setProject.call(Memory, newProject);
        loadProject(newProject)
        UserInterface.newProjectName.blur();
        event.target.reset();
    };
}

function submitTask(targetProjectName, event) {
    event.preventDefault();
    const { target: { firstChild: input } } = event;
    UserInterface.renderTask(input.value);
    Memory.setTask(targetProjectName, new Task(input.value));
    event.target.reset();
    input.blur();
}

/*=========== EVENT LISTENING ===========*/

window.addEventListener('beforeunload', () => {
    Memory.saveToStorage();
}, { capture: true })

document.addEventListener('DOMContentLoaded', () => {
   loadProjects();
})

UserInterface.projectsAdder.addEventListener(
    'submit',
    submitProject
)

