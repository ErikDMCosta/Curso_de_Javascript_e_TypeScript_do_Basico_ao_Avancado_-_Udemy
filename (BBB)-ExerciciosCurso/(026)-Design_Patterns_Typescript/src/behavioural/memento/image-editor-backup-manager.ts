import { Memento } from './memento';
import { ImageEditor } from './image-editor';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    // const memento = this.imageEditor.save();
    console.log('Backup saved in state ImageEditor');
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log('Backup failed');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup ${memento.getName()} successful`);
  }

  showMementos(): void {
    console.log('Mementos: ');
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }

    // this.mementos.forEach((memento, index) => {
    //   console.log(`${index + 1}. ${memento.getName()}`);
    // });
  }
}
