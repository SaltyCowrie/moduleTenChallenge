class Shape {
    constructor(color) { this.color = color }
};

class Circle extends Shape {
    constructor(color, radius) {super(color); this.color = color; this.radius = radius}
    render() 
    {return '<circle cx="50" cy="50" r="50" />'};

};

class Rect extends Shape {
    constructor(color, size) {super(color); this.color = color; this.size = size}
    render()
    { return '<rect width="50" cy="50" />'};

};

class Ellipse extends Shape {
    constructor(color, size) {super(color); this.color = color; this.size = size}
    render()
    { return '<ellipse cx="100" cy="50" rx="100" ry="50" />'};

};

module.exports = {Circle, Rect, Ellipse}