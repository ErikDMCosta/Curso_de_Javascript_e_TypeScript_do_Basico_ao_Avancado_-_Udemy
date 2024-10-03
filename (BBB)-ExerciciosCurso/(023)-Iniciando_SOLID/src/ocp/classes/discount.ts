export abstract class Discount {
  // constructor(public discount: number) {}
  protected discount = 0;
  calculate(price: number): number {
    // return price - price * (this.discount * 100);
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;

  // calculate(price: number): number {
  //   // return price - price * (this.discount * 100);
  //   return price - price * this.discount;
  // }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;

  // calculate(price: number): number {
  //   return price - price * this.discount;
  // }
}

// export class NoDiscount extends Discount {
//   calculate(price: number): number {
//     return price;
//   }
// }

export class NoDiscount extends Discount {}
