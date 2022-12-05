import Storage from "./components/Storage";
import Project from "./components/Project";
import Task from "./components/Task"

Storage.initStorage();
Storage.add(new Project('ElPires'));
Storage.add(new Task('lol', '2022-12-05', 3, 'Raw data', false), 'ElPires');