import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page1 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    let leftHand = this.wrap.getChildByName('left-hand') as Laya.Image;
    let leftFinger = this.wrap.getChildByName('left-finger') as Laya.Image;
    let rightHand = this.wrap.getChildByName('right-hand') as Laya.Image;
    let rightFinger = this.wrap.getChildByName('right-finger') as Laya.Image;
    let screen = this.wrap.getChildByName('screen') as Laya.Image;
    let shakebox = this.wrap.getChildByName('shakebox') as Laya.Box;
    let handbone = shakebox.getChildByName('handbone') as Laya.Image;
    let bone = shakebox.getChildByName('bone') as Laya.Image;
    let guanjie = shakebox.getChildByName('guanjie') as Laya.Image;
    let guge = shakebox.getChildByName('guge') as Laya.Image;
    let yu = shakebox.getChildByName('yu') as Laya.Image;
    await Utils.asyncTween(screen, { rotation: -2 }, 50);
    await Utils.asyncTween(screen, { rotation: 0 }, 50);
    await Utils.asyncTween(screen, { rotation: 2 }, 50);
    await Utils.asyncTween(screen, { rotation: 0 }, 50);
    await Utils.asyncTween(screen, { rotation: -2 }, 50);
    await Utils.asyncTween(screen, { rotation: 0 }, 50);
    await Utils.asyncTween(screen, { rotation: 2 }, 50);
    await Utils.asyncTween(screen, { rotation: 0 }, 50);
    await Utils.asyncTween(screen, { rotation: -2 }, 50);
    await Utils.asyncTween(screen, { rotation: 0 }, 50);
    await Utils.asyncByTime(1000);
    handbone.visible= true;
    await Utils.asyncByTime(500);
    await Utils.asyncTween(handbone, { rotation: -70 }, 1000);
    await Utils.asyncTween(handbone, { rotation: 20 }, 1000);
    bone.visible = true;
    await Utils.asyncTween(handbone, { rotation: -70 }, 1000);
    handbone.visible = false;
    guge.visible = true;
    guanjie.visible = true;
    Laya.Tween.to(guge, { x: 414 }, 1000);
    Laya.Tween.to(guanjie, { x: 878 }, 1000);
    await Utils.asyncByTime(1000);
    Laya.Tween.to(guge, { x: 514, y: 238 }, 1000);
    Laya.Tween.to(guanjie, { x: 778, y: 274 }, 1000);
    await Utils.asyncByTime(2000);
    await Utils.asyncTween(shakebox, { rotation: -5 }, 100);
    await Utils.asyncTween(shakebox, { rotation: 5 }, 100);
    await Utils.asyncTween(shakebox, { rotation: -5 }, 100);
    await Utils.asyncTween(shakebox, { rotation: 5 }, 100);
    await Utils.asyncTween(shakebox, { rotation: -5 }, 100);
    await Utils.asyncTween(shakebox, { rotation: 5 }, 100);
    await Utils.asyncTween(shakebox, { rotation: 0 }, 100);
    await Utils.asyncByTime(500);
    Laya.Tween.to(guge, { scaleX: 1.8, scaleY: 1.8, x: 580 }, 1500);
    Laya.Tween.to(guanjie, { scaleX: 1.8, scaleY: 1.8, x: 726 }, 1500);
    Laya.Tween.to(bone, { scaleX: 0.5, scaleY: 0.5 }, 1500);
    await Utils.asyncByTime(1000);
    yu.visible = true;
    Laya.Tween.to(yu, { scaleX: 0.7, scaleY: 0.7 }, 500);
    await Utils.asyncByTime(1000);
    leftFinger.visible = false;
    leftHand.visible = false;
    rightFinger.visible = false;
    rightHand.visible = false;
    await Utils.asyncTween(screen, { scaleX: 3, scaleY: 3 }, 1000);
    await Utils.asyncByTime(2000);
    PlayManager.goNext();
    // let btnGo = this.wrap.getChildByName("btnGo") as Laya.Image;
    // let flagGo = false;
    // btnGo.on(Laya.Event.MOUSE_DOWN, this, e => {
    //   btnGo.skin = "img/img_eye1_down.png";
    // });
    // Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
    //   btnGo.skin = "img/img_eye1_up.png";
    // });
    // btnGo.on(Laya.Event.CLICK, this, async e => {
    //   if (flagGo) {
    //     return;
    //   }
    //   flagGo = true;
    //   Laya.SoundManager.playSound("sound/01.mp3");
    //   await Utils.asyncByTime(1600);
    //   PlayManager.goNext();
    // });
  }
}
