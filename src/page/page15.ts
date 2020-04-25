import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";
import Progress from "../components/Progress";

export default class Page15 extends PageBase {
  prgL1: Progress;
  prgL2: Progress;
  prgR1: Progress;
  prgR2: Progress;
  constructor() {
    super();
  }
  async onEnable() {
    this.initCalculate();
    let btnLeft = this.getChildByName("btnLeft") as Laya.Box;
    let btnRight = this.getChildByName("btnRight") as Laya.Box;
    btnLeft.on(Laya.Event.CLICK, this, e => {
      this.changeStep(1);
    });
    btnRight.on(Laya.Event.CLICK, this, e => {
      this.changeStep(this.step + 1);
    });
    // 绑定成绩单点击
    let leftTop = this.getChildByName("leftTop") as Laya.Sprite;
    let leftTopBg = leftTop.getChildByName("bg") as Laya.Image;
    let btnHelp = leftTop.getChildByName("btnHelp") as Laya.Image;
    let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
    btnHelp.on(Laya.Event.CLICK, this, async e => {
      if (this.step == 1) {
        return;
      }
      Laya.View.open(`pages/page14.scene`, false, { noHint: true });
    });
    bgInner.on(Laya.Event.CLICK, this, async e => {
      if (this.step == 1 || this.step == 5) {
        return;
      }
      this.toggleLeftTop();
    });
    leftTopBg.on(Laya.Event.CLICK, this, e => {
      if (this.step == 1) {
        return;
      }
      this.toggleLeftTop(true);
    });
    this.changeStep(1);
  }
  leftTopAnimating = false;
  async toggleLeftTop(flag?, withAni = true) {
    let leftTop = this.getChildByName("leftTop") as Laya.Image;
    let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
    if (this.leftTopAnimating) {
      return;
    }
    this.leftTopAnimating = true;
    if (flag == undefined) {
      flag = leftTop.scaleX != 1;
    }
    if (!flag) {
      // 已经放大的，缩小
      // 放大的情况下缩放回去
      await Utils.asyncTween(
        leftTop,
        {
          scaleX: this.leftTopScaleSm,
          scaleY: this.leftTopScaleSm,
          x: 220,
          y: 220
        },
        withAni ? 400 : 0
      );
      if (withAni) {
        bgInner.visible = false;
      }
    } else {
      // 放大居中
      if (withAni) {
        bgInner.visible = true;
      }
      await Utils.asyncTween(
        leftTop,
        {
          scaleX: 1,
          scaleY: 1,
          x: this.width / 2,
          y: this.height / 2
        },
        withAni ? 400 : 0
      );
    }
    this.leftTopAnimating = false;
  }
  resetData() {
    // 重置数据
    this.prgL1.setValue(0);
    this.prgR1.setValue(0);
    this.prgL2.setValue(0);
    this.prgR2.setValue(0);
    this.prgL1.disabled = this.prgL2.disabled = this.prgR1.disabled = this.prgR2.disabled = false;
  }
  step = 1;
  async lightToggle() {
    let calWrap = this.wrap.getChildByName("calculate") as Laya.Sprite;
    let light1 = calWrap.getChildByName("light1") as Laya.Image;
    let light2 = calWrap.getChildByName("light2") as Laya.Image;
    await Utils.asyncByTime(300);
    light1.skin = light2.skin = "img/img_last_light1.png";
    await Utils.asyncByTime(300);
    light1.skin = light2.skin = "img/img_last_light0.png";
    await Utils.asyncByTime(300);
    light1.skin = light2.skin = "img/img_last_light1.png";
    await Utils.asyncByTime(300);
    light1.skin = light2.skin = "img/img_last_light0.png";
    await Utils.asyncByTime(300);
    light1.skin = light2.skin = "img/img_last_light1.png";
  }
  /**
   * type
   * 1 初始状态
   * 2 机器内
   * 3 成功后到左边
   * withAni 是否有动画
   */
  async moveGlass(type, withAni) {
    let mapX = {
      1: 167,
      2: 1030,
      3: 1521
    };
    let glass = this.wrap.getChildByName("glass") as Laya.Image;
    let lunLeft = this.wrap.getChildByName("lunLeft") as Laya.Image;
    let lunRight = this.wrap.getChildByName("lunRight") as Laya.Image;
    lunLeft.rotation = 0;
    lunRight.rotation = 0;
    let dir = mapX[type] - glass.x > 0 ? 1 : -1;
    let time = (mapX[type] - glass.x) * 3.5;

    Laya.SoundManager.playSound("sound/trans.mp3");
    if (withAni) {
      Utils.asyncTween(lunLeft, { rotation: dir * 760 }, time);
      Utils.asyncTween(lunRight, { rotation: dir * 760 }, time);
    }
    await Utils.asyncTween(glass, { x: mapX[type] }, withAni ? time : 0);
    Laya.SoundManager.stopSound("sound/trans.mp3");
  }
  leftTopScaleSm = 0.34;
  /**
   *
   * @param step
   * 1 提示说明阶段
   * 2 说明完成 可以点击机器开关
   * 3 机器开关被点击 进入机器开机的动画，机器放大，完成后进入4
   * 4 玩家可以操作机器数值调整的界面，点击制作后进入5
   * 5 展示结果 成功或失败 失败后返回进入4
   */
  async changeStep(step) {
    let calWrap = this.wrap.getChildByName("calculate") as Laya.Sprite;
    let tui = calWrap.getChildByName("tui") as Laya.Image;
    let btnLeft = this.getChildByName("btnLeft") as Laya.Box;
    let btnRight = this.getChildByName("btnRight") as Laya.Box;
    let wrapWin = this.getChildByName("wrapWin") as Laya.Sprite;
    let hand = this.wrap.getChildByName("hand") as Laya.Image;
    let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
    hand.visible = false;
    wrapWin.visible = false;
    btnRight.visible = false;
    btnLeft.visible = false;
    bgInner.visible = false;
    let light1 = calWrap.getChildByName("light1") as Laya.Image;
    let light2 = calWrap.getChildByName("light2") as Laya.Image;
    let leftTop = this.getChildByName("leftTop") as Laya.Image;
    leftTop.scaleX = leftTop.scaleY = this.leftTopScaleSm;
    leftTop.pos(220, 220);
    bgInner.visible = false;
    if (step == 1) {
      this.step = 1;
      light1.skin = light2.skin = "img/img_last_light0.png";
      this.cameraIn(false, false);
      this.moveGlass(1, false);
      this.resetData();
      await this.doHint();
      btnLeft.visible = true;
      leftTop.zOrder = 10;
      return;
    } else if (step == 2) {
      light1.skin = light2.skin = "img/img_last_light0.png";
      btnLeft.visible = true;
      this.moveGlass(1, false);
      this.resetData();
      hand.visible = true;
      leftTop.zOrder = 10;
    } else if (step == 3) {
      // 眼镜推到机器里
      await this.moveGlass(2, true);
      // 机器闪烁
      await this.lightToggle();
      await this.cameraIn(true);
      this.step = step;
      this.changeStep(4);
      return;
    } else if (step == 4) {
      btnLeft.visible = true;
      this.resetData();
      this.prgL1.disabled = this.prgL2.disabled = this.prgR1.disabled = this.prgR2.disabled = true;
      leftTop.zOrder = 10;
    } else if (step == 5) {
      btnLeft.visible = false;
      // 检验答案是否正确
      let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
      bgInner.alpha = 0.8;
      bgInner.zOrder = 10;
      let btnAgain = wrapWin.getChildByName("btnAgain") as Laya.Image;
      let bg = wrapWin.getChildByName("bg") as Laya.Image;
      let btnBack = wrapWin.getChildByName("btnBack") as Laya.Image;
      let light = wrapWin.getChildByName("light") as Laya.Image;
      light.visible = false;
      Laya.Tween.clearAll(light);
      let flagTrue = this.resultTrue;
      // btnAgain.visible = flagTrue;
      let leftTop = this.getChildByName("leftTop") as Laya.Image;
      Laya.timer.clearAll(bg);
      if (!flagTrue) {
        let err = Laya.SoundManager.playSound("sound/err.mp3", 0);
        bg.skin = "img/img_error_up.png";
        btnBack.skin = `img/img_btnBack_blue.png`;
        Laya.timer.loop(600, bg, () => {
          let isDown = bg.skin == "img/img_error_down.png";
          bg.skin = `img/img_error_${isDown ? "up" : "down"}.png`;
        });
      } else {
        bg.skin = "img/img_win_bg.png";
        btnBack.visible = false;
        light.visible = true;
        let err = Laya.SoundManager.playSound("sound/make.mp3");
        Utils.toggleSkin(
          light,
          "img/img_win_glass3.png",
          "img/img_win_glass2.png",
          300,
          0
        );
        await this.lightToggle();
        await this.cameraIn(false);
        await this.moveGlass(3, true);
      }
      leftTop.zOrder = 0;
      leftTop.parent.setChildIndex(leftTop, 1);

      // 结算
      this.flagAnimatingWin = true;

      bgInner.visible = true;
      wrapWin.visible = true;
      if (flagTrue) {
        Laya.SoundManager.playSound("sound/success.mp3");
        Laya.SoundManager.playSound("sound/success1.mp3");
        await Utils.asyncByTime(4000);
        PlayManager.goNext();
      }
    }
    this.step = step;
  }
  async cameraIn(flag, withAni = true) {
    let leftTop = this.getChildByName("leftTop") as Laya.Image;
    if (flag) {
      leftTop.zOrder = 100;
      if (withAni) {
        Utils.asyncByTime(500).then(e => {
          Laya.SoundManager.playSound("sound/bigger.mp3");
        });
      }
      await Utils.asyncTween(
        this.wrap,
        { scaleX: 1.69, scaleY: 1.69, centerX: -200, centerY: -275 },
        withAni ? 800 : 0
      );
    } else {
      leftTop.zOrder = 0;
      await Utils.asyncTween(
        this.wrap,
        { scaleX: 1, scaleY: 1, centerX: 0, centerY: 0 },
        withAni ? 800 : 0
      );
    }
    console.log(leftTop.zOrder);
  }
  showWin() {
    let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
    let wrapWin = this.getChildByName("wrapWin") as Laya.Sprite;
    wrapWin.visible = true;
    bgInner.visible = true;
    bgInner.alpha = 0.8;
    bgInner.skin = "test/img_ffffff.png";
  }
  async doHint() {
    let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
    bgInner.visible = true;
    bgInner.alpha = 0.4;
    let calculate = this.wrap.getChildByName("calculate") as Laya.Sprite;
    PlayManager.showTxt("根据小T的视力检测单", "#000000");
    Laya.SoundManager.playSound("sound/34.mp3");
    let leftTop = this.getChildByName("leftTop") as Laya.Image;
    leftTop.zOrder = 100;
    await Utils.asyncTween(leftTop, { alpha: 0.4 }, 500);
    await Utils.asyncTween(leftTop, { alpha: 1 }, 500);
    await Utils.asyncTween(leftTop, { alpha: 0.4 }, 500);
    await Utils.asyncTween(leftTop, { alpha: 1 }, 500);
    await Utils.asyncByTime(500);
    leftTop.zOrder = 0;
    leftTop.parent.setChildIndex(leftTop, 1);
    console.log(leftTop.zOrder, "orrrr");
    // 计算器层级最高
    PlayManager.showTxt("调节机器的数值", "#000000");
    calculate.zOrder = 100;
    await Utils.asyncTween(calculate, { alpha: 0.4 }, 500);
    await Utils.asyncTween(calculate, { alpha: 1 }, 500);
    await Utils.asyncTween(calculate, { alpha: 0.4 }, 500);
    await Utils.asyncTween(calculate, { alpha: 1 }, 500);
    calculate.zOrder = 0;

    calculate.zOrder = 0;
    let glass = this.wrap.getChildByName("glass") as Laya.Image;
    await Utils.asyncByTime(800);
    PlayManager.showTxt("制作出合适小T佩戴的眼睛", "#000000");
    glass.zOrder = 9;
    glass.skin = "img/img_glass1.png";
    await Utils.asyncByTime(300);
    glass.skin = "img/img_glass0.png";
    await Utils.asyncByTime(300);
    glass.skin = "img/img_glass1.png";
    await Utils.asyncByTime(300);
    glass.skin = "img/img_glass0.png";
    await Utils.asyncByTime(500);
    glass.zOrder = 0;
    glass.parent.setChildIndex(glass, 1);
    // calHint.visible = false;
    PlayManager.showTxt("");
    // btnRight.visible = true;
    bgInner.visible = false;
    PlayManager.showTxt("");
    this.changeStep(2);
  }
  flagGlassMoved = false;
  flagAnimatingWin = false;
  ffUpdatePrg(value) {
    let wrapCal = this.wrap.getChildByName("calculate") as Laya.Sprite;
    let moveBar = wrapCal.getChildByName("moveBar") as Laya.Sprite;
    let min = 263;
    let max = 791;
    moveBar.y = min + ((max - min) * value) / 400;
    let txt = moveBar.getChildByName("num") as Laya.Label;
    txt.text = value + "";
  }
  get resultTrue() {
    let flagTrue = false;
    if (
      this.prgL1.value == -300 &&
      this.prgL2.value == 0 &&
      this.prgR1.value == 150 &&
      this.prgR2.value == 100
    ) {
      // 正确
      flagTrue = true;
    }
    return flagTrue;
  }
  async initCalculate() {
    let calWrap = this.wrap.getChildByName("calculate") as Laya.Sprite;
    let tui = calWrap.getChildByName("tui") as Laya.Image;
    tui.on(Laya.Event.CLICK, this, async e => {
      if (this.step != 2) {
        return;
      }
      Laya.SoundManager.playSound("sound/la.mp3");
      // 机器开始闪烁
      this.changeStep(3);
    });
    let wrapPrgL1 = calWrap.getChildByName("prgL1") as Laya.Box;
    this.prgL1 = wrapPrgL1.getComponent(Progress);
    let wrapPrgL2 = calWrap.getChildByName("prgL2") as Laya.Box;
    this.prgL2 = wrapPrgL2.getComponent(Progress);
    let wrapPrgR1 = calWrap.getChildByName("prgR1") as Laya.Box;
    this.prgR1 = wrapPrgR1.getComponent(Progress);
    let wrapPrgR2 = calWrap.getChildByName("prgR2") as Laya.Box;
    this.prgR2 = wrapPrgR2.getComponent(Progress);
    let btnSure = calWrap.getChildByName("btnSure") as Laya.Image;
    btnSure.on(Laya.Event.MOUSE_DOWN, this, e => {
      btnSure.skin = "img/img_btn_sure_down.png";
    });
    btnSure.on(Laya.Event.MOUSE_UP, this, e => {
      btnSure.skin = "img/img_btn_sure_up.png";
    });
    let wrapWin = this.getChildByName("wrapWin") as Laya.Sprite;
    let bgInner = this.wrap.getChildByName("bg") as Laya.Image;
    btnSure.on(Laya.Event.CLICK, this, e => {
      if (this.step != 4) {
        console.log(this.step);
        // 在眼镜拖到机器里之前不能点确定
        return;
      }
      this.changeStep(5);
    });
    let btnBack = wrapWin.getChildByName("btnBack") as Laya.Image;
    let btnAgain = wrapWin.getChildByName("btnAgain") as Laya.Image;
    btnBack.on(Laya.Event.CLICK, this, e => {
      console.log("backkkkk", this.resultTrue);
      Laya.SoundManager.stopSound("sound/err.mp3");
      if (!this.resultTrue) {
        this.changeStep(4);
      } else {
        this.changeStep(2);
      }
    });
    btnAgain.on(Laya.Event.CLICK, this, e => {
      PlayManager.restart();
    });
  }
  submit() {}
}
