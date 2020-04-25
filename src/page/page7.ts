import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page7 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    // let ani2 = (await Utils.createDragonBone(
    //   "dragonbone/T.sk"
    // )) as Laya.Skeleton;
    // this.wrap.addChild(ani2);
    // ani2.pos(this.wrap.width/2,this.wrap.height/2);
    // ani2.play("bianse", false);
    // await Utils.asyncByTime(800);
    // ani2.play("bianxing", false);

    PlayManager.showTxt("人类的瞳孔是圆形的", "#000000");
    Laya.SoundManager.playSound("sound/19.mp3");
    await Utils.asyncByTime(3000);
    let sheep = this.wrap.getChildByName("sheep") as Laya.Sprite;
    sheep.visible = true;
    sheep.alpha = 0;
    sheep.scaleX = sheep.scaleY = 0;
    // 羊变大眼睛消失
    PlayManager.showTxt("当你仔细观察动物的瞳孔时会发现", "#000000");
    Laya.SoundManager.playSound("sound/20.mp3");
    let eye = this.wrap.getChildByName("eye") as Laya.Sprite;
    Utils.asyncTween(eye, { alpha: 0 }, 2000);
    await Utils.asyncTween(sheep, { scaleX: 1, scaleY: 1, alpha: 1 }, 2000);
    // 羊眼睛忽闪忽闪
    let sheepEye = sheep.getChildByName("eye") as Laya.Image;
    // 羊透明，眼睛变大
    await Utils.asyncByTime(2000);
    PlayManager.showTxt("羊的瞳孔是水平的横条状", "#000000");
    Laya.SoundManager.playSound("sound/21.mp3");
    await Utils.toggleSkin(
      sheepEye,
      "img/img_sheep_eye0.png",
      "img/img_sheep_eye1.png",
      300,
      4
    );
    let wrapSheepEye = this.wrap.getChildByName("eye2") as Laya.Sprite;
    wrapSheepEye.pos(1115, 552);
    wrapSheepEye.scale(0.086, 0.086);
    wrapSheepEye.rotation = -26;
    wrapSheepEye.visible = true;
    Utils.asyncTween(sheep, { alpha: 0 }, 1500);
    await Utils.asyncTween(
      wrapSheepEye,
      { rotation: 0, scaleX: 1, scaleY: 1, x: 961, y: 540 },
      1500
    );
    await Utils.asyncByTime(1000);
    // 显示猫
    PlayManager.showTxt("", "#000000");
    let wrapCat = this.wrap.getChildByName("cat") as Laya.Sprite;
    wrapCat.scale(0.5, 0.5);
    wrapCat.alpha = 0;
    wrapCat.visible = true;
    Utils.asyncTween(wrapSheepEye, { alpha: 0 }, 2000);
    await Utils.asyncTween(wrapCat, { scaleX: 1, scaleY: 1, alpha: 1 }, 2000);
    PlayManager.showTxt("而猫的瞳孔", "#000000");
    Laya.SoundManager.playSound("sound/22.mp3");
    // 猫眼睛忽闪忽闪
    let catEye = wrapCat.getChildByName("eye") as Laya.Image;
    await Utils.toggleSkin(
      catEye,
      "img/img_cat_eye0.png",
      "img/img_cat_eye1.png",
      300,
      4
    );
    await Utils.asyncByTime(500);
    let wrapCatEye = this.wrap.getChildByName("eye3") as Laya.Sprite;
    wrapCatEye.pos(1091, 560);
    wrapCatEye.scale(0.13, 0.13);
    wrapCatEye.visible = true;
    Utils.asyncTween(wrapCat, { alpha: 0 }, 1000);
    await Utils.asyncTween(
      wrapCatEye,
      { scaleX: 1, scaleY: 1, x: 961, y: 540 },
      1000
    );
    PlayManager.showTxt("在收缩时会变成垂直的竖条状", "#000000");
    let eyeCatInner = wrapCatEye.getChildByName("eye") as Laya.Image;
    await Utils.asyncTween(eyeCatInner, { scaleX: 0.2, scaleY: 1.3 }, 1000);
    await Utils.asyncByTime(1000);
    PlayManager.showTxt("");

    // 变成T的动画
    // 移上去
    let topM = wrapCatEye.getChildByName("bg") as Laya.Image;
    await Utils.asyncTween(topM, {
      x: 295,
      y: 43,
      scaleY: 0.15,
      scaleX: 1.23
    });
    Utils.asyncTween(eyeCatInner, {
      x: 294,
      y: 242,
      scaleY: 0.17,
      scaleX: 1.27
    });
    let ani = (await Utils.createDragonBone(
      "dragonbone/T.sk"
    )) as Laya.Skeleton;
    this.wrap.addChildAt(ani, 1);
    ani.pos(wrapCatEye.x, wrapCatEye.y);
    wrapCatEye.visible = false;
    ani.play("bianse", false);
    await Utils.asyncByTime(1000);
    ani.play("bianxing", false);

    await Utils.asyncByTime(1000);
    ani.visible = false;
    let wrapM = this.wrap.getChildByName("wrapM") as Laya.Sprite;
    wrapM.visible = true;
    // 左右两竖拉长变成M
    PlayManager.showTxt("视力", "#000000");
    Laya.SoundManager.playSound("sound/23.mp3");
    let right = wrapM.getChildByName("left") as Laya.Image;
    let left = wrapM.getChildByName("right") as Laya.Image;
    Utils.asyncTween(left, { height: 442 }, 1000);
    await Utils.asyncTween(right, { height: 442 }, 1000);
    PlayManager.showTxt("是一个人能够分辨影像的能力", "#000000");
    Utils.asyncByTime(3000).then(e => {
      PlayManager.showTxt("");
    });
    // 中间的M隐藏
    await Utils.asyncTween(wrapM, { scaleX: 0, scaleY: 0 }, 500);
    // 显示很多M，挨个显示
    let wrapListM = this.wrap.getChildByName("wrapListM") as Laya.Box;
    for (let i = 1; i < 13; i++) {
      let spM = wrapListM.getChildByName("M" + i) as Laya.Image;
      spM.alpha = 0;
      spM.scale(0, 0);
    }
    wrapListM.visible = true;
    for (let i = 1; i < 13; i++) {
      let spM = wrapListM.getChildByName("M" + i) as Laya.Image;
      Utils.asyncTween(spM, { scaleX: 1, scaleY: 1, alpha: 1 }, 800);
      let startY = spM.y;
      let ffMove = async () => {
        await Utils.asyncTween(spM, { y: startY + 20 }, 2000);
        await Utils.asyncTween(spM, { y: startY }, 2000);
        await ffMove();
      };
      ffMove();
      await Utils.asyncByTime(400);
    }

    PlayManager.showTxt("");
    PlayManager.goNext();
  }
}
