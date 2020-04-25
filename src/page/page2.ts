import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page2 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    for (let index = 0; index < 5; index++) {
      let newton = this.wrap.getChildByName(`newton${index+1}`) as Laya.Sprite;
      newton.visible = true;
      await Utils.asyncByTime(500);
      if (index < 4) {
        newton.visible = false;
      }
    }
    let screen = this.wrap.getChildByName('tv') as Laya.Sprite;
    screen.visible = true;
    await Utils.asyncTween(screen, { y: 12 }, 1000);
    let xbox = this.wrap.getChildByName('xbox') as Laya.Box;
    // let maskarea = xbox_mask.getChildByName('maskarea') as Laya.Sprite;
    let newton7 = xbox.getChildByName('newton7') as Laya.Sprite;
    for (let indent = 0; indent < 800; indent+=20) {
      xbox.height = indent;
      await Utils.asyncByTime(200);
    }
    await Utils.asyncByTime(1000);
    newton7.visible = true;
    await Utils.asyncByTime(500);
    newton7.visible = false;
    await Utils.asyncByTime(500);
    newton7.visible = true;
    await Utils.asyncByTime(500);
    newton7.visible = false;
    await Utils.asyncByTime(500);
    newton7.visible = true;
    // let aniEye = (await Utils.createDragonBone(
    //   "dragonbone/eye.sk"
    // )) as Laya.Skeleton;
    // PlayManager.showTxt("我们为什么可以看到这个世界", "#000000");
    // Laya.SoundManager.playSound("sound/02.mp3");
    // let wrapEye = this.wrap.getChildByName("eye") as Laya.Sprite;
    // let eyeInner = wrapEye.getChildByName("inner") as Laya.Image;
    // wrapEye.visible = true;
    // wrapEye.alpha = 0;
    // eyeInner.visible = false;
    // await Utils.asyncByTime(2000);
    // Utils.asyncByTime(1000).then(async e => {
    //   Laya.SoundManager.playSound("sound/03.mp3");
    //   PlayManager.showTxt("人的视觉不能仅仅归功于眼睛", "#000000");
    //   await Utils.asyncByTime(3000);
    //   PlayManager.showTxt("但是", "#000000");
    //   await Utils.asyncByTime(1000);
    //   PlayManager.showTxt("眼睛是视觉产生所经历的第一扇窗户", "#000000");
    //   wrapEye.addChild(aniEye);
    //   aniEye.pos(wrapEye.width / 2, wrapEye.height / 2);
    //   aniEye.play("zhayan", false);
    //   eyeInner.visible = true;
    //   await Utils.asyncByTime(3000);
    //   PlayManager.showTxt("");
    // });
    // await Utils.asyncTween(wrapEye, { alpha: 1 }, 2000);
    await Utils.asyncByTime(2000);
    PlayManager.goNext();
  }
}
