class Manager extends Intern {
    constructor(sideA, sideB) {
      const area = sideA * sideB;
      const perimeter = sideA * 2 + sideB * 2;
  
      super(area, perimeter);
      this.sideA = sideA;
      this.sideB = sideB;
    }
  }