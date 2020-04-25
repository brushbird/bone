import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";
import EventManager from "../EventManager";

export default class Page16 extends PageBase {
  currentQuesIdx = 1;
  configAnswer: any = {};
  constructor() {
    super();
  }
  onDisable() {
    Laya.SoundManager.stopAllSound();
    Laya.timer.clearAll(Utils);
    Laya.timer.clearAll(this);
    EventManager.unSub(this);
  }
  resetData() {
    let wrapQues = this.wrap.getChildByName("wrapQues") as Laya.Box;
    let listQues = wrapQues.getChildByName("list") as Laya.List;
    listQues["_cells"].forEach((cell, idx2) => {
      let imgTrue = cell.getChildByName("imgTrue") as Laya.Image;
      let imgWrong = cell.getChildByName("imgWrong") as Laya.Image;
      imgTrue.visible = false;
      imgWrong.visible = false;
    });
    Laya.SoundManager.stopAllSound();
    Laya.timer.clearAll(Utils);
    Laya.timer.clearAll(this);
    this.configAnswer = {
      1: [
        {
          pic: { skin: "last/img_pic1_1.png" },
          sound: "sound/last/02.mp3",
          idx: 1,
          answerTrue: 1,
          disabled: false,
          answered: false
        },
        {
          pic: { skin: "last/img_pic1_2.png" },
          sound: "sound/last/03.mp3",
          idx: 2,
          answerTrue: 1,
          disabled: false,
          answered: false
        },
        {
          pic: { skin: "last/img_pic1_3.png" },
          sound: "sound/last/04.mp3",
          idx: 3,
          answerTrue: 1,
          disabled: false,
          answered: false
        },
        {
          pic: { skin: "last/img_pic1_4.png" },
          sound: "sound/last/05.mp3",
          idx: 4,
          answerTrue: 1,
          disabled: false,
          answered: false
        }
      ],
      2: [
        {
          pic: { skin: "last/img_pic2_1.png" },
          sound: "sound/last/08.mp3",
          idx: 1,
          answerTrue: 4,
          answered: false
        },
        {
          pic: { skin: "last/img_pic2_2.png" },
          sound: "sound/last/09.mp3",
          idx: 2,
          answerTrue: 4,
          answered: false
        },
        {
          pic: { skin: "last/img_pic2_3.png" },
          sound: "sound/last/10.mp3",
          idx: 3,
          answerTrue: 4,
          answered: false
        },
        {
          pic: { skin: "last/img_pic2_4.png" },
          sound: "sound/last/11.mp3",
          idx: 4,
          answerTrue: 4,
          answered: false
        }
      ],
      3: [
        {
          pic: { skin: "last/img_pic3_1.png" },
          sound: "sound/last/14.mp3",
          idx: 1,
          answerTrue: 4,
          answered: false
        },
        {
          pic: { skin: "last/img_pic3_2.png" },
          sound: "sound/last/15.mp3",
          idx: 2,
          answerTrue: 4,
          answered: false
        },
        {
          pic: { skin: "last/img_pic3_3.png" },
          sound: "sound/last/16.mp3",
          idx: 3,
          answerTrue: 4,
          answered: false
        },
        {
          pic: { skin: "last/img_pic3_4.png" },
          sound: "sound/last/17.mp3",
          idx: 4,
          answerTrue: 4,
          answered: false
        }
      ]
    };
    this.countTure = 0;
  }
  async onEnable() {
    this.resetData()
    let wrapResult = this.wrap.getChildByName("wrapResult") as Laya.Box;
    let btnAgain = wrapResult.getChildByName("btnAgain") as Laya.Image;
    btnAgain.on(Laya.Event.MOUSE_DOWN, this, e => {
      btnAgain.skin = "last/img_btnAgain0.png";
    });
    Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
      btnAgain.skin = "last/img_btnAgain1.png";
    });
    btnAgain.on(Laya.Event.CLICK, this, e => {
      this.resetData();
      this.nextQues(1);
    });
    let btnBack = wrapResult.getChildByName("btnBack") as Laya.Image;
    btnBack.on(Laya.Event.MOUSE_DOWN, this, e => {
      btnBack.skin = "last/img_btnBack0.png";
    });
    Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
      btnBack.skin = "last/img_btnBack1.png";
    });
    btnBack.on(Laya.Event.CLICK, this, e => {
      PlayManager.restart();
    });
    EventManager.sub("last/answer", this, this.doAnswer);
    EventManager.sub("last/nextQues", this, this.nextQues);
    let txt1 = this.wrap.getChildByName("txt1") as Laya.Image;
    let wrapQues = this.wrap.getChildByName("wrapQues") as Laya.Box;
    let listQues = wrapQues.getChildByName("list") as Laya.List;
    listQues.renderHandler = Laya.Handler.create(this, this.listQuesRender);
    listQues.array = this.configAnswer[this.currentQuesIdx];
    await Utils.asyncByTime(1000);
    txt1.skin = "last/img_txt2.png";
    Laya.SoundManager.playSound("sound/last/back.mp3");
    await Utils.asyncByTime(3800);
    txt1.visible = false;
    wrapQues.visible = true;
    this.nextQues(1);
  }
  async doAnswer({ result, idx }) {
    if (result) {
      this.countTure++;
    }
    let wrapQues = this.wrap.getChildByName("wrapQues") as Laya.Box;
    let bubble = wrapQues.getChildByName("bubble") as Laya.Image;
    bubble.visible = true;
    this.configAnswer[this.currentQuesIdx].forEach(item => {
      item.disabled = false;
    });

    let listQues = wrapQues.getChildByName("list") as Laya.List;
    listQues["_cells"].forEach((cell, idx2) => {
      let imgTrue = cell.getChildByName("imgTrue") as Laya.Image;
      let imgWrong = cell.getChildByName("imgWrong") as Laya.Image;
      if (idx == cell.dataSource.idx) {
        imgWrong.visible = !result;
      }
      if (cell.dataSource.idx == cell.dataSource.answerTrue) {
        imgTrue.visible = true;
      }
    });
    Laya.SoundManager.playSound(this.quesMap[this.currentQuesIdx].sound2);
    await Utils.asyncByTime(this.quesMap[this.currentQuesIdx].delay2);
    listQues["_cells"].forEach((cell, idx2) => {
      let imgTrue = cell.getChildByName("imgTrue") as Laya.Image;
      let imgWrong = cell.getChildByName("imgWrong") as Laya.Image;
      imgTrue.visible = false;
      imgWrong.visible = false;
    });

    this.nextQues();
  }
  listQuesRender(item: Laya.Box, idx) {
    let data = item.dataSource;
  }
  quesMap = {
    1: {
      sound1: "sound/last/01.mp3",
      delay1: 6000,
      delay2: 9000,
      sound2: "sound/last/06.mp3"
    },
    2: {
      sound1: "sound/last/07.mp3",
      delay1: 8000,
      delay2: 13000,
      sound2: "sound/last/12.mp3"
    },
    3: {
      sound1: "sound/last/13.mp3",
      delay1: 5000,
      delay2: 9000,
      sound2: "sound/last/18.mp3"
    }
  };
  countTure = 0;
  showingStar = false;
  async showStar() {
    let wrapResult = this.wrap.getChildByName("wrapResult") as Laya.Box;
    let listStar = wrapResult.getChildByName("listStar") as Laya.Image;
    this.showingStar = true;
    listStar.removeChildren();
    for (let i = 0; i < 3; i++) {
      let star = new Laya.Image(
        `last/img_star${i < this.countTure ? "1" : "0"}.png`
      );
      star.pivot(star.width / 2, star.height / 2);
      star.pos(103 + 242 * i, 111);
      listStar.addChild(star);
      star.scale(0, 0);
      await Utils.asyncTween(star, { scaleX: 1, scaleY: 1 }, 300);
    }
    this.showingStar = false;
  }
  async nextQues(idx?, flagTrue?) {
    if (!idx) {
      this.currentQuesIdx++;
    } else {
      this.currentQuesIdx = idx;
    }
    let txt1 = this.wrap.getChildByName("txt1") as Laya.Image;
    let wrapQues = this.wrap.getChildByName("wrapQues") as Laya.Box;
    let wrapResult = this.wrap.getChildByName("wrapResult") as Laya.Box;
    let listQues = wrapQues.getChildByName("list") as Laya.List;
    let ques = wrapQues.getChildByName("ques") as Laya.Image;
    let quesBg = this.wrap.getChildByName("bg") as Laya.Image;
    let bubble = wrapQues.getChildByName("bubble") as Laya.Image;
    bubble.visible = false;
    txt1.visible = false;
    wrapQues.visible = true;
    quesBg.visible = true;
    wrapResult.visible = false;
    if (this.currentQuesIdx > 3) {
      // 显示结果
      wrapQues.visible = false;
      quesBg.visible = false;
      wrapResult.visible = true;
      this.showStar();
      return;
    }
    if (flagTrue) {
      this.countTure++;
    }
    Laya.SoundManager.stopAllSound();
    listQues.array = this.configAnswer[this.currentQuesIdx];
    ques.skin = `last/img_ques${this.currentQuesIdx}.png`;
    bubble.skin = `last/img_bubble${this.currentQuesIdx}.png`;
    Laya.SoundManager.playSound(this.quesMap[this.currentQuesIdx].sound1);
    await Utils.asyncByTime(this.quesMap[this.currentQuesIdx].delay1);
    this.configAnswer[this.currentQuesIdx].forEach(item => {
      item.disabled = true;
    });
  }
  chooseAnswer(answerId) {}
}
