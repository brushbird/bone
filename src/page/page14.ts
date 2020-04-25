import PageBase from "./PageBase";
import Utils from "../Utils";
import PlayManager from "../manager/PlayManager";
import Bar from "../components/Bar";

export default class Page14 extends PageBase {
  step = 1;
  canHideHint = false;
  flagWithHint = true;
  constructor() {
    super();
  }
  async onOpened(data: any = {}) {
    if (!data) {
      data = {};
    }
    this.flagWithHint = !data.noHint;
    let btnLeft = this.wrap.getChildByName("btnLeft") as Laya.Box;
    let btnRight = this.wrap.getChildByName("btnRight") as Laya.Box;
    btnLeft.on(Laya.Event.CLICK, this, e => {
      this.changeStep(1);
    });
    btnRight.on(Laya.Event.CLICK, this, e => {
      if (this.flagWithHint) {
        PlayManager.goNext();
      } else {
        this.close();
      }
    });

    let spJin = this.wrap.getChildByName("spJin") as Bar;
    let spYuan = this.wrap.getChildByName("spYuan") as Bar;
    let spSan = this.wrap.getChildByName("spSan") as Bar;
    let wrapCenter1 = this.wrap.getChildByName("wrapCenter1") as Laya.Box;
    let wrapCenter2 = this.wrap.getChildByName("wrapCenter2") as Laya.Box;
    let wrapCenter3 = this.wrap.getChildByName("wrapCenter3") as Laya.Box;

    let hint = this.wrap.getChildByName("hint") as Laya.Box;
    spJin.on(Laya.Event.MOUSE_DOWN, this, e => {
      if (spJin.disabled) {
        hint.visible = false;
      }
    });
    spYuan.on(Laya.Event.CLICK, this, e => {
      if (this.canHideHint) {
        hint.visible = false;
      }
    });
    spSan.on(Laya.Event.CLICK, this, e => {
      if (this.canHideHint) {
        hint.visible = false;
      }
    });
    spSan.type = 3;
    spYuan.type = 2;
    if (this.flagWithHint) {
      spJin.disabled = spYuan.disabled = spSan.disabled = false;
      spJin.visible = spYuan.visible = spSan.visible = false;
      wrapCenter1.visible = wrapCenter2.visible = wrapCenter3.visible = true;
      let shapeJin = this.wrap.getChildByName("shapeJin") as Laya.Sprite;
      shapeJin.visible = false;
      let shapeYuan = this.wrap.getChildByName("shapeYuan") as Laya.Sprite;
      shapeYuan.visible = false;
      let shapeSan = this.wrap.getChildByName("shapeSan") as Laya.Sprite;
      shapeSan.visible = false;
      PlayManager.showTxt("仔细观察窗外的景象", "#000000");
      Utils.asyncByTime(2300).then(async e => {
        PlayManager.showTxt("对比不同的视力问题下", "#000000");
        await Utils.asyncByTime(2000);
        PlayManager.showTxt("近处的猫咪和远处的风景", "#000000");
        await Utils.asyncByTime(2500);
        PlayManager.showTxt("有什么不同呢？", "#000000");
        await Utils.asyncByTime(2500);
        PlayManager.showTxt("");
      });
      Laya.SoundManager.playSound("sound/g3.mp3");
      let centerYuan = wrapCenter1.getChildByName("yuan") as Laya.Image;
      let centerJin = wrapCenter1.getChildByName("jin") as Laya.Image;
      await Utils.asyncByTime(4300);
      await Utils.asyncTween(centerJin, { alpha: 0 }, 300);
      await Utils.asyncTween(centerJin, { alpha: 1 }, 300);
      await Utils.asyncTween(centerJin, { alpha: 0 }, 300);
      await Utils.asyncTween(centerJin, { alpha: 1 }, 300);
      await Utils.asyncByTime(300);
      await Utils.asyncTween(centerYuan, { alpha: 0 }, 300);
      await Utils.asyncTween(centerYuan, { alpha: 1 }, 300);
      await Utils.asyncTween(centerYuan, { alpha: 0 }, 300);
      await Utils.asyncTween(centerYuan, { alpha: 1 }, 300);
      await Utils.asyncByTime(2000);
      // 移动到三个圆的位置
      await Utils.asyncTween(wrapCenter1, { scaleX: 0.53, scaleY: 0.53 }, 500);
      Utils.asyncTween(wrapCenter1, { x: 482 }, 600);
      await Utils.asyncTween(wrapCenter3, { x: 1453 }, 600);
      await Utils.asyncByTime(500);

      spJin.visible = true;
      spJin.scale(378 / 375, 378 / 375);
      spJin.alpha = 0;
      await Utils.asyncTween(wrapCenter1, { y: 345 }, 500);
      shapeJin.visible = true;
      await Utils.asyncTween(spJin, { alpha: 1 }, 500);
      wrapCenter1.visible = false;
      Laya.SoundManager.playSound("sound/js.mp3");

      await Utils.asyncByTime(500);
      spYuan.visible = true;
      spYuan.alpha = 0;
      await Utils.asyncTween(wrapCenter2, { y: 345 }, 500);
      shapeYuan.visible = true;
      await Utils.asyncTween(spYuan, { alpha: 1 }, 500);
      wrapCenter2.visible = false;
      Laya.SoundManager.playSound("sound/ys.mp3");

      await Utils.asyncByTime(500);

      spSan.visible = true;
      spSan.alpha = 0;
      await Utils.asyncTween(wrapCenter3, { y: 345 }, 500);
      shapeSan.visible = true;
      await Utils.asyncTween(spSan, { alpha: 1 }, 500);
      wrapCenter3.visible = false;
      Laya.SoundManager.playSound("sound/sg.mp3");

      await Utils.asyncByTime(1001);
    }

    this.changeStep(1);
  }
  async changeStep(step) {
    let spJin = this.wrap.getChildByName("spJin") as Bar;
    let spYuan = this.wrap.getChildByName("spYuan") as Bar;
    let spSan = this.wrap.getChildByName("spSan") as Bar;
    this.step = step;
    let btnLeft = this.wrap.getChildByName("btnLeft") as Laya.Box;
    btnLeft.visible = this.step != 1;
    let hint = this.wrap.getChildByName("hint") as Laya.Box;
    let hand = hint.getChildByName("hand") as Laya.Image;
    hint.visible = this.flagWithHint && this.step == 1;
    if (step == 1) {
      this.canHideHint = false;
      let ffMove = async () => {
        await Utils.asyncTween(hand, { rotation: -33 }, 1000);
        await Utils.asyncTween(hand, { rotation: 0 }, 1000);
        await ffMove();
      };
      Laya.Tween.clearAll(hand);
      ffMove();
      // PlayManager.showTxt("尝试改变眼睛的度数", "#000000");
      // Utils.asyncByTime(1800).then(e => {
      //   PlayManager.showTxt("感受近视、远视和散光者眼中的世界", "#000000");
      // });
      // Laya.SoundManager.playSound("sound/33.mp3");
      // await Utils.asyncByTime(6000);
      spJin.disabled = spYuan.disabled = spSan.disabled = true;
      let btnRight = this.wrap.getChildByName("btnRight") as Laya.Box;
      btnRight.visible = true;
      PlayManager.showTxt("");
    } else {
      PlayManager.showTxt("");
    }
    if (step > 2) {
      PlayManager.goNext();
    }
  }
}
