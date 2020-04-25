import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page8 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    let baby = this.wrap.getChildByName("baby") as Laya.Sprite;
    PlayManager.showTxt("新生儿的世界是一片模糊的", "#000000");
    Laya.SoundManager.playSound("sound/25.mp3");
    baby.rotation = -180;
    baby.y = 58;
    await Utils.asyncTween(
      baby,
      {
        y: 300
      },
      500
    );
    await Utils.asyncTween(
      baby,
      {
        y: 570,
        rotation: 0
      },
      1000
    );
    let babyBlur = this.wrap.getChildByName("babyBlur") as Laya.Image;
    Utils.asyncTween(baby, { alpha: 0 }, 1500);
    await Utils.asyncTween(babyBlur, { alpha: 1 }, 1500);
    await Utils.asyncByTime(500);
    PlayManager.goNext();
    PlayManager.showTxt("");
  }
}
