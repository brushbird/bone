import Utils from "../Utils";
import PlayManager from "../manager/PlayManager";

export default class BarPage1 extends Laya.Sprite {
  constructor() {
    super();
  }
  onEnable() {
    let progressOuter = this.getChildByName("progressOuter") as Laya.Panel;
    let wrapPrg = progressOuter.getChildByName("progress") as Laya.Sprite;
    let bar = wrapPrg.getChildByName("bar") as Laya.Image;
    let btn = this.getChildByName("btnToggle") as Laya.Image;
    btn.on(Laya.Event.CLICK, this, e => {
      this.togglePrg(!this.flagShow);
    });
    Laya.stage.on(Laya.Event.CLICK, this, e => {
      let posIn = new Laya.Point(e.stageX, e.stageY);
      let posPrg = new Laya.Point(wrapPrg.x, wrapPrg.y);
      progressOuter.localToGlobal(posPrg);
      if (
        posIn.x > posPrg.x &&
        posIn.x < posPrg.x + wrapPrg.width &&
        posIn.y > posPrg.y &&
        posIn.y < posPrg.y + wrapPrg.height
      ) {
      } else {
        this.togglePrg(false);
      }
    });
    let flagDown = false;
    wrapPrg.on(Laya.Event.MOUSE_DOWN, this, e => {
      flagDown = true;
    });
    Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
      flagDown = false;
    });
    let ffMove = e => {
      let posIn = new Laya.Point(e.stageX, e.stageY);
      this.globalToLocal(posIn);
      if (posIn.y > 290) {
        posIn.y = 290;
      }
      bar.y = posIn.y;
      let percent = posIn.y / 290;
      if (!PlayManager.playedBgm) {
        var audio: any = document.getElementById("audio");
        audio.pause();
        Laya.SoundManager.useAudioMusic = false;
        Laya.SoundManager.playMusic("sound/bgm.mp3");
        PlayManager.playedBgm = true;
      }
      Laya.SoundManager.setMusicVolume(1 - percent);
      // var audio: any = document.getElementById("audio");
      // audio.pause();
      // document.getElementById("audio")["volume"] = 1 - percent;
      // console.log((1 - percent).toFixed(1));
      // audio.play()
      // alert(audio)
      // Laya.SoundManager.setSoundVolume(1 - percent);
    };
    wrapPrg.on(Laya.Event.MOUSE_MOVE, this, e => {
      if (Laya.Browser.onPC && !flagDown) {
        return;
      }
      ffMove(e);
    });
    wrapPrg.on(Laya.Event.MOUSE_DOWN, this, e => {
      ffMove(e);
    });
    wrapPrg.y = 340;
    wrapPrg.alpha = 0;
  }
  flagShow = false;
  togglePrg(flag) {
    this.flagShow = flag;
    let progressOuter = this.getChildByName("progressOuter") as Laya.Panel;
    let wrapPrg = progressOuter.getChildByName("progress") as Laya.Sprite;
    Utils.asyncTween(wrapPrg, { y: flag ? 27 : 340, alpha: flag ? 1 : 0 }, 200);
  }
}
