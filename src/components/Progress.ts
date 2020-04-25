export default class Progress extends Laya.Script {
  owner: Laya.Sprite;
  /** @prop {name:min, tips:"最小值", type:Number, default:0}*/
  public min: number = 0;
  /** @prop {name:max, tips:"最大值", type:Number, default:0}*/
  public max: number = 0;
  set disabled(flag) {
    let point = this.owner.getChildByName("point") as Laya.Box;
    let bubble = point.getChildByName("bubble") as Laya.Image;
    let num = point.getChildByName("num") as Laya.Label;
    num.visible = bubble.visible = flag;
    this._disabled = flag;
  }
  get disabled() {
    return this._disabled;
  }
  _disabled = false;
  _value = 0;
  get value() {
    return this._value;
  }
  setValue(val) {
    if (val < this.min) {
      val = this.min;
    }
    if (val > this.max) {
      val = this.max;
    }
    let point = this.owner.getChildByName("point") as Laya.Image;
    point.x = (this.owner.width * (val - this.min)) / (this.max - this.min);
    let num = point.getChildByName("num") as Laya.Label;
    num.text = val > 0 ? "+" + val : "" + val;
    this._value = val;
  }
  set value(val) {
    if (!this.disabled) {
      return;
    }
    this.setValue(val);
  }
  constructor() {
    super();
  }

  onEnable(): void {
    let flagDown = false;
    let point = this.owner.getChildByName("point") as Laya.Image;
    point.on(Laya.Event.MOUSE_DOWN, this, e => {
      flagDown = true;
    });
    Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
      flagDown = false;
    });
    this.owner.parent.on(Laya.Event.MOUSE_MOVE, this, e => {
      if (flagDown) {
        let pos = new Laya.Point(e.stageX, e.stageY);
        this.owner.globalToLocal(pos);
        let val1 =
          this.min + ((this.max - this.min) * pos.x) / this.owner.width;
        // 以50为一个刻度
        let count = Math.round(val1 / 50);
        this.value = count * 50;
      }
    });
  }
  onDisable(): void {}
}
