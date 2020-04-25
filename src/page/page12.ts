import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page12 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    PlayManager.showTxt("当眼睛受损失时 ", "#000000");
    Utils.asyncByTime(1500).then(async e => {
      PlayManager.showTxt("会引发不同的视力问题", "#000000");
      await Utils.asyncByTime(4100 - 1500);
      PlayManager.showTxt("如：远视、近视和散光", "#000000");
      await Utils.asyncByTime(3500);
      PlayManager.showTxt("");
    });
    Laya.SoundManager.playSound("sound/29.mp3");
    this.twikle();
    await Utils.asyncByTime(9000);
    PlayManager.goNext();
  }
  async twikle() {
    let border = this.wrap.getChildByName("border") as Laya.Image;
    border.visible = !border.visible;
    await Utils.asyncByTime(600);
    this.twikle();
  }
}
