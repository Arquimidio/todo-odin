import Memory from "./Memory";

export default class DinamicProject {
    constructor(name, updater) {
        this.name = name;
        this.updaterFn = updater;
    }

    get todo() {
        return Memory
            .getAllTasks()
            .filter(this.updaterFn.bind(this))
    }
}