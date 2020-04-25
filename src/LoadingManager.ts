export default class LoadingManager {
  static moduleList = [];
  static _list = [];
  static get list() {
    return this._list;
  }
  static progress = 0;
  static loadSingle(call = () => {}) {}
  static loadFontList(arr: Array<string>) {
    arr.forEach(name => {
      this.loadFont(name);
    });
  }
  static loadFont(name: string): void {
    var bitmapFont: Laya.BitmapFont = new Laya.BitmapFont();
    bitmapFont.loadFont(
      "font/" + name + ".fnt",
      new Laya.Handler(
        this,
        e => {
          this.onFontLoaded(e, name);
        },
        [bitmapFont]
      )
    );
  }
  static onFontLoaded(bitmapFont: Laya.BitmapFont, name: string): void {
    bitmapFont.setSpaceWidth(20);
    Laya.Text.registerBitmapFont(name, bitmapFont);
  }
  static updateList() {
    this.moduleList.forEach(moduleName => {
      this._list.push(`res/atlas/${moduleName}.atlas`);
      this._list.push(`res/atlas/${moduleName}.png`);
    });
  }
  static startLoad() {
    this.updateList();
    this.loadFontList(["fnt_shadow", "fnt_shadow2"]);
    return new Promise((rsv, rej) => {
      if (this.list.length > 0) {
        Laya.loader.load(
          this.list,
          Laya.Handler.create(this, () => {
            rsv();
          }),
          Laya.Handler.create(
            null,
            e => {
              this.progress = e;
            },
            null,
            false
          )
        );
      } else {
        rsv();
      }
    });
  }
}
