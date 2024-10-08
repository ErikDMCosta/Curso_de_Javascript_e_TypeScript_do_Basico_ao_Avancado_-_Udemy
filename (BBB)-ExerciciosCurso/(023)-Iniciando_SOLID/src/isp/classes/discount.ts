export abstract class Discount {
  // constructor(public discount: number) {}
  protected discount = 0;

  calculate(price: number): unknown {
    // return price - price * (this.discount * 100);
    // throw new Error('Not Implemented Error');
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;

  // calculate(price: number): unknown {
  //   return '';
  // }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;

  // calculate(price: number): boolean {
  //   return !!'';
  // }
}

// export class NoDiscount extends Discount {
//   //   calculate(price: number): string {
//   //   return [];
//   // }
//   calculate(price: number): number {
//     return price;
//   }
// }

export class NoDiscount extends Discount {}
