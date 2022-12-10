import Memory from "./components/Memory";
import Project from "./components/Project";
import UserInterface from "./components/UserInterface";

window.addEventListener('beforeunload', () => {
    Memory.saveToStorage();
}, { capture: true })

document.addEventListener('DOMContentLoaded', () => {
    UserInterface.load(Project, Memory);
})
