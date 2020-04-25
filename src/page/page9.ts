import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page9 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    PlayManager.showTxt("六岁左右");
    Utils.asyncByTime(1000).then(e => {
      PlayManager.showTxt("儿童的视力发展到趋于成人的水平");
    });
    Utils.asyncByTime(4900).then(e => {
      PlayManager.showTxt("单眼裸视可达到1.0");
    });
    Laya.SoundManager.playSound("sound/26.mp3");
    let monkey = this.wrap.getChildByName("monkey") as Laya.Image;
    let girl = this.wrap.getChildByName("girl") as Laya.Image;
    let arm = this.wrap.getChildByName("arm") as Laya.Image;
    let bubbleGirl = this.wrap.getChildByName("bubbleGirl") as Laya.Sprite;
    let bubbleMonkey = this.wrap.getChildByName("bubbleMonkey") as Laya.Sprite;
    await Utils.asyncByTime(500);
    // 抬手
    await Utils.asyncByTime(500);
    monkey.skin = "img/img_monkey1.png";
    await Utils.asyncByTime(200);
    monkey.skin = "img/img_monkey0.png";
    await Utils.asyncByTime(200);
    monkey.skin = "img/img_monkey1.png";
    await Utils.asyncByTime(200);
    monkey.skin = "img/img_monkey0.png";
    await Utils.asyncByTime(1500);
    Utils.asyncByTime(30);
    // 女孩举手
    await Utils.asyncTween(arm, { rotation: -54 }, 400);
    await Utils.asyncByTime(500);
    bubbleGirl.visible = true;
    await Utils.asyncByTime(2000);
    bubbleMonkey.visible = true;
    await Utils.asyncByTime(1700);
    PlayManager.goNext();
  }
}
