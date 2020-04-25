import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page1 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    let btnBack = this.wrap.getChildByName("btnBack") as Laya.Image;
    btnBack.on(Laya.Event.CLICK, this, async e => {
      PlayManager.restart();
    });
    Laya.SoundManager.playSound("sound/final.mp3");
    await Utils.asyncByTime(4500);
    btnBack.visible = true;
  }
}
