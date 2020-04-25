import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page11 extends PageBase {
  constructor() {
    super();
  }
  async imgLoaded(img) {
    PlayManager.gifImg.className = "loaded";
    PlayManager.showTxt("在视力发育的阶段");
    Utils.asyncByTime(1800).then(async e => {
      PlayManager.showTxt("要特别注意保护眼睛");
      await Utils.asyncByTime(3000);
      PlayManager.showTxt("避免有损视力的活动");
    });
    Laya.SoundManager.playSound("sound/28.mp3");
    document.body.appendChild(img);
    await Utils.asyncByTime(3000);
    img.style.display = "none";
    // 遥控板出现
    let ctr = this.wrap.getChildByName("ctr") as Laya.Sprite;
    ctr.visible = true;
    ctr.y = 1090 + this.wrap.y;
    await Utils.asyncTween(
      ctr,
      {
        y: 676 + this.wrap.y
      },
      500
    );
    let button = ctr.getChildByName("button") as Laya.Image;
    await Utils.asyncByTime(400);
    button.visible = true;
    await Utils.asyncByTime(400);
    button.visible = false;
    await Utils.asyncByTime(400);
    button.visible = true;
    await Utils.asyncByTime(400);
    button.visible = false;
    // 手出现，关机
    let hand = this.wrap.getChildByName("hand") as Laya.Image;
    hand.y = hand.y + this.wrap.y;
    hand.visible = true;
    await Utils.asyncByTime(500);
    let screen = this.wrap.getChildByName("screen") as Laya.Image;

    screen.skin = "test/img_000000.png";
    await Utils.asyncByTime(1000);
    PlayManager.goNext();
  }
  async onEnable() {
    PlayManager.showTxt("");
    // 生成gif图片标签
    let ratio =
      Laya.Browser.clientWidth / Laya.stage.width >
      Laya.Browser.clientHeight / Laya.stage.height
        ? Laya.Browser.clientWidth / Laya.stage.width
        : Laya.Browser.clientHeight / Laya.stage.height;
    let flagRotate = Laya.Browser.clientWidth < Laya.Browser.clientHeight;
    let img = PlayManager.gifImg;
    img.style.position = "absolute";
    let screen = this.wrap.getChildByName("screen") as Laya.Image;
    if (img.className == "loaded") {
      this.imgLoaded(img);
    } else {
      PlayManager.showLoading();
      let flagTimeOut = false;
      Laya.timer.once(3000, this, e => {
        flagTimeOut = true;
        this.imgLoaded(img);
      });
      img.onload = async () => {
        PlayManager.closeLoading();
        if (!flagTimeOut) {
          this.imgLoaded(img);
        }
      };
    }
    if (flagRotate) {
      // 26 230
      ratio =
        Laya.Browser.clientHeight / Laya.stage.width >
        Laya.Browser.clientWidth / Laya.stage.height
          ? Laya.Browser.clientHeight / Laya.stage.width
          : Laya.Browser.clientWidth / Laya.stage.height;
      // img.style.transformOrigin = "50% 50%";
      // img.style.transform = "rotate(90deg)";
      img.style.left =
        (this.wrap.y + this.wrap.height - screen.y - screen.height / 2) *
          ratio +
        "px";
      img.style.top =
        (this.wrap.x + screen.x - screen.width / 2) * ratio + "px";
      img.style.width = screen.height * ratio + "px";
    } else {
      img.style.left =
        (screen.x + this.wrap.x - screen.width / 2) * ratio + "px";
      img.style.top =
        (screen.y + this.wrap.y - screen.height / 2) * ratio + "px";
      img.style.width = screen.width * ratio + "px";
    }
  }
}
