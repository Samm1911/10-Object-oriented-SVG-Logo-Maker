// takes in the three classes Triangle, Circle and Square to test the shapes
const { Triangle, Circle, Square } = require("./shapes.js");

// tests the Triangle render function
test("Triangle render", () => {
  // shape, new Triangle get's created
  const shape = new Triangle();
  // tests if setColor will update the color value of shape
  shape.setColor("blue");
  // expects the render on the updated shape to equal the given updatedTemplate
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

// same test also for the circle
test("Circle render", () => {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="110" r="80" fill="red" />'
  );
});

// same test for the square function, but with Hex colors insted of color keywords
test("Square render", () => {
  const shape = new Square();
  shape.setColor("#FF0000");
  expect(shape.render()).toEqual(
    '<rect x="60" y="25" width="175" height="175" fill="#FF0000" />'
  );
});
