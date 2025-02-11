import { TShirt } from './product/t-shirt';
import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { ProductCustomDecorator } from './product/product-custom-decorator';

const tShirt = new TShirt();
const decoratedTShirt = new ProductDecorator(tShirt);
const stampTShirt = new ProductStampDecorator(decoratedTShirt);
const stampTShirtFrontAndBack = new ProductStampDecorator(stampTShirt);
const customTShirt = new ProductCustomDecorator(tShirt);

console.log(tShirt.getName(), tShirt.getPrice());
console.log(decoratedTShirt.getName(), decoratedTShirt.getPrice());
console.log(stampTShirt.getName(), stampTShirt.getPrice());
console.log(
  stampTShirtFrontAndBack.getName(),
  stampTShirtFrontAndBack.getPrice(),
);
console.log(customTShirt.getName(), customTShirt.getPrice());
