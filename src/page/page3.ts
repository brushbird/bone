import PageBase from "./PageBase";
import Utils from "../Utils";
import PlayManager from "../manager/PlayManager";

export default class Page3 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    let gamebgWrap = this.wrap.getChildByName('gamebg') as Laya.Box;
    let newtonsWrap = this.wrap.getChildByName('newtons') as Laya.Box;
    let optsWrap = this.wrap.getChildByName('opts') as Laya.Box;
    await Utils.asyncByTime(1000);
    let newton1 = newtonsWrap.getChildByName('newton1') as Laya.Sprite;
    let newton11 = newtonsWrap.getChildByName('newton11') as Laya.Sprite;
    let newton2 = newtonsWrap.getChildByName('newton2') as Laya.Sprite;
    let newton22 = newtonsWrap.getChildByName('newton22') as Laya.Sprite;
    newton11.visible = true;
    await Utils.asyncByTime(500);
    newton11.visible = false;
    await Utils.asyncByTime(1000);
    optsWrap.visible = true;
    let optCircle = optsWrap.getChildByName('optcircle') as Laya.Sprite;
    let optJump = optsWrap.getChildByName('optjump') as Laya.Sprite;
    let jumpFlag = false;
    optJump.on(Laya.Event.MOUSE_DOWN, this, async e => {
      if (jumpFlag) return;
      jumpFlag = true;
      newton1.visible = false;
      newton2.visible = true;
      if (newtonsWrap.x > 400 && newtonsWrap.x < 540) {
        let box1 = gamebgWrap.getChildByName('boxes1') as Laya.Sprite;
        if(box1.visible) {
          let box1open = gamebgWrap.getChildByName('openbox1') as Laya.Sprite;
          let brain = gamebgWrap.getChildByName('brain') as Laya.Sprite;
          let optsBrain = optsWrap.getChildByName('optbrain') as Laya.Sprite;
          await Utils.asyncByTime(200);
          box1.visible = false;
          box1open.visible = true;
          newton22.visible = true;
          await Utils.asyncByTime(200);
          brain.visible = true;
          optsBrain.visible = true;
          newton22.visible = false;
          await Utils.asyncByTime(200);
          newton22.visible = true;
          await Utils.asyncByTime(200);
          newton22.visible = false;
        }
      }
      if (newtonsWrap.x > 1144 && gamebgWrap.x > -80) {

      }
      await Utils.asyncByTime(200);
      newton2.visible = false;
      newton1.visible = true;
      jumpFlag = false;
    });
    let moveFlag = false;
    optCircle.on(Laya.Event.MOUSE_DOWN, this, e => {
      let pos = new Laya.Point(e.stageX, e.stageY);
      cachePosX = pos.x;
      moveFlag = true;
    });
    let cachePosX = 175;
    Laya.stage.on(Laya.Event.MOUSE_UP, this, async e => {
      moveFlag = false;
      optCircle.x = 175;
      cachePosX = 175;
      if (gamebgWrap.x == -1540) {
        await Utils.asyncByTime(1000);
        PlayManager.goNext();
      }
    });
    let getDirection = (e) => {
      let pos = new Laya.Point(e.stageX, e.stageY);
      return pos.x >= cachePosX;
    }
    let changeView = async () => {
      if (!moveFlag) {
        return
      };
      if (optCircle.x == 255) {
        if (newtonsWrap.x > 1180) {
          if (gamebgWrap.x > -1530) {
            gamebgWrap.x -= 10;
          } else {
            gamebgWrap.x = -1540;
          }
        } else {
          newtonsWrap.x += 10;
        }
      }
      if (optCircle.x == 93) {
        if (newtonsWrap.x >= 1180) {
          if (gamebgWrap.x < -10) {
            gamebgWrap.x += 10;
          } else {
            gamebgWrap.x = 0;
          }
        } else if (newtonsWrap.x > 0){
          newtonsWrap.x -= 10;
        } else {
          newtonsWrap.x = 0;
        }
      }
      await Utils.asyncByTime(100);
      changeView();
    }
    let changePos = (e) => {
      if (moveFlag) {
        let pos = new Laya.Point(e.stageX, e.stageY);
        let direction = getDirection(e);
        if (direction) {
          optCircle.x = pos.x < 255 ? 255 : 255;
        } else {
          optCircle.x = pos.x > 93 ? 93 : 93;
        }
        changeView();
        console.log(e, 'e');
      }
    }
    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, Utils.throttle(changePos, 500, {}));
  }
}
