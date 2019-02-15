export abstract class Shape {
  public abstract resize(howMuch: number): void;
}

export class Triangle extends Shape {
  private height = 10;

  resize(howMuch: number): void {
    this.height = this.height * howMuch;
  }
}

export class Rectangle extends Shape {
  private width = 5;
  private height = 4;

  resize(howMuch: number): void {
    this.width = this.width * howMuch;
    this.height = this.height * howMuch;
  }
}

export class Square extends Shape {
  private size = 3;

  resize(howMuch: number): void {
    this.size = this.size * howMuch;
  }
}

export class Test {

  test() {
    const poleShapeov: Shape[] = [
      new Triangle(),
      new Rectangle(),
      new Square()
    ];

    for (const shape of poleShapeov) {
      shape.resize(7);
    }
  }
}
