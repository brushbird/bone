import PageBase from "./PageBase";
import Utils from "../Utils";
import PlayManager from "../manager/PlayManager";

export default class Page13 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    PlayManager.showTxt("");
    let lineNormal = this.wrap.getChildByName("lineNormal") as Laya.Sprite;
    lineNormal.mask.width = 0;
    await Utils.asyncTween(lineNormal.mask, { width: 976 }, 4000);
    let res = this.wrap.getChildByName("res") as Laya.Image;
    res.visible = true;
    await Utils.asyncTween(res, { alpha: 0.6 }, 500);
    Utils.asyncTween(lineNormal, { alpha: 0 }, 500);

    await Utils.asyncByTime(1000);

    PlayManager.showTxt("近视形成的原因是");
    Laya.SoundManager.playSound("sound/30.mp3");
    let lineJin = this.wrap.getChildByName("lineJin") as Laya.Sprite;
    lineJin.visible = true;
    lineJin.mask.width = 0;
    Utils.asyncTween(lineJin.mask, { width: 911 }, 5000);
    await Utils.asyncByTime(1000);
    PlayManager.showTxt("进入眼球的光线成像在了视网膜的前端");
    await Utils.asyncByTime(4000);
    let resJin = this.wrap.getChildByName("resJin") as Laya.Image;
    resJin.visible = true;

    await Utils.asyncByTime(1000);
    await Utils.asyncTween(resJin, { alpha: 0 }, 500);
    Utils.asyncTween(lineJin, { alpha: 0 }, 500);

    Laya.SoundManager.playSound("sound/31.mp3");
    PlayManager.showTxt("远视则刚好相反");
    let lineYuan = this.wrap.getChildByName("lineYuan") as Laya.Sprite;
    lineYuan.visible = true;
    lineYuan.mask.width = 0;
    await Utils.asyncTween(lineYuan.mask, { width: 1042 }, 2800);
    let resYuan = this.wrap.getChildByName("resYuan") as Laya.Image;
    let resBg = this.wrap.getChildByName("resBg") as Laya.Image;
    resBg.visible = true;
    resYuan.visible = true;

    await Utils.asyncByTime(1000);
    Utils.asyncTween(resBg, { alpha: 0 }, 500);
    await Utils.asyncTween(resYuan, { alpha: 0 }, 500);
    Utils.asyncTween(lineYuan, { alpha: 0 }, 500);

    Laya.SoundManager.playSound("sound/32.mp3");
    PlayManager.showTxt("散光者眼中的世界则是叠影重重");
    // 晃两下叠影
    let dieying = this.wrap.getChildByName("dieying") as Laya.Sprite;
    dieying.visible = true;
    await Utils.asyncTween(dieying, { x: 362, y: 334 }, 950);
    await Utils.asyncTween(dieying, { x: 371, y: 343 }, 950);
    await Utils.asyncTween(dieying, { x: 359, y: 343 }, 950);
    await Utils.asyncTween(dieying, { x: 366, y: 336 }, 950);
    dieying.visible = false;

    PlayManager.showTxt(
      "这是因为进入眼球的光线会在视网膜汇聚成2个或以上的图像"
    );
    let lineSan = this.wrap.getChildByName("lineSan") as Laya.Sprite;
    lineSan.visible = true;
    lineSan.mask.width = 0;
    await Utils.asyncTween(lineSan.mask, { width: 976 }, 2800);
    let resSan1 = this.wrap.getChildByName("resSan1") as Laya.Image;
    resSan1.visible = true;
    let resSan2 = this.wrap.getChildByName("resSan2") as Laya.Image;
    resSan2.visible = true;
    await Utils.asyncByTime(3000);
    PlayManager.goNext();
  }
  async twikle() {}
}
