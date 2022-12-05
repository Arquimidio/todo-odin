import Storage from "./components/Storage";
import Project from "./components/Project";
import Task from "./components/Task"

Storage.initStorage();
Storage.add(new Project('ElPires'));
Storage.add(new Task('lol', '12121', 3, 'Raw data', false), 'ElPires');