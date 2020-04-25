import Utils from "../Utils";

export default class Bar extends Laya.Sprite {
  waitFunc: Function;
  type = 1;
  disabled = false;
  cutCount = 20;
  constructor() {
    super();
  }
  onEnable() {
    let point = this.getChildByName("point") as Laya.Image;
    let flagDown = false;
    point.on(Laya.Event.MOUSE_DOWN, this, e => {
      flagDown = true;
    });
    Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
      flagDown = false;
    });
    this.on(Laya.Event.MOUSE_MOVE, this, e => {
      if (!this.disabled) {
        return;
      }
      let pos = new Laya.Point(e.stageX, e.stageY);
      this.globalToLocal(pos);
      if (!Laya.Browser.onPC || (Laya.Browser.onPC && flagDown)) {
        let min = 460;
        let max = 804;
        if (pos.y < max && pos.y > min) {
          let percent = (pos.y - min) / (max - min);
          let count = Math.round(percent * (this.cutCount - 1));
          percent = count / (this.cutCount - 1);
          point.y = pos.y;
          if (this.waitFunc) {
            Laya.timer.clear(this, this.waitFunc);
          }
          this.changeView(percent);
        }
      }
    });
  }
  count = 1;
  changeView(percent) {
    let count = Math.round(percent * (this.cutCount - 1));
    console.log(count);
    if (this.count == count) {
      return;
    }
    this.count = count;
    let circle = this.getChildByName("circle") as Laya.Sprite;
    if (this.type == 1) {
      // 近视
      let img = circle.getChildByName("img") as Laya.Image;
      img.skin = `img/jinshi/img_jinshi${count + 1}.png`;
    } else if (this.type == 2) {
      // 远视
      let img = circle.getChildByName("img") as Laya.Image;
      img.skin = `img/yuanshi/img_yuanshi${count + 1}.png`;
    } else if (this.type == 3) {
      // 散光
      let jin = circle.getChildByName("jin") as Laya.Sprite;
      let jin1 = circle.getChildByName("jin1") as Laya.Sprite;
      let yuan = circle.getChildByName("yuan") as Laya.Sprite;
      let yuan1 = circle.getChildByName("yuan1") as Laya.Sprite;
      jin1.alpha = percent * 0.8;
      jin.alpha = 1;
      yuan1.alpha = percent * 0.8;
      yuan.alpha = 1;
    }
  }
}
