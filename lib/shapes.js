// parent class for the shapes
class Shapes {
  // template as a constructor argument
  constructor(template) {
    this.template = template;
  }
  // returns the given tamplate, when the render function is called
  render() {
    return this.template;
  }
}

// Triangle derived from the shapes class
class Triangle extends Shapes {
  // takes in the scolor as an argument for the constructor
  constructor(scolor) {
    // the template for the given shape, with the scolor as a template literal, so that the user can choose the shape color
    const triangleTemplate = `<polygon points="150, 18 244, 182 56, 182" fill="${scolor}" />`;
    // inherited from the shapes class is the template, which can be used with the render function
    super(triangleTemplate);
    // scolor is this.color here
    this.color = scolor;
  }

  // the sColor function takes this.color with an updated color value
  setColor(color) {
    this.color = color;
    // the updated template variable replaces the scolor, searches for the fill attribute within the SVG file with the regular expression /fill=".*?"/  and updates it with the new color parameter
    const updatedTemplate = this.template.replace(
      /fill=".*?"/,
      `fill="${color}"`
    );
    // this.template get's updated with the updatedTemplate variable
    this.template = updatedTemplate;
  }
}

// same as Triangle
class Circle extends Shapes {
  constructor(scolor) {
    const circleTemplate = `<circle cx="150" cy="110" r="80" fill="${scolor}" />`;
    super(circleTemplate);
  }

  setColor(color) {
    this.color = color;
    const updatedTemplate = this.template.replace(
      /fill=".*?"/,
      `fill="${color}"`
    );
    this.template = updatedTemplate;
  }
}

// same as Triangle
class Square extends Shapes {
  constructor(scolor) {
    const squareTemplate = `<rect x="60" y="25" width="175" height="175" fill="${scolor}" />`;
    super(squareTemplate);
  }

  setColor(color) {
    this.color = color;
    const updatedTemplate = this.template.replace(
      /fill=".*?"/,
      `fill="${color}"`
    );
    this.template = updatedTemplate;
  }
}

// exports all three classes: Triangle, Circle, and Square
module.exports = { Triangle, Circle, Square };