import Utils from "../Utils";

export default class PlayManager {
  static playedBgm = false;
  static spLabel: Laya.Label;
  static currentPage = 1;
  static gifImg;
  static opening = false;
  static showLoading() {
    this.closeLoading();
    Laya.View.open("pages/loading.scene", false);
  }
  static closeLoading() {
    Laya.View.close("pages/loading.scene");
  }
  static playScene(autoCloseLoading = true) {
    if (this.opening) {
      return;
    }
    this.opening = true;
    return new Promise(rsv => {
      this.showLoading();
      let loadCount = 0;
      let ffCheckLoaded = () => {
        if (this.currentPage == 11) {
          // 判断gif加载完了没有
          if (PlayManager.gifImg.className != "loaded") {
            Utils.asyncByTime(60).then(e => {
              ffCheckLoaded();
            });
            return;
          }
        }
        this.closeLoading();
      };
      Laya.View.open(
        `pages/page${this.currentPage}.scene`,
        this.currentPage > 1,
        null,
        Laya.Handler.create(this, e => {
          Utils.asyncByTime(1000).then(e => {
            this.opening = false;
          });
          loadCount++;
          ffCheckLoaded();
          // 提前加载下一页的内容
          Laya.loader.load(
            `pages/page${this.currentPage + 1}.scene`,
            Laya.Handler.create(this, e => {
              Laya.loader.load(e.loadList);
            })
          );
          rsv();
        })
      );
    });
  }
  static async goNext() {
    this.currentPage++;
    if (this.currentPage == 10) {
      // 跳过成人眼睛那一页
      this.currentPage = 11;
    }
    await this.playScene(true);
  }
  static async start() {
    this.currentPage = 3;
    await this.playScene(true);
  }
  static async restart() {
    this.currentPage = 1;
    await this.playScene(true);
  }
  static showTxt(txt, color = "#ffffff") {
    if (!this.spLabel) {
      this.spLabel = new Laya.Label();
      this.spLabel.centerX = 0;
      this.spLabel.bottom = 70;
      this.spLabel.zOrder = 999;
      // this.spLabel.fontSize = 60;
      Laya.stage.addChild(this.spLabel);
    }
    if (color == "#ffffff") {
      this.spLabel.font = "fnt_shadow";

      // this.spLabel.font = "fnt_white";
    } else {
      this.spLabel.font = "fnt_shadow2";

      // this.spLabel.font = "fnt_black";
    }
    this.spLabel.text = txt;
  }
}
