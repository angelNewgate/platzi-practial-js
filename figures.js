const PI = Math.PI;
const squareInput = document.querySelector("#squareInput");
const squarePerimeterText = document.querySelector("#squarePerimeterText")
const squareAreaText = document.querySelector("#squareAreaText")

const triangleSideA = document.querySelector("#triangleSideA");
const triangleSideB = document.querySelector("#triangleSideB");
const triangleBase = document.querySelector("#triangleBase");
const triangleHeight = document.querySelector("#triangleHeight");
const trianglePerimeterText = document.querySelector("#trianglePerimeterText")
const triangleAreaText = document.querySelector("#triangleAreaText")

const circleInput = document.querySelector("#circleInput");
const circlePerimeterText = document.querySelector("#circlePerimeterText");
const circleAreaText = document.querySelector("#circleAreaText");

// SQUARE

console.group("Squares"); // Encapsulator | Start

const squareSide = 5;
console.log(`Each side of the square measures ${squareSide}.`);

const squarePerimeter = (side) => side * 4;
// console.log(`The perimeter measures ${squarePerimeter}.`);

const squareArea = (side) => side * side;
// console.log(`The area of the square measures ${squareArea}cm^2.`);

console.groupEnd(); // Encapsulator | End


// TRIANGLE

console.group("Triangles"); // Encapsulator | Start

// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const base = 4;

// console.log(`The sides of the triangle measure: ${triangleSide1}cm, ${triangleSide2}cm, ${base}cm.`);

// const triangleHeight = 5.5;
// console.log(`The height of the triangle measures ${triangleHeight}cm.`);

const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;
// console.log(`The perimeter of the triangle measures ${trianglePerimeter}cm.`);

const triangleArea = (base, height) => (base * height)/2;
// console.log(`The area of the triangle measures ${triangleArea}cm^2.`);

console.groupEnd(); // Encapsulator | End


// CIRCLE

console.group("Circles"); // Encapsulator | Start

// Radio

const circleRadio = 4;
// console.log(`The radio of the circle measures ${circleRadio}cm.`);

// Diameter

const circleDiameter = (radio)  => radio * 2;
// console.log(`The diameter of the circle measures ${circleDiameter}cm.`);

// console.log(`PI measures ${PI}cm.`);

// Circumference

const circlePerimeter = (radio) => diameter = circleDiameter(radio) * PI;
// console.log(`The circumference of the circle measures ${circleCircumference}cm.`);

// Area

const circleArea = (radio) => (radio ** 2) * PI; 
// console.log(`The area of the circle measures ${circleArea}cm.`);

console.groupEnd(); // Encapsulator | End


// HTML
// square
const calculateSquarePerimeter = () => {
    const value = squareInput.value;
    const overcome = squarePerimeter(value);
    squarePerimeterText.innerHTML =  `Perimeter: ${overcome}.`;
}

const calculateSquareArea = () => {
    const value = squareInput.value;
    const overcome = squareArea(value);
    squareAreaText.innerHTML = `Area: ${overcome}.`;
}

// triangle
const calculateTrianglePerimeter = () => {
    const sideA = Number(triangleSideA.value);
    const sideB = Number(triangleSideB.value);
    const base = Number(triangleBase.value);
    // const height = triangleHeight.value;
    const overcome = trianglePerimeter(sideA, sideB, base);
    trianglePerimeterText.innerHTML = `Perimeter: ${overcome}.`;
}

const calculateTriangleArea = () => {
    const base = triangleBase.value;
    const height = triangleHeight.value;
    const overcome = triangleArea(base, height);
    triangleAreaText.innerHTML = `Area: ${overcome}.`;
}

// circle
const calculateCirclePerimeter = () => {
    const value = circleInput.value;
    const overcome = circlePerimeter(value).toFixed(2);
    circlePerimeterText.innerHTML = `Perimeter: ${overcome}.`;
}

const calculateCircleArea = () => {
    const value = circleInput.value;
    const overcome = circleArea(value).toFixed(2);
    circleAreaText.innerHTML = `Area: ${overcome}.`;
}

const height = (sideA, sideB, base) => {
    if (sideA === sideB && sideA != base) {
        alert("Your triangle is isosceles!")
        const height = (Math.sqrt(sideB **2 ) - ((base/2) **2 ));
        console.log(height);
    }
    else {
        alert("Try it again, your triangle is not isosceles!")
    }
}