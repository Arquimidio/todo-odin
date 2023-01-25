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
        return this._priority;
    }

    set value(value) {
        if(Priority.isValid(value)) {
            this._priority = value;
        }
    }
}