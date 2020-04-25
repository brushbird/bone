export default class PageBase extends Laya.View {
  wrap: Laya.Box;
  constructor() {
    super();
    this.once(Laya.Event.ENTER, this, e => {
      this.onDisplay();
    });
    this.wrap = this.getChildByName("wrap") as Laya.Box;
  }
  onDisplay() {
    this.wrap = this.getChildByName("wrap") as Laya.Box;
    let bgIn = this.wrap.getChildByName("bg") as Laya.Image;
    if (bgIn) {
      bgIn.left = -(Laya.stage.width - this.wrap.width) / 2;
      bgIn.right = -(Laya.stage.width - this.wrap.width) / 2;
    }
  }
}
