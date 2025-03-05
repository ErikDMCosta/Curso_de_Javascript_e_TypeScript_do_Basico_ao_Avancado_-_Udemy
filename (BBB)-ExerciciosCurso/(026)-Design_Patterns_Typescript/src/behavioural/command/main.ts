import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const beddroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const beddroomlightPowerCommand = new LightPowerCommand(beddroomLight);
const bathroomlightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(beddroomLight);

// lightPowerCommand.execute();
// lightPowerCommand.undo();

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', beddroomlightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomlightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-3');
}
