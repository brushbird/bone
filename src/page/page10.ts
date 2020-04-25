import PageBase from "./PageBase";
import PlayManager from "../manager/PlayManager";
import Utils from "../Utils";

export default class Page10 extends PageBase {
  constructor() {
    super();
  }
  async onEnable() {
    PlayManager.showTxt("人的正常裸眼视力范围在1.0-1.5");
    Utils.asyncByTime(4200).then(e => {
      PlayManager.showTxt("即5.0-5.2左右");
    });
    Laya.SoundManager.playSound("sound/27.mp3");
    await Utils.asyncByTime(8000);
    PlayManager.goNext();
  }
}
