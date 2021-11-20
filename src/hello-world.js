/**
 * This is a HelloWorld Class which extends World Class
 * @class
 * @extends World
 */
class HelloWorld extends World {
    constructor() {
        super();
        /**
		 * World Name
		 * @type {String}
		 */
        this.name = 'hello';
    }
}

/**
 * Events
 * @event HelloWorld#Greet
 * @type {WorldEvents}
 */