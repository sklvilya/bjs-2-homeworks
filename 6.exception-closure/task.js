// Задание 1

let parseCount = function (value) {
    let result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

let validateCount = function (value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
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
        let p = this.getPerimeter() / 2;
        let area = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
        return Number((area).toFixed(3));
    }
}

getTriangle = function (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return { getArea() { return ("Ошибка! Треугольник не существует") }, getPerimeter() { return ("Ошибка! Треугольник не существует") } };
    }
}
