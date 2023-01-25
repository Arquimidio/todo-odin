export default class Priority {
    static validPriorities = [
        'normal',
        'medium',
        'high'
    ]

    static isValid(value) {
        return Priority.validPriorities.includes(value);
    }

    constructor(priority) {
        if(!Priority.isValid(priority)) throw new Error(`${priority} is not a valid priority!`);
        this._value = priority;
    }

    get value() {
        return this._value;
    }

    update() {
        const curIndex = Priority.validPriorities.indexOf(this.value);
        this._value = Priority.validPriorities[(curIndex + 1) % 3];
    }

}