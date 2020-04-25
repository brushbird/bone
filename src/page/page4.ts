import PageBase from "./PageBase";
import Utils from "../Utils";
import PlayManager from "../manager/PlayManager";

export default class Page4 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    this.wrap = this.getChildByName('wrap') as Laya.Box;
    let box1Wrap = this.wrap.getChildByName('box41') as Laya.Box;
    let box2Wrap = this.wrap.getChildByName('box42') as Laya.Box;
    let point = box1Wrap.getChildByName('point') as Laya.Sprite;
    await Utils.asyncByTime(500);
    point.visible = false;
    await Utils.asyncByTime(500);
    point.visible = true;
    await Utils.asyncByTime(500);
    point.visible = false;
    await Utils.asyncByTime(500);
    point.visible = true;
    await Utils.asyncByTime(500);
    box1Wrap.visible = false;
    await Utils.asyncByTime(500);
    box2Wrap.visible = true;
    await Utils.asyncByTime(500);
    let newton1 = box2Wrap.getChildByName('banshen') as Laya.Sprite;
    let newton2 = box2Wrap.getChildByName('kulou') as Laya.Sprite;
    let qipao = box2Wrap.getChildByName('qipao') as Laya.Sprite;
    let tou = box2Wrap.getChildByName('tou') as Laya.Sprite;
    let yb = box2Wrap.getChildByName('yellow') as Laya.Sprite;
    let pb = box2Wrap.getChildByName('pink') as Laya.Sprite;
    newton1.visible = false;
    newton2.visible = true;
    await Utils.asyncByTime(500);
    newton1.visible = true;
    newton2.visible = false;
    await Utils.asyncByTime(500);
    newton1.visible = false;
    newton2.visible = true;
    await Utils.asyncByTime(500);
    newton1.visible = true;
    newton2.visible = false;
    await Utils.asyncByTime(500);
    await Utils.asyncTween(newton1, { x: 40 }, 1000);
    qipao.visible = true;
    await Utils.asyncByTime(200);
    tou.visible = true;
    await Utils.asyncByTime(200);
    pb.visible = true;
    await Utils.asyncByTime(200);
    yb.visible = true;
    await Utils.asyncByTime(500);
    yb.visible = false;
    await Utils.asyncByTime(200);
    yb.visible = true;
    await Utils.asyncByTime(500);
    yb.visible = false;
    await Utils.asyncByTime(1000);
    PlayManager.goNext();
  }
}
