// Задание 1

let parseCount = function (value) {
    if (value && isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value);
}

let validateCount = function (value) {
    try {
        parseCount(value);
    } catch (e) {
        return e;
    }
    return Number.parseInt(value);
}


// Задание 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let perimeter = this.a + this.b + this.c;
        this.p = perimeter / 2;
        let area = Math.sqrt(this.p * ((this.p - this.a) * (this.p - this.b) * (this.p - this.c)));
        return Number((area).toFixed(3));
    }
}

getTriangle = function (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return Object = { getArea() { return new Error("Ошибка! Треугольник не существует") }, getPerimeter() { return new Error("Ошибка! Треугольник не существует") } };
    }
}
