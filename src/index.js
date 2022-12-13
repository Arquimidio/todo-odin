import "./graphical/css/main.css";
import "./graphical/css/responsive.css";
import Task from "./components/Task";
import Project from "./components/Project";
import Memory from "./components/Memory";
import UserInterface from "./components/UserInterface";

let selectedProject;

function loadProject(project) {
    const projectName = project.getName();
    const [
        projectContainer,
        projectElement, 
        projectRemover
    ] = UserInterface.renderProject(projectName);

    projectContainer.addEventListener(
        'click', 
        () => {
            UserInterface.singleSelection(
                projectContainer
            )
            showTasks.call(null, projectName)
            selectedProject = project;
        }
    );

    projectRemover.addEventListener(
        'click',
        deleteProject.bind(
            null, 
            projectName, 
            projectContainer
        )
    )
}

function loadProjects() {
    const projects = Memory.getProjects();

    for(const project of projects) {
        loadProject(project);
    }
}

function deleteProject(name, container, event) {
    event.stopPropagation();
    Memory.deleteProject(name);

    container.remove();

    if(selectedProject?.getName() === name) {
        selectedProject = null;
        UserInterface.clearProjectDisplay();
    }
}


function showTasks(projectName) {
    const project = Memory.getProject(projectName);
    selectedProject = project;
    UserInterface.clearChildren(UserInterface.todoDisplay);
    UserInterface.setSelectedProject(projectName);
    project
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
        showTasks(projectName);
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

