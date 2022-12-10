import Storage from "./components/Storage";
import Project from "./components/Project";
import UserInterface from "./components/UserInterface";

document.addEventListener('DOMContentLoaded', () => {
    Storage.initialize();
    UserInterface.load(Project, Storage);
})
