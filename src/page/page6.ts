import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page6 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    let ani = (await Utils.createDragonBone(
      "dragonbone/logo.sk"
    )) as Laya.Skeleton;
    this.wrap.addChildAt(ani, 0);
    ani.play("huangdong", true);
    ani.pos(this.wrap.width / 2, 300);
    PlayManager.showTxt("");
    Laya.SoundManager.playSound("sound/18.mp3");
    let btnRight = this.wrap.getChildByName("btnRight") as Laya.Box;
    btnRight.on(Laya.Event.CLICK, this, e => {
      console.log(PlayManager.currentPage);
      PlayManager.goNext();
    });
    await Utils.asyncByTime(6000);
    btnRight.visible = true;
  }
}
