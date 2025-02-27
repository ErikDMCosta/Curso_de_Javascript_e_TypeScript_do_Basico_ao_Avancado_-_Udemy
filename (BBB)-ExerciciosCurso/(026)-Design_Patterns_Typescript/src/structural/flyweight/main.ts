import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'João', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'BH');
deliveryContext(factory, 'Eliana', '2', 'Rua A', 'SP');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'BH');
deliveryContext(factory, 'Jão', '2', 'Rua B', 'SP');

console.log();
console.log(factory.getLocations());
