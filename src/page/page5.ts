import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page5 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    PlayManager.showTxt("瞳孔可以调节进入眼球的光线量", "#000000");
    Laya.SoundManager.playSound("sound/15.mp3");
    let inner = this.wrap.getChildByName("inner") as Laya.Image;
    await Utils.toggleSkin(
      inner,
      "img/img_circle2.png",
      "img/img_circle3.png",
      300,
      4
    );
    // 显示月亮 背景变黑 瞳孔放大
    await Utils.asyncByTime(2500);
    Laya.SoundManager.playSound("sound/16.mp3");
    PlayManager.showTxt("当光线较弱时");
    Utils.asyncByTime(2000).then(e => {
      PlayManager.showTxt("瞳孔会放大");
    });
    let moon = this.wrap.getChildByName("moon") as Laya.Image;
    let sun = this.wrap.getChildByName("sun") as Laya.Image;
    let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
    moon.visible = true;
    bgInner.visible = true;
    await Utils.asyncByTime(1700);
    await Utils.asyncTween(inner, { scaleX: 0.7, scaleY: 0.7 }, 1000);
    // 显示太阳 隐藏月亮 背景变亮 瞳孔缩小
    await Utils.asyncByTime(1000);
    moon.visible = false;
    sun.visible = true;
    bgInner.alpha = 0;
    Laya.SoundManager.playSound("sound/17.mp3");
    PlayManager.showTxt("当光线较强时", "#000000");
    Utils.asyncByTime(1800).then(e => {
      PlayManager.showTxt("瞳孔会缩小", "#000000");
    });
    await Utils.asyncByTime(700);
    await Utils.asyncByTime(1000);
    await Utils.asyncTween(inner, { scaleX: 0.2, scaleY: 0.2 }, 1000);
    await Utils.asyncByTime(1000);
    PlayManager.goNext();
  }
}
