import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  // abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 10
  abstraction.volumeUp(); // 20
}

const tv = new Tv();
const radio = new Radio();
// const radioRemoteControl = new RemoteControlWithVolume(radio);
const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

// const tvRemoteControl = new RemoteControl(tv);
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
