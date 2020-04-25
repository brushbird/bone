import Utils from "../Utils";
import EventManager from "../EventManager";

export default class ItemLastChooseItem extends Laya.Box {
  currentIdx = 0;
  constructor() {
    super();
  }
  onEnable() {
    let btnSound = this.getChildByName("btnSound") as Laya.Box;
    btnSound.on(Laya.Event.CLICK, this, e => {
      Laya.SoundManager.stopAllSound();
      Laya.SoundManager.playSound(this.dataSource.sound);
    });
    let btnCheck = this.getChildByName("btnCheck") as Laya.Box;
    btnCheck.on(Laya.Event.CLICK, this, async e => {
      if (!this.dataSource.disabled) {
        return;
      }
      this.dataSource.answered = true;
      let flagTrue = this.dataSource.idx == this.dataSource.answerTrue;
      EventManager.pub("last/answer", {
        idx: this.dataSource.idx,
        result: flagTrue
      });
    });
  }
}
