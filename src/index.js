import Storage from "./components/Storage";
import Project from "./components/Project";
import UserInterface from "./components/UserInterface";
import Task from "./components/Task";

document.addEventListener('DOMContentLoaded', () => {
    Storage.initialize();
    Storage.setProject(new Project('Dorime'));
    UserInterface.updateProjectList(Storage);
    UserInterface.initProjects();
})
