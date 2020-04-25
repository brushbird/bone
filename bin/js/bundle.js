(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    class PageBase extends Laya.View {
        constructor() {
            super();
            this.once(Laya.Event.ENTER, this, e => {
                this.onDisplay();
            });
            this.wrap = this.getChildByName("wrap");
        }
        onDisplay() {
            this.wrap = this.getChildByName("wrap");
            let bgIn = this.wrap.getChildByName("bg");
            if (bgIn) {
                bgIn.left = -(Laya.stage.width - this.wrap.width) / 2;
                bgIn.right = -(Laya.stage.width - this.wrap.width) / 2;
            }
        }
    }

    class Utils {
        static asyncTween(target, to, duration = 1000, easeFunc = Laya.Ease.linearNone) {
            return new Promise((rsv, rej) => {
                Laya.Tween.to(target, to, duration, easeFunc, Laya.Handler.create(this, () => {
                    rsv();
                }));
            });
        }
        static asyncByTime(time) {
            return new Promise(rsv => {
                Laya.timer.once(time, this, () => {
                    rsv();
                });
            });
        }
        static createDashLines(node, startX, startY, endX, endY, each = 2, space = 1, color = "#000000", lineWidth = 2) {
            let distance = Math.sqrt(Math.pow(endY - startY, 2) + Math.pow(endX - startX, 2));
            let count = distance / (each + space);
            let eachX = (each * (endX - startX)) / distance;
            let eachY = (each * (endY - startY)) / distance;
            let spaceX = (space * (endX - startX)) / distance;
            let spaceY = (space * (endY - startY)) / distance;
            for (var i = 0; i <= count; i++) {
                let x = startX + i * (eachX + spaceX);
                let y = startY + i * (eachY + spaceY);
                node.graphics.drawLine(x, y, x + eachX, y + eachY, color, lineWidth);
            }
        }
        static toggleSkin(node, skin1, skin2, delay, maxCount = 5) {
            return __awaiter(this, void 0, void 0, function* () {
                let count = 0;
                let ffChange = () => __awaiter(this, void 0, void 0, function* () {
                    count++;
                    node.skin = node.skin == skin1 ? skin2 : skin1;
                    yield Utils.asyncByTime(delay);
                    if (!maxCount || count < maxCount) {
                        yield ffChange();
                    }
                });
                yield ffChange();
            });
        }
        static createDragonBone(url) {
            return new Promise(rsv => {
                var skeleton = new Laya.Skeleton();
                skeleton.load(url, Laya.Handler.create(this, () => {
                    rsv(skeleton);
                }));
            });
        }
        static showDashAni(wrap, pointsList, eachCall = idx => { }, eachLen = 40, color = "#000000", lineWidth = 2) {
            let lastPoint = new Laya.Point(0, 0);
            let count = 0;
            let idx = -1;
            let countTotal = -1;
            let linesCache = [];
            let distance;
            let posStart;
            let posEnd;
            let funcUpdate = () => __awaiter(this, void 0, void 0, function* () {
                if (count > countTotal) {
                    idx++;
                    yield eachCall(idx);
                    if (idx + 1 > pointsList.length - 1) {
                        return;
                    }
                    count = 0;
                    posStart = pointsList[idx];
                    posEnd = pointsList[idx + 1];
                    distance = Math.sqrt(Math.pow(posEnd.y - posStart.y, 2) +
                        Math.pow(posEnd.x - posStart.x, 2));
                    countTotal = Math.ceil(distance / eachLen);
                    if (linesCache.length == 0) {
                        linesCache.push(posStart);
                    }
                }
                let x = posStart.x + (count * eachLen * (posEnd.x - posStart.x)) / distance;
                let y = posStart.y + (count * eachLen * (posEnd.y - posStart.y)) / distance;
                if (countTotal == count) {
                    x = posEnd.x;
                    y = posEnd.y;
                }
                if (count == 1) {
                    linesCache.push(new Laya.Point(x, y));
                }
                else {
                    linesCache[linesCache.length - 1] = new Laya.Point(x, y);
                }
                linesCache.forEach((point, idx) => {
                    let pointNext = linesCache[idx + 1];
                    if (pointNext) {
                        this.createDashLines(wrap, point.x, point.y, pointNext.x, pointNext.y, 16, 8, color, lineWidth);
                    }
                });
                count++;
                Laya.timer.once(60, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    yield funcUpdate();
                }));
            });
            funcUpdate();
        }
        static throttle(func, wait, options) {
            let timeout, context, args, result;
            let previous = 0;
            if (!options)
                options = {};
            let later = function () {
                previous = options.leading === false ? 0 : new Date().getTime();
                timeout = null;
                func.apply(context, args);
                if (!timeout)
                    context = args = null;
            };
            let throttled = function () {
                let now = new Date().getTime();
                if (!previous && options.leading === false)
                    previous = now;
                let remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    func.apply(context, args);
                    if (!timeout)
                        context = args = null;
                }
                else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
            };
            return throttled;
        }
    }

    class PlayManager {
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
                        if (PlayManager.gifImg.className != "loaded") {
                            Utils.asyncByTime(60).then(e => {
                                ffCheckLoaded();
                            });
                            return;
                        }
                    }
                    this.closeLoading();
                };
                Laya.View.open(`pages/page${this.currentPage}.scene`, this.currentPage > 1, null, Laya.Handler.create(this, e => {
                    Utils.asyncByTime(1000).then(e => {
                        this.opening = false;
                    });
                    loadCount++;
                    ffCheckLoaded();
                    Laya.loader.load(`pages/page${this.currentPage + 1}.scene`, Laya.Handler.create(this, e => {
                        Laya.loader.load(e.loadList);
                    }));
                    rsv();
                }));
            });
        }
        static goNext() {
            return __awaiter(this, void 0, void 0, function* () {
                this.currentPage++;
                if (this.currentPage == 10) {
                    this.currentPage = 11;
                }
                yield this.playScene(true);
            });
        }
        static start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.currentPage = 3;
                yield this.playScene(true);
            });
        }
        static restart() {
            return __awaiter(this, void 0, void 0, function* () {
                this.currentPage = 1;
                yield this.playScene(true);
            });
        }
        static showTxt(txt, color = "#ffffff") {
            if (!this.spLabel) {
                this.spLabel = new Laya.Label();
                this.spLabel.centerX = 0;
                this.spLabel.bottom = 70;
                this.spLabel.zOrder = 999;
                Laya.stage.addChild(this.spLabel);
            }
            if (color == "#ffffff") {
                this.spLabel.font = "fnt_shadow";
            }
            else {
                this.spLabel.font = "fnt_shadow2";
            }
            this.spLabel.text = txt;
        }
    }
    PlayManager.playedBgm = false;
    PlayManager.currentPage = 1;
    PlayManager.opening = false;

    class Page1 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                let leftHand = this.wrap.getChildByName('left-hand');
                let leftFinger = this.wrap.getChildByName('left-finger');
                let rightHand = this.wrap.getChildByName('right-hand');
                let rightFinger = this.wrap.getChildByName('right-finger');
                let screen = this.wrap.getChildByName('screen');
                let shakebox = this.wrap.getChildByName('shakebox');
                let handbone = shakebox.getChildByName('handbone');
                let bone = shakebox.getChildByName('bone');
                let guanjie = shakebox.getChildByName('guanjie');
                let guge = shakebox.getChildByName('guge');
                let yu = shakebox.getChildByName('yu');
                yield Utils.asyncTween(screen, { rotation: -2 }, 50);
                yield Utils.asyncTween(screen, { rotation: 0 }, 50);
                yield Utils.asyncTween(screen, { rotation: 2 }, 50);
                yield Utils.asyncTween(screen, { rotation: 0 }, 50);
                yield Utils.asyncTween(screen, { rotation: -2 }, 50);
                yield Utils.asyncTween(screen, { rotation: 0 }, 50);
                yield Utils.asyncTween(screen, { rotation: 2 }, 50);
                yield Utils.asyncTween(screen, { rotation: 0 }, 50);
                yield Utils.asyncTween(screen, { rotation: -2 }, 50);
                yield Utils.asyncTween(screen, { rotation: 0 }, 50);
                yield Utils.asyncByTime(1000);
                handbone.visible = true;
                yield Utils.asyncByTime(500);
                yield Utils.asyncTween(handbone, { rotation: -70 }, 1000);
                yield Utils.asyncTween(handbone, { rotation: 20 }, 1000);
                bone.visible = true;
                yield Utils.asyncTween(handbone, { rotation: -70 }, 1000);
                handbone.visible = false;
                guge.visible = true;
                guanjie.visible = true;
                Laya.Tween.to(guge, { x: 414 }, 1000);
                Laya.Tween.to(guanjie, { x: 878 }, 1000);
                yield Utils.asyncByTime(1000);
                Laya.Tween.to(guge, { x: 514, y: 238 }, 1000);
                Laya.Tween.to(guanjie, { x: 778, y: 274 }, 1000);
                yield Utils.asyncByTime(2000);
                yield Utils.asyncTween(shakebox, { rotation: -5 }, 100);
                yield Utils.asyncTween(shakebox, { rotation: 5 }, 100);
                yield Utils.asyncTween(shakebox, { rotation: -5 }, 100);
                yield Utils.asyncTween(shakebox, { rotation: 5 }, 100);
                yield Utils.asyncTween(shakebox, { rotation: -5 }, 100);
                yield Utils.asyncTween(shakebox, { rotation: 5 }, 100);
                yield Utils.asyncTween(shakebox, { rotation: 0 }, 100);
                yield Utils.asyncByTime(500);
                Laya.Tween.to(guge, { scaleX: 1.8, scaleY: 1.8, x: 580 }, 1500);
                Laya.Tween.to(guanjie, { scaleX: 1.8, scaleY: 1.8, x: 726 }, 1500);
                Laya.Tween.to(bone, { scaleX: 0.5, scaleY: 0.5 }, 1500);
                yield Utils.asyncByTime(1000);
                yu.visible = true;
                Laya.Tween.to(yu, { scaleX: 0.7, scaleY: 0.7 }, 500);
                yield Utils.asyncByTime(1000);
                leftFinger.visible = false;
                leftHand.visible = false;
                rightFinger.visible = false;
                rightHand.visible = false;
                yield Utils.asyncTween(screen, { scaleX: 3, scaleY: 3 }, 1000);
                yield Utils.asyncByTime(2000);
                PlayManager.goNext();
            });
        }
    }

    class Page10 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.showTxt("人的正常裸眼视力范围在1.0-1.5");
                Utils.asyncByTime(4200).then(e => {
                    PlayManager.showTxt("即5.0-5.2左右");
                });
                Laya.SoundManager.playSound("sound/27.mp3");
                yield Utils.asyncByTime(8000);
                PlayManager.goNext();
            });
        }
    }

    class Page11 extends PageBase {
        constructor() {
            super();
        }
        imgLoaded(img) {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.gifImg.className = "loaded";
                PlayManager.showTxt("在视力发育的阶段");
                Utils.asyncByTime(1800).then((e) => __awaiter(this, void 0, void 0, function* () {
                    PlayManager.showTxt("要特别注意保护眼睛");
                    yield Utils.asyncByTime(3000);
                    PlayManager.showTxt("避免有损视力的活动");
                }));
                Laya.SoundManager.playSound("sound/28.mp3");
                document.body.appendChild(img);
                yield Utils.asyncByTime(3000);
                img.style.display = "none";
                let ctr = this.wrap.getChildByName("ctr");
                ctr.visible = true;
                ctr.y = 1090 + this.wrap.y;
                yield Utils.asyncTween(ctr, {
                    y: 676 + this.wrap.y
                }, 500);
                let button = ctr.getChildByName("button");
                yield Utils.asyncByTime(400);
                button.visible = true;
                yield Utils.asyncByTime(400);
                button.visible = false;
                yield Utils.asyncByTime(400);
                button.visible = true;
                yield Utils.asyncByTime(400);
                button.visible = false;
                let hand = this.wrap.getChildByName("hand");
                hand.y = hand.y + this.wrap.y;
                hand.visible = true;
                yield Utils.asyncByTime(500);
                let screen = this.wrap.getChildByName("screen");
                screen.skin = "test/img_000000.png";
                yield Utils.asyncByTime(1000);
                PlayManager.goNext();
            });
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.showTxt("");
                let ratio = Laya.Browser.clientWidth / Laya.stage.width >
                    Laya.Browser.clientHeight / Laya.stage.height
                    ? Laya.Browser.clientWidth / Laya.stage.width
                    : Laya.Browser.clientHeight / Laya.stage.height;
                let flagRotate = Laya.Browser.clientWidth < Laya.Browser.clientHeight;
                let img = PlayManager.gifImg;
                img.style.position = "absolute";
                let screen = this.wrap.getChildByName("screen");
                if (img.className == "loaded") {
                    this.imgLoaded(img);
                }
                else {
                    PlayManager.showLoading();
                    let flagTimeOut = false;
                    Laya.timer.once(3000, this, e => {
                        flagTimeOut = true;
                        this.imgLoaded(img);
                    });
                    img.onload = () => __awaiter(this, void 0, void 0, function* () {
                        PlayManager.closeLoading();
                        if (!flagTimeOut) {
                            this.imgLoaded(img);
                        }
                    });
                }
                if (flagRotate) {
                    ratio =
                        Laya.Browser.clientHeight / Laya.stage.width >
                            Laya.Browser.clientWidth / Laya.stage.height
                            ? Laya.Browser.clientHeight / Laya.stage.width
                            : Laya.Browser.clientWidth / Laya.stage.height;
                    img.style.left =
                        (this.wrap.y + this.wrap.height - screen.y - screen.height / 2) *
                            ratio +
                            "px";
                    img.style.top =
                        (this.wrap.x + screen.x - screen.width / 2) * ratio + "px";
                    img.style.width = screen.height * ratio + "px";
                }
                else {
                    img.style.left =
                        (screen.x + this.wrap.x - screen.width / 2) * ratio + "px";
                    img.style.top =
                        (screen.y + this.wrap.y - screen.height / 2) * ratio + "px";
                    img.style.width = screen.width * ratio + "px";
                }
            });
        }
    }

    class Page12 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.showTxt("当眼睛受损失时 ", "#000000");
                Utils.asyncByTime(1500).then((e) => __awaiter(this, void 0, void 0, function* () {
                    PlayManager.showTxt("会引发不同的视力问题", "#000000");
                    yield Utils.asyncByTime(4100 - 1500);
                    PlayManager.showTxt("如：远视、近视和散光", "#000000");
                    yield Utils.asyncByTime(3500);
                    PlayManager.showTxt("");
                }));
                Laya.SoundManager.playSound("sound/29.mp3");
                this.twikle();
                yield Utils.asyncByTime(9000);
                PlayManager.goNext();
            });
        }
        twikle() {
            return __awaiter(this, void 0, void 0, function* () {
                let border = this.wrap.getChildByName("border");
                border.visible = !border.visible;
                yield Utils.asyncByTime(600);
                this.twikle();
            });
        }
    }

    class Page13 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.showTxt("");
                let lineNormal = this.wrap.getChildByName("lineNormal");
                lineNormal.mask.width = 0;
                yield Utils.asyncTween(lineNormal.mask, { width: 976 }, 4000);
                let res = this.wrap.getChildByName("res");
                res.visible = true;
                yield Utils.asyncTween(res, { alpha: 0.6 }, 500);
                Utils.asyncTween(lineNormal, { alpha: 0 }, 500);
                yield Utils.asyncByTime(1000);
                PlayManager.showTxt("近视形成的原因是");
                Laya.SoundManager.playSound("sound/30.mp3");
                let lineJin = this.wrap.getChildByName("lineJin");
                lineJin.visible = true;
                lineJin.mask.width = 0;
                Utils.asyncTween(lineJin.mask, { width: 911 }, 5000);
                yield Utils.asyncByTime(1000);
                PlayManager.showTxt("进入眼球的光线成像在了视网膜的前端");
                yield Utils.asyncByTime(4000);
                let resJin = this.wrap.getChildByName("resJin");
                resJin.visible = true;
                yield Utils.asyncByTime(1000);
                yield Utils.asyncTween(resJin, { alpha: 0 }, 500);
                Utils.asyncTween(lineJin, { alpha: 0 }, 500);
                Laya.SoundManager.playSound("sound/31.mp3");
                PlayManager.showTxt("远视则刚好相反");
                let lineYuan = this.wrap.getChildByName("lineYuan");
                lineYuan.visible = true;
                lineYuan.mask.width = 0;
                yield Utils.asyncTween(lineYuan.mask, { width: 1042 }, 2800);
                let resYuan = this.wrap.getChildByName("resYuan");
                let resBg = this.wrap.getChildByName("resBg");
                resBg.visible = true;
                resYuan.visible = true;
                yield Utils.asyncByTime(1000);
                Utils.asyncTween(resBg, { alpha: 0 }, 500);
                yield Utils.asyncTween(resYuan, { alpha: 0 }, 500);
                Utils.asyncTween(lineYuan, { alpha: 0 }, 500);
                Laya.SoundManager.playSound("sound/32.mp3");
                PlayManager.showTxt("散光者眼中的世界则是叠影重重");
                let dieying = this.wrap.getChildByName("dieying");
                dieying.visible = true;
                yield Utils.asyncTween(dieying, { x: 362, y: 334 }, 950);
                yield Utils.asyncTween(dieying, { x: 371, y: 343 }, 950);
                yield Utils.asyncTween(dieying, { x: 359, y: 343 }, 950);
                yield Utils.asyncTween(dieying, { x: 366, y: 336 }, 950);
                dieying.visible = false;
                PlayManager.showTxt("这是因为进入眼球的光线会在视网膜汇聚成2个或以上的图像");
                let lineSan = this.wrap.getChildByName("lineSan");
                lineSan.visible = true;
                lineSan.mask.width = 0;
                yield Utils.asyncTween(lineSan.mask, { width: 976 }, 2800);
                let resSan1 = this.wrap.getChildByName("resSan1");
                resSan1.visible = true;
                let resSan2 = this.wrap.getChildByName("resSan2");
                resSan2.visible = true;
                yield Utils.asyncByTime(3000);
                PlayManager.goNext();
            });
        }
        twikle() {
            return __awaiter(this, void 0, void 0, function* () { });
        }
    }

    class Page14 extends PageBase {
        constructor() {
            super();
            this.step = 1;
            this.canHideHint = false;
            this.flagWithHint = true;
        }
        onOpened(data = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!data) {
                    data = {};
                }
                this.flagWithHint = !data.noHint;
                let btnLeft = this.wrap.getChildByName("btnLeft");
                let btnRight = this.wrap.getChildByName("btnRight");
                btnLeft.on(Laya.Event.CLICK, this, e => {
                    this.changeStep(1);
                });
                btnRight.on(Laya.Event.CLICK, this, e => {
                    if (this.flagWithHint) {
                        PlayManager.goNext();
                    }
                    else {
                        this.close();
                    }
                });
                let spJin = this.wrap.getChildByName("spJin");
                let spYuan = this.wrap.getChildByName("spYuan");
                let spSan = this.wrap.getChildByName("spSan");
                let wrapCenter1 = this.wrap.getChildByName("wrapCenter1");
                let wrapCenter2 = this.wrap.getChildByName("wrapCenter2");
                let wrapCenter3 = this.wrap.getChildByName("wrapCenter3");
                let hint = this.wrap.getChildByName("hint");
                spJin.on(Laya.Event.MOUSE_DOWN, this, e => {
                    if (spJin.disabled) {
                        hint.visible = false;
                    }
                });
                spYuan.on(Laya.Event.CLICK, this, e => {
                    if (this.canHideHint) {
                        hint.visible = false;
                    }
                });
                spSan.on(Laya.Event.CLICK, this, e => {
                    if (this.canHideHint) {
                        hint.visible = false;
                    }
                });
                spSan.type = 3;
                spYuan.type = 2;
                if (this.flagWithHint) {
                    spJin.disabled = spYuan.disabled = spSan.disabled = false;
                    spJin.visible = spYuan.visible = spSan.visible = false;
                    wrapCenter1.visible = wrapCenter2.visible = wrapCenter3.visible = true;
                    let shapeJin = this.wrap.getChildByName("shapeJin");
                    shapeJin.visible = false;
                    let shapeYuan = this.wrap.getChildByName("shapeYuan");
                    shapeYuan.visible = false;
                    let shapeSan = this.wrap.getChildByName("shapeSan");
                    shapeSan.visible = false;
                    PlayManager.showTxt("仔细观察窗外的景象", "#000000");
                    Utils.asyncByTime(2300).then((e) => __awaiter(this, void 0, void 0, function* () {
                        PlayManager.showTxt("对比不同的视力问题下", "#000000");
                        yield Utils.asyncByTime(2000);
                        PlayManager.showTxt("近处的猫咪和远处的风景", "#000000");
                        yield Utils.asyncByTime(2500);
                        PlayManager.showTxt("有什么不同呢？", "#000000");
                        yield Utils.asyncByTime(2500);
                        PlayManager.showTxt("");
                    }));
                    Laya.SoundManager.playSound("sound/g3.mp3");
                    let centerYuan = wrapCenter1.getChildByName("yuan");
                    let centerJin = wrapCenter1.getChildByName("jin");
                    yield Utils.asyncByTime(4300);
                    yield Utils.asyncTween(centerJin, { alpha: 0 }, 300);
                    yield Utils.asyncTween(centerJin, { alpha: 1 }, 300);
                    yield Utils.asyncTween(centerJin, { alpha: 0 }, 300);
                    yield Utils.asyncTween(centerJin, { alpha: 1 }, 300);
                    yield Utils.asyncByTime(300);
                    yield Utils.asyncTween(centerYuan, { alpha: 0 }, 300);
                    yield Utils.asyncTween(centerYuan, { alpha: 1 }, 300);
                    yield Utils.asyncTween(centerYuan, { alpha: 0 }, 300);
                    yield Utils.asyncTween(centerYuan, { alpha: 1 }, 300);
                    yield Utils.asyncByTime(2000);
                    yield Utils.asyncTween(wrapCenter1, { scaleX: 0.53, scaleY: 0.53 }, 500);
                    Utils.asyncTween(wrapCenter1, { x: 482 }, 600);
                    yield Utils.asyncTween(wrapCenter3, { x: 1453 }, 600);
                    yield Utils.asyncByTime(500);
                    spJin.visible = true;
                    spJin.scale(378 / 375, 378 / 375);
                    spJin.alpha = 0;
                    yield Utils.asyncTween(wrapCenter1, { y: 345 }, 500);
                    shapeJin.visible = true;
                    yield Utils.asyncTween(spJin, { alpha: 1 }, 500);
                    wrapCenter1.visible = false;
                    Laya.SoundManager.playSound("sound/js.mp3");
                    yield Utils.asyncByTime(500);
                    spYuan.visible = true;
                    spYuan.alpha = 0;
                    yield Utils.asyncTween(wrapCenter2, { y: 345 }, 500);
                    shapeYuan.visible = true;
                    yield Utils.asyncTween(spYuan, { alpha: 1 }, 500);
                    wrapCenter2.visible = false;
                    Laya.SoundManager.playSound("sound/ys.mp3");
                    yield Utils.asyncByTime(500);
                    spSan.visible = true;
                    spSan.alpha = 0;
                    yield Utils.asyncTween(wrapCenter3, { y: 345 }, 500);
                    shapeSan.visible = true;
                    yield Utils.asyncTween(spSan, { alpha: 1 }, 500);
                    wrapCenter3.visible = false;
                    Laya.SoundManager.playSound("sound/sg.mp3");
                    yield Utils.asyncByTime(1001);
                }
                this.changeStep(1);
            });
        }
        changeStep(step) {
            return __awaiter(this, void 0, void 0, function* () {
                let spJin = this.wrap.getChildByName("spJin");
                let spYuan = this.wrap.getChildByName("spYuan");
                let spSan = this.wrap.getChildByName("spSan");
                this.step = step;
                let btnLeft = this.wrap.getChildByName("btnLeft");
                btnLeft.visible = this.step != 1;
                let hint = this.wrap.getChildByName("hint");
                let hand = hint.getChildByName("hand");
                hint.visible = this.flagWithHint && this.step == 1;
                if (step == 1) {
                    this.canHideHint = false;
                    let ffMove = () => __awaiter(this, void 0, void 0, function* () {
                        yield Utils.asyncTween(hand, { rotation: -33 }, 1000);
                        yield Utils.asyncTween(hand, { rotation: 0 }, 1000);
                        yield ffMove();
                    });
                    Laya.Tween.clearAll(hand);
                    ffMove();
                    spJin.disabled = spYuan.disabled = spSan.disabled = true;
                    let btnRight = this.wrap.getChildByName("btnRight");
                    btnRight.visible = true;
                    PlayManager.showTxt("");
                }
                else {
                    PlayManager.showTxt("");
                }
                if (step > 2) {
                    PlayManager.goNext();
                }
            });
        }
    }

    class Bar extends Laya.Sprite {
        constructor() {
            super();
            this.type = 1;
            this.disabled = false;
            this.cutCount = 20;
            this.count = 1;
        }
        onEnable() {
            let point = this.getChildByName("point");
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
        changeView(percent) {
            let count = Math.round(percent * (this.cutCount - 1));
            console.log(count);
            if (this.count == count) {
                return;
            }
            this.count = count;
            let circle = this.getChildByName("circle");
            if (this.type == 1) {
                let img = circle.getChildByName("img");
                img.skin = `img/jinshi/img_jinshi${count + 1}.png`;
            }
            else if (this.type == 2) {
                let img = circle.getChildByName("img");
                img.skin = `img/yuanshi/img_yuanshi${count + 1}.png`;
            }
            else if (this.type == 3) {
                let jin = circle.getChildByName("jin");
                let jin1 = circle.getChildByName("jin1");
                let yuan = circle.getChildByName("yuan");
                let yuan1 = circle.getChildByName("yuan1");
                jin1.alpha = percent * 0.8;
                jin.alpha = 1;
                yuan1.alpha = percent * 0.8;
                yuan.alpha = 1;
            }
        }
    }

    class Progress extends Laya.Script {
        constructor() {
            super();
            this.min = 0;
            this.max = 0;
            this._disabled = false;
            this._value = 0;
        }
        set disabled(flag) {
            let point = this.owner.getChildByName("point");
            let bubble = point.getChildByName("bubble");
            let num = point.getChildByName("num");
            num.visible = bubble.visible = flag;
            this._disabled = flag;
        }
        get disabled() {
            return this._disabled;
        }
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
            let point = this.owner.getChildByName("point");
            point.x = (this.owner.width * (val - this.min)) / (this.max - this.min);
            let num = point.getChildByName("num");
            num.text = val > 0 ? "+" + val : "" + val;
            this._value = val;
        }
        set value(val) {
            if (!this.disabled) {
                return;
            }
            this.setValue(val);
        }
        onEnable() {
            let flagDown = false;
            let point = this.owner.getChildByName("point");
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
                    let val1 = this.min + ((this.max - this.min) * pos.x) / this.owner.width;
                    let count = Math.round(val1 / 50);
                    this.value = count * 50;
                }
            });
        }
        onDisable() { }
    }

    class Page15 extends PageBase {
        constructor() {
            super();
            this.leftTopAnimating = false;
            this.step = 1;
            this.leftTopScaleSm = 0.34;
            this.flagGlassMoved = false;
            this.flagAnimatingWin = false;
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                this.initCalculate();
                let btnLeft = this.getChildByName("btnLeft");
                let btnRight = this.getChildByName("btnRight");
                btnLeft.on(Laya.Event.CLICK, this, e => {
                    this.changeStep(1);
                });
                btnRight.on(Laya.Event.CLICK, this, e => {
                    this.changeStep(this.step + 1);
                });
                let leftTop = this.getChildByName("leftTop");
                let leftTopBg = leftTop.getChildByName("bg");
                let btnHelp = leftTop.getChildByName("btnHelp");
                let bgInner = this.wrap.getChildByName("bg");
                btnHelp.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    if (this.step == 1) {
                        return;
                    }
                    Laya.View.open(`pages/page14.scene`, false, { noHint: true });
                }));
                bgInner.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    if (this.step == 1 || this.step == 5) {
                        return;
                    }
                    this.toggleLeftTop();
                }));
                leftTopBg.on(Laya.Event.CLICK, this, e => {
                    if (this.step == 1) {
                        return;
                    }
                    this.toggleLeftTop(true);
                });
                this.changeStep(1);
            });
        }
        toggleLeftTop(flag, withAni = true) {
            return __awaiter(this, void 0, void 0, function* () {
                let leftTop = this.getChildByName("leftTop");
                let bgInner = this.wrap.getChildByName("bg");
                if (this.leftTopAnimating) {
                    return;
                }
                this.leftTopAnimating = true;
                if (flag == undefined) {
                    flag = leftTop.scaleX != 1;
                }
                if (!flag) {
                    yield Utils.asyncTween(leftTop, {
                        scaleX: this.leftTopScaleSm,
                        scaleY: this.leftTopScaleSm,
                        x: 220,
                        y: 220
                    }, withAni ? 400 : 0);
                    if (withAni) {
                        bgInner.visible = false;
                    }
                }
                else {
                    if (withAni) {
                        bgInner.visible = true;
                    }
                    yield Utils.asyncTween(leftTop, {
                        scaleX: 1,
                        scaleY: 1,
                        x: this.width / 2,
                        y: this.height / 2
                    }, withAni ? 400 : 0);
                }
                this.leftTopAnimating = false;
            });
        }
        resetData() {
            this.prgL1.setValue(0);
            this.prgR1.setValue(0);
            this.prgL2.setValue(0);
            this.prgR2.setValue(0);
            this.prgL1.disabled = this.prgL2.disabled = this.prgR1.disabled = this.prgR2.disabled = false;
        }
        lightToggle() {
            return __awaiter(this, void 0, void 0, function* () {
                let calWrap = this.wrap.getChildByName("calculate");
                let light1 = calWrap.getChildByName("light1");
                let light2 = calWrap.getChildByName("light2");
                yield Utils.asyncByTime(300);
                light1.skin = light2.skin = "img/img_last_light1.png";
                yield Utils.asyncByTime(300);
                light1.skin = light2.skin = "img/img_last_light0.png";
                yield Utils.asyncByTime(300);
                light1.skin = light2.skin = "img/img_last_light1.png";
                yield Utils.asyncByTime(300);
                light1.skin = light2.skin = "img/img_last_light0.png";
                yield Utils.asyncByTime(300);
                light1.skin = light2.skin = "img/img_last_light1.png";
            });
        }
        moveGlass(type, withAni) {
            return __awaiter(this, void 0, void 0, function* () {
                let mapX = {
                    1: 167,
                    2: 1030,
                    3: 1521
                };
                let glass = this.wrap.getChildByName("glass");
                let lunLeft = this.wrap.getChildByName("lunLeft");
                let lunRight = this.wrap.getChildByName("lunRight");
                lunLeft.rotation = 0;
                lunRight.rotation = 0;
                let dir = mapX[type] - glass.x > 0 ? 1 : -1;
                let time = (mapX[type] - glass.x) * 3.5;
                Laya.SoundManager.playSound("sound/trans.mp3");
                if (withAni) {
                    Utils.asyncTween(lunLeft, { rotation: dir * 760 }, time);
                    Utils.asyncTween(lunRight, { rotation: dir * 760 }, time);
                }
                yield Utils.asyncTween(glass, { x: mapX[type] }, withAni ? time : 0);
                Laya.SoundManager.stopSound("sound/trans.mp3");
            });
        }
        changeStep(step) {
            return __awaiter(this, void 0, void 0, function* () {
                let calWrap = this.wrap.getChildByName("calculate");
                let tui = calWrap.getChildByName("tui");
                let btnLeft = this.getChildByName("btnLeft");
                let btnRight = this.getChildByName("btnRight");
                let wrapWin = this.getChildByName("wrapWin");
                let hand = this.wrap.getChildByName("hand");
                let bgInner = this.wrap.getChildByName("bg");
                hand.visible = false;
                wrapWin.visible = false;
                btnRight.visible = false;
                btnLeft.visible = false;
                bgInner.visible = false;
                let light1 = calWrap.getChildByName("light1");
                let light2 = calWrap.getChildByName("light2");
                let leftTop = this.getChildByName("leftTop");
                leftTop.scaleX = leftTop.scaleY = this.leftTopScaleSm;
                leftTop.pos(220, 220);
                bgInner.visible = false;
                if (step == 1) {
                    this.step = 1;
                    light1.skin = light2.skin = "img/img_last_light0.png";
                    this.cameraIn(false, false);
                    this.moveGlass(1, false);
                    this.resetData();
                    yield this.doHint();
                    btnLeft.visible = true;
                    leftTop.zOrder = 10;
                    return;
                }
                else if (step == 2) {
                    light1.skin = light2.skin = "img/img_last_light0.png";
                    btnLeft.visible = true;
                    this.moveGlass(1, false);
                    this.resetData();
                    hand.visible = true;
                    leftTop.zOrder = 10;
                }
                else if (step == 3) {
                    yield this.moveGlass(2, true);
                    yield this.lightToggle();
                    yield this.cameraIn(true);
                    this.step = step;
                    this.changeStep(4);
                    return;
                }
                else if (step == 4) {
                    btnLeft.visible = true;
                    this.resetData();
                    this.prgL1.disabled = this.prgL2.disabled = this.prgR1.disabled = this.prgR2.disabled = true;
                    leftTop.zOrder = 10;
                }
                else if (step == 5) {
                    btnLeft.visible = false;
                    let bgInner = this.wrap.getChildByName("bg");
                    bgInner.alpha = 0.8;
                    bgInner.zOrder = 10;
                    let btnAgain = wrapWin.getChildByName("btnAgain");
                    let bg = wrapWin.getChildByName("bg");
                    let btnBack = wrapWin.getChildByName("btnBack");
                    let light = wrapWin.getChildByName("light");
                    light.visible = false;
                    Laya.Tween.clearAll(light);
                    let flagTrue = this.resultTrue;
                    let leftTop = this.getChildByName("leftTop");
                    Laya.timer.clearAll(bg);
                    if (!flagTrue) {
                        let err = Laya.SoundManager.playSound("sound/err.mp3", 0);
                        bg.skin = "img/img_error_up.png";
                        btnBack.skin = `img/img_btnBack_blue.png`;
                        Laya.timer.loop(600, bg, () => {
                            let isDown = bg.skin == "img/img_error_down.png";
                            bg.skin = `img/img_error_${isDown ? "up" : "down"}.png`;
                        });
                    }
                    else {
                        bg.skin = "img/img_win_bg.png";
                        btnBack.visible = false;
                        light.visible = true;
                        let err = Laya.SoundManager.playSound("sound/make.mp3");
                        Utils.toggleSkin(light, "img/img_win_glass3.png", "img/img_win_glass2.png", 300, 0);
                        yield this.lightToggle();
                        yield this.cameraIn(false);
                        yield this.moveGlass(3, true);
                    }
                    leftTop.zOrder = 0;
                    leftTop.parent.setChildIndex(leftTop, 1);
                    this.flagAnimatingWin = true;
                    bgInner.visible = true;
                    wrapWin.visible = true;
                    if (flagTrue) {
                        Laya.SoundManager.playSound("sound/success.mp3");
                        Laya.SoundManager.playSound("sound/success1.mp3");
                        yield Utils.asyncByTime(4000);
                        PlayManager.goNext();
                    }
                }
                this.step = step;
            });
        }
        cameraIn(flag, withAni = true) {
            return __awaiter(this, void 0, void 0, function* () {
                let leftTop = this.getChildByName("leftTop");
                if (flag) {
                    leftTop.zOrder = 100;
                    if (withAni) {
                        Utils.asyncByTime(500).then(e => {
                            Laya.SoundManager.playSound("sound/bigger.mp3");
                        });
                    }
                    yield Utils.asyncTween(this.wrap, { scaleX: 1.69, scaleY: 1.69, centerX: -200, centerY: -275 }, withAni ? 800 : 0);
                }
                else {
                    leftTop.zOrder = 0;
                    yield Utils.asyncTween(this.wrap, { scaleX: 1, scaleY: 1, centerX: 0, centerY: 0 }, withAni ? 800 : 0);
                }
                console.log(leftTop.zOrder);
            });
        }
        showWin() {
            let bgInner = this.wrap.getChildByName("bg");
            let wrapWin = this.getChildByName("wrapWin");
            wrapWin.visible = true;
            bgInner.visible = true;
            bgInner.alpha = 0.8;
            bgInner.skin = "test/img_ffffff.png";
        }
        doHint() {
            return __awaiter(this, void 0, void 0, function* () {
                let bgInner = this.wrap.getChildByName("bg");
                bgInner.visible = true;
                bgInner.alpha = 0.4;
                let calculate = this.wrap.getChildByName("calculate");
                PlayManager.showTxt("根据小T的视力检测单", "#000000");
                Laya.SoundManager.playSound("sound/34.mp3");
                let leftTop = this.getChildByName("leftTop");
                leftTop.zOrder = 100;
                yield Utils.asyncTween(leftTop, { alpha: 0.4 }, 500);
                yield Utils.asyncTween(leftTop, { alpha: 1 }, 500);
                yield Utils.asyncTween(leftTop, { alpha: 0.4 }, 500);
                yield Utils.asyncTween(leftTop, { alpha: 1 }, 500);
                yield Utils.asyncByTime(500);
                leftTop.zOrder = 0;
                leftTop.parent.setChildIndex(leftTop, 1);
                console.log(leftTop.zOrder, "orrrr");
                PlayManager.showTxt("调节机器的数值", "#000000");
                calculate.zOrder = 100;
                yield Utils.asyncTween(calculate, { alpha: 0.4 }, 500);
                yield Utils.asyncTween(calculate, { alpha: 1 }, 500);
                yield Utils.asyncTween(calculate, { alpha: 0.4 }, 500);
                yield Utils.asyncTween(calculate, { alpha: 1 }, 500);
                calculate.zOrder = 0;
                calculate.zOrder = 0;
                let glass = this.wrap.getChildByName("glass");
                yield Utils.asyncByTime(800);
                PlayManager.showTxt("制作出合适小T佩戴的眼睛", "#000000");
                glass.zOrder = 9;
                glass.skin = "img/img_glass1.png";
                yield Utils.asyncByTime(300);
                glass.skin = "img/img_glass0.png";
                yield Utils.asyncByTime(300);
                glass.skin = "img/img_glass1.png";
                yield Utils.asyncByTime(300);
                glass.skin = "img/img_glass0.png";
                yield Utils.asyncByTime(500);
                glass.zOrder = 0;
                glass.parent.setChildIndex(glass, 1);
                PlayManager.showTxt("");
                bgInner.visible = false;
                PlayManager.showTxt("");
                this.changeStep(2);
            });
        }
        ffUpdatePrg(value) {
            let wrapCal = this.wrap.getChildByName("calculate");
            let moveBar = wrapCal.getChildByName("moveBar");
            let min = 263;
            let max = 791;
            moveBar.y = min + ((max - min) * value) / 400;
            let txt = moveBar.getChildByName("num");
            txt.text = value + "";
        }
        get resultTrue() {
            let flagTrue = false;
            if (this.prgL1.value == -300 &&
                this.prgL2.value == 0 &&
                this.prgR1.value == 150 &&
                this.prgR2.value == 100) {
                flagTrue = true;
            }
            return flagTrue;
        }
        initCalculate() {
            return __awaiter(this, void 0, void 0, function* () {
                let calWrap = this.wrap.getChildByName("calculate");
                let tui = calWrap.getChildByName("tui");
                tui.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    if (this.step != 2) {
                        return;
                    }
                    Laya.SoundManager.playSound("sound/la.mp3");
                    this.changeStep(3);
                }));
                let wrapPrgL1 = calWrap.getChildByName("prgL1");
                this.prgL1 = wrapPrgL1.getComponent(Progress);
                let wrapPrgL2 = calWrap.getChildByName("prgL2");
                this.prgL2 = wrapPrgL2.getComponent(Progress);
                let wrapPrgR1 = calWrap.getChildByName("prgR1");
                this.prgR1 = wrapPrgR1.getComponent(Progress);
                let wrapPrgR2 = calWrap.getChildByName("prgR2");
                this.prgR2 = wrapPrgR2.getComponent(Progress);
                let btnSure = calWrap.getChildByName("btnSure");
                btnSure.on(Laya.Event.MOUSE_DOWN, this, e => {
                    btnSure.skin = "img/img_btn_sure_down.png";
                });
                btnSure.on(Laya.Event.MOUSE_UP, this, e => {
                    btnSure.skin = "img/img_btn_sure_up.png";
                });
                let wrapWin = this.getChildByName("wrapWin");
                let bgInner = this.wrap.getChildByName("bg");
                btnSure.on(Laya.Event.CLICK, this, e => {
                    if (this.step != 4) {
                        console.log(this.step);
                        return;
                    }
                    this.changeStep(5);
                });
                let btnBack = wrapWin.getChildByName("btnBack");
                let btnAgain = wrapWin.getChildByName("btnAgain");
                btnBack.on(Laya.Event.CLICK, this, e => {
                    console.log("backkkkk", this.resultTrue);
                    Laya.SoundManager.stopSound("sound/err.mp3");
                    if (!this.resultTrue) {
                        this.changeStep(4);
                    }
                    else {
                        this.changeStep(2);
                    }
                });
                btnAgain.on(Laya.Event.CLICK, this, e => {
                    PlayManager.restart();
                });
            });
        }
        submit() { }
    }

    var EventDispatcher = Laya.EventDispatcher;
    class EventManager extends EventDispatcher {
        static pub(InName, agv) {
            EventManager.eventDispatcher.event(InName, agv);
        }
        static sub(InName, caller, listener, arg) {
            EventManager.eventDispatcher.on(InName, caller, listener, arg == null ? null : [arg]);
        }
        static unSub(caller) {
            EventManager.eventDispatcher.offAllCaller(caller);
        }
    }
    EventManager.eventDispatcher = new EventDispatcher();
    window["EventManager"] = EventManager;

    class Page16 extends PageBase {
        constructor() {
            super();
            this.currentQuesIdx = 1;
            this.configAnswer = {};
            this.quesMap = {
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
            this.countTure = 0;
            this.showingStar = false;
        }
        onDisable() {
            Laya.SoundManager.stopAllSound();
            Laya.timer.clearAll(Utils);
            Laya.timer.clearAll(this);
            EventManager.unSub(this);
        }
        resetData() {
            let wrapQues = this.wrap.getChildByName("wrapQues");
            let listQues = wrapQues.getChildByName("list");
            listQues["_cells"].forEach((cell, idx2) => {
                let imgTrue = cell.getChildByName("imgTrue");
                let imgWrong = cell.getChildByName("imgWrong");
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
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                this.resetData();
                let wrapResult = this.wrap.getChildByName("wrapResult");
                let btnAgain = wrapResult.getChildByName("btnAgain");
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
                let btnBack = wrapResult.getChildByName("btnBack");
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
                let txt1 = this.wrap.getChildByName("txt1");
                let wrapQues = this.wrap.getChildByName("wrapQues");
                let listQues = wrapQues.getChildByName("list");
                listQues.renderHandler = Laya.Handler.create(this, this.listQuesRender);
                listQues.array = this.configAnswer[this.currentQuesIdx];
                yield Utils.asyncByTime(1000);
                txt1.skin = "last/img_txt2.png";
                Laya.SoundManager.playSound("sound/last/back.mp3");
                yield Utils.asyncByTime(3800);
                txt1.visible = false;
                wrapQues.visible = true;
                this.nextQues(1);
            });
        }
        doAnswer({ result, idx }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (result) {
                    this.countTure++;
                }
                let wrapQues = this.wrap.getChildByName("wrapQues");
                let bubble = wrapQues.getChildByName("bubble");
                bubble.visible = true;
                this.configAnswer[this.currentQuesIdx].forEach(item => {
                    item.disabled = false;
                });
                let listQues = wrapQues.getChildByName("list");
                listQues["_cells"].forEach((cell, idx2) => {
                    let imgTrue = cell.getChildByName("imgTrue");
                    let imgWrong = cell.getChildByName("imgWrong");
                    if (idx == cell.dataSource.idx) {
                        imgWrong.visible = !result;
                    }
                    if (cell.dataSource.idx == cell.dataSource.answerTrue) {
                        imgTrue.visible = true;
                    }
                });
                Laya.SoundManager.playSound(this.quesMap[this.currentQuesIdx].sound2);
                yield Utils.asyncByTime(this.quesMap[this.currentQuesIdx].delay2);
                listQues["_cells"].forEach((cell, idx2) => {
                    let imgTrue = cell.getChildByName("imgTrue");
                    let imgWrong = cell.getChildByName("imgWrong");
                    imgTrue.visible = false;
                    imgWrong.visible = false;
                });
                this.nextQues();
            });
        }
        listQuesRender(item, idx) {
            let data = item.dataSource;
        }
        showStar() {
            return __awaiter(this, void 0, void 0, function* () {
                let wrapResult = this.wrap.getChildByName("wrapResult");
                let listStar = wrapResult.getChildByName("listStar");
                this.showingStar = true;
                listStar.removeChildren();
                for (let i = 0; i < 3; i++) {
                    let star = new Laya.Image(`last/img_star${i < this.countTure ? "1" : "0"}.png`);
                    star.pivot(star.width / 2, star.height / 2);
                    star.pos(103 + 242 * i, 111);
                    listStar.addChild(star);
                    star.scale(0, 0);
                    yield Utils.asyncTween(star, { scaleX: 1, scaleY: 1 }, 300);
                }
                this.showingStar = false;
            });
        }
        nextQues(idx, flagTrue) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!idx) {
                    this.currentQuesIdx++;
                }
                else {
                    this.currentQuesIdx = idx;
                }
                let txt1 = this.wrap.getChildByName("txt1");
                let wrapQues = this.wrap.getChildByName("wrapQues");
                let wrapResult = this.wrap.getChildByName("wrapResult");
                let listQues = wrapQues.getChildByName("list");
                let ques = wrapQues.getChildByName("ques");
                let quesBg = this.wrap.getChildByName("bg");
                let bubble = wrapQues.getChildByName("bubble");
                bubble.visible = false;
                txt1.visible = false;
                wrapQues.visible = true;
                quesBg.visible = true;
                wrapResult.visible = false;
                if (this.currentQuesIdx > 3) {
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
                yield Utils.asyncByTime(this.quesMap[this.currentQuesIdx].delay1);
                this.configAnswer[this.currentQuesIdx].forEach(item => {
                    item.disabled = true;
                });
            });
        }
        chooseAnswer(answerId) { }
    }

    class ItemLastChooseItem extends Laya.Box {
        constructor() {
            super();
            this.currentIdx = 0;
        }
        onEnable() {
            let btnSound = this.getChildByName("btnSound");
            btnSound.on(Laya.Event.CLICK, this, e => {
                Laya.SoundManager.stopAllSound();
                Laya.SoundManager.playSound(this.dataSource.sound);
            });
            let btnCheck = this.getChildByName("btnCheck");
            btnCheck.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                if (!this.dataSource.disabled) {
                    return;
                }
                this.dataSource.answered = true;
                let flagTrue = this.dataSource.idx == this.dataSource.answerTrue;
                EventManager.pub("last/answer", {
                    idx: this.dataSource.idx,
                    result: flagTrue
                });
            }));
        }
    }

    class Page2 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                for (let index = 0; index < 5; index++) {
                    let newton = this.wrap.getChildByName(`newton${index + 1}`);
                    newton.visible = true;
                    yield Utils.asyncByTime(500);
                    if (index < 4) {
                        newton.visible = false;
                    }
                }
                let screen = this.wrap.getChildByName('tv');
                screen.visible = true;
                yield Utils.asyncTween(screen, { y: 12 }, 1000);
                let xbox = this.wrap.getChildByName('xbox');
                let newton7 = xbox.getChildByName('newton7');
                for (let indent = 0; indent < 800; indent += 20) {
                    xbox.height = indent;
                    yield Utils.asyncByTime(200);
                }
                yield Utils.asyncByTime(1000);
                newton7.visible = true;
                yield Utils.asyncByTime(500);
                newton7.visible = false;
                yield Utils.asyncByTime(500);
                newton7.visible = true;
                yield Utils.asyncByTime(500);
                newton7.visible = false;
                yield Utils.asyncByTime(500);
                newton7.visible = true;
                yield Utils.asyncByTime(2000);
                PlayManager.goNext();
            });
        }
    }

    class Page3 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                let gamebgWrap = this.wrap.getChildByName('gamebg');
                let newtonsWrap = this.wrap.getChildByName('newtons');
                let optsWrap = this.wrap.getChildByName('opts');
                yield Utils.asyncByTime(1000);
                let newton1 = newtonsWrap.getChildByName('newton1');
                let newton11 = newtonsWrap.getChildByName('newton11');
                let newton2 = newtonsWrap.getChildByName('newton2');
                let newton22 = newtonsWrap.getChildByName('newton22');
                newton11.visible = true;
                yield Utils.asyncByTime(500);
                newton11.visible = false;
                yield Utils.asyncByTime(1000);
                optsWrap.visible = true;
                let optCircle = optsWrap.getChildByName('optcircle');
                let optJump = optsWrap.getChildByName('optjump');
                let jumpFlag = false;
                optJump.on(Laya.Event.MOUSE_DOWN, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    if (jumpFlag)
                        return;
                    jumpFlag = true;
                    newton1.visible = false;
                    newton2.visible = true;
                    if (newtonsWrap.x > 400 && newtonsWrap.x < 540) {
                        let box1 = gamebgWrap.getChildByName('boxes1');
                        if (box1.visible) {
                            let box1open = gamebgWrap.getChildByName('openbox1');
                            let brain = gamebgWrap.getChildByName('brain');
                            let optsBrain = optsWrap.getChildByName('optbrain');
                            yield Utils.asyncByTime(200);
                            box1.visible = false;
                            box1open.visible = true;
                            newton22.visible = true;
                            yield Utils.asyncByTime(200);
                            brain.visible = true;
                            optsBrain.visible = true;
                            newton22.visible = false;
                            yield Utils.asyncByTime(200);
                            newton22.visible = true;
                            yield Utils.asyncByTime(200);
                            newton22.visible = false;
                        }
                    }
                    if (newtonsWrap.x > 1144 && gamebgWrap.x > -80) {
                    }
                    yield Utils.asyncByTime(200);
                    newton2.visible = false;
                    newton1.visible = true;
                    jumpFlag = false;
                }));
                let moveFlag = false;
                optCircle.on(Laya.Event.MOUSE_DOWN, this, e => {
                    let pos = new Laya.Point(e.stageX, e.stageY);
                    cachePosX = pos.x;
                    moveFlag = true;
                });
                let cachePosX = 175;
                Laya.stage.on(Laya.Event.MOUSE_UP, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    moveFlag = false;
                    optCircle.x = 175;
                    cachePosX = 175;
                    if (gamebgWrap.x == -1540) {
                        yield Utils.asyncByTime(1000);
                        PlayManager.goNext();
                    }
                }));
                let getDirection = (e) => {
                    let pos = new Laya.Point(e.stageX, e.stageY);
                    return pos.x >= cachePosX;
                };
                let changeView = () => __awaiter(this, void 0, void 0, function* () {
                    if (!moveFlag) {
                        return;
                    }
                    ;
                    if (optCircle.x == 255) {
                        if (newtonsWrap.x > 1180) {
                            if (gamebgWrap.x > -1530) {
                                gamebgWrap.x -= 10;
                            }
                            else {
                                gamebgWrap.x = -1540;
                            }
                        }
                        else {
                            newtonsWrap.x += 10;
                        }
                    }
                    if (optCircle.x == 93) {
                        if (newtonsWrap.x >= 1180) {
                            if (gamebgWrap.x < -10) {
                                gamebgWrap.x += 10;
                            }
                            else {
                                gamebgWrap.x = 0;
                            }
                        }
                        else if (newtonsWrap.x > 0) {
                            newtonsWrap.x -= 10;
                        }
                        else {
                            newtonsWrap.x = 0;
                        }
                    }
                    yield Utils.asyncByTime(100);
                    changeView();
                });
                let changePos = (e) => {
                    if (moveFlag) {
                        let pos = new Laya.Point(e.stageX, e.stageY);
                        let direction = getDirection(e);
                        if (direction) {
                            optCircle.x = pos.x < 255 ? 255 : 255;
                        }
                        else {
                            optCircle.x = pos.x > 93 ? 93 : 93;
                        }
                        changeView();
                        console.log(e, 'e');
                    }
                };
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, Utils.throttle(changePos, 500, {}));
            });
        }
    }

    class Page4 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                this.wrap = this.getChildByName('wrap');
                let box1Wrap = this.wrap.getChildByName('box41');
                let box2Wrap = this.wrap.getChildByName('box42');
                let point = box1Wrap.getChildByName('point');
                yield Utils.asyncByTime(500);
                point.visible = false;
                yield Utils.asyncByTime(500);
                point.visible = true;
                yield Utils.asyncByTime(500);
                point.visible = false;
                yield Utils.asyncByTime(500);
                point.visible = true;
                yield Utils.asyncByTime(500);
                box1Wrap.visible = false;
                yield Utils.asyncByTime(500);
                box2Wrap.visible = true;
                yield Utils.asyncByTime(500);
                let newton1 = box2Wrap.getChildByName('banshen');
                let newton2 = box2Wrap.getChildByName('kulou');
                let qipao = box2Wrap.getChildByName('qipao');
                let tou = box2Wrap.getChildByName('tou');
                let yb = box2Wrap.getChildByName('yellow');
                let pb = box2Wrap.getChildByName('pink');
                newton1.visible = false;
                newton2.visible = true;
                yield Utils.asyncByTime(500);
                newton1.visible = true;
                newton2.visible = false;
                yield Utils.asyncByTime(500);
                newton1.visible = false;
                newton2.visible = true;
                yield Utils.asyncByTime(500);
                newton1.visible = true;
                newton2.visible = false;
                yield Utils.asyncByTime(500);
                yield Utils.asyncTween(newton1, { x: 40 }, 1000);
                qipao.visible = true;
                yield Utils.asyncByTime(200);
                tou.visible = true;
                yield Utils.asyncByTime(200);
                pb.visible = true;
                yield Utils.asyncByTime(200);
                yb.visible = true;
                yield Utils.asyncByTime(500);
                yb.visible = false;
                yield Utils.asyncByTime(200);
                yb.visible = true;
                yield Utils.asyncByTime(500);
                yb.visible = false;
                yield Utils.asyncByTime(1000);
                PlayManager.goNext();
            });
        }
    }

    class Page5 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.showTxt("瞳孔可以调节进入眼球的光线量", "#000000");
                Laya.SoundManager.playSound("sound/15.mp3");
                let inner = this.wrap.getChildByName("inner");
                yield Utils.toggleSkin(inner, "img/img_circle2.png", "img/img_circle3.png", 300, 4);
                yield Utils.asyncByTime(2500);
                Laya.SoundManager.playSound("sound/16.mp3");
                PlayManager.showTxt("当光线较弱时");
                Utils.asyncByTime(2000).then(e => {
                    PlayManager.showTxt("瞳孔会放大");
                });
                let moon = this.wrap.getChildByName("moon");
                let sun = this.wrap.getChildByName("sun");
                let bgInner = this.wrap.getChildByName("bg");
                moon.visible = true;
                bgInner.visible = true;
                yield Utils.asyncByTime(1700);
                yield Utils.asyncTween(inner, { scaleX: 0.7, scaleY: 0.7 }, 1000);
                yield Utils.asyncByTime(1000);
                moon.visible = false;
                sun.visible = true;
                bgInner.alpha = 0;
                Laya.SoundManager.playSound("sound/17.mp3");
                PlayManager.showTxt("当光线较强时", "#000000");
                Utils.asyncByTime(1800).then(e => {
                    PlayManager.showTxt("瞳孔会缩小", "#000000");
                });
                yield Utils.asyncByTime(700);
                yield Utils.asyncByTime(1000);
                yield Utils.asyncTween(inner, { scaleX: 0.2, scaleY: 0.2 }, 1000);
                yield Utils.asyncByTime(1000);
                PlayManager.goNext();
            });
        }
    }

    class Page6 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                let ani = (yield Utils.createDragonBone("dragonbone/logo.sk"));
                this.wrap.addChildAt(ani, 0);
                ani.play("huangdong", true);
                ani.pos(this.wrap.width / 2, 300);
                PlayManager.showTxt("");
                Laya.SoundManager.playSound("sound/18.mp3");
                let btnRight = this.wrap.getChildByName("btnRight");
                btnRight.on(Laya.Event.CLICK, this, e => {
                    console.log(PlayManager.currentPage);
                    PlayManager.goNext();
                });
                yield Utils.asyncByTime(6000);
                btnRight.visible = true;
            });
        }
    }

    class Page7 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.showTxt("人类的瞳孔是圆形的", "#000000");
                Laya.SoundManager.playSound("sound/19.mp3");
                yield Utils.asyncByTime(3000);
                let sheep = this.wrap.getChildByName("sheep");
                sheep.visible = true;
                sheep.alpha = 0;
                sheep.scaleX = sheep.scaleY = 0;
                PlayManager.showTxt("当你仔细观察动物的瞳孔时会发现", "#000000");
                Laya.SoundManager.playSound("sound/20.mp3");
                let eye = this.wrap.getChildByName("eye");
                Utils.asyncTween(eye, { alpha: 0 }, 2000);
                yield Utils.asyncTween(sheep, { scaleX: 1, scaleY: 1, alpha: 1 }, 2000);
                let sheepEye = sheep.getChildByName("eye");
                yield Utils.asyncByTime(2000);
                PlayManager.showTxt("羊的瞳孔是水平的横条状", "#000000");
                Laya.SoundManager.playSound("sound/21.mp3");
                yield Utils.toggleSkin(sheepEye, "img/img_sheep_eye0.png", "img/img_sheep_eye1.png", 300, 4);
                let wrapSheepEye = this.wrap.getChildByName("eye2");
                wrapSheepEye.pos(1115, 552);
                wrapSheepEye.scale(0.086, 0.086);
                wrapSheepEye.rotation = -26;
                wrapSheepEye.visible = true;
                Utils.asyncTween(sheep, { alpha: 0 }, 1500);
                yield Utils.asyncTween(wrapSheepEye, { rotation: 0, scaleX: 1, scaleY: 1, x: 961, y: 540 }, 1500);
                yield Utils.asyncByTime(1000);
                PlayManager.showTxt("", "#000000");
                let wrapCat = this.wrap.getChildByName("cat");
                wrapCat.scale(0.5, 0.5);
                wrapCat.alpha = 0;
                wrapCat.visible = true;
                Utils.asyncTween(wrapSheepEye, { alpha: 0 }, 2000);
                yield Utils.asyncTween(wrapCat, { scaleX: 1, scaleY: 1, alpha: 1 }, 2000);
                PlayManager.showTxt("而猫的瞳孔", "#000000");
                Laya.SoundManager.playSound("sound/22.mp3");
                let catEye = wrapCat.getChildByName("eye");
                yield Utils.toggleSkin(catEye, "img/img_cat_eye0.png", "img/img_cat_eye1.png", 300, 4);
                yield Utils.asyncByTime(500);
                let wrapCatEye = this.wrap.getChildByName("eye3");
                wrapCatEye.pos(1091, 560);
                wrapCatEye.scale(0.13, 0.13);
                wrapCatEye.visible = true;
                Utils.asyncTween(wrapCat, { alpha: 0 }, 1000);
                yield Utils.asyncTween(wrapCatEye, { scaleX: 1, scaleY: 1, x: 961, y: 540 }, 1000);
                PlayManager.showTxt("在收缩时会变成垂直的竖条状", "#000000");
                let eyeCatInner = wrapCatEye.getChildByName("eye");
                yield Utils.asyncTween(eyeCatInner, { scaleX: 0.2, scaleY: 1.3 }, 1000);
                yield Utils.asyncByTime(1000);
                PlayManager.showTxt("");
                let topM = wrapCatEye.getChildByName("bg");
                yield Utils.asyncTween(topM, {
                    x: 295,
                    y: 43,
                    scaleY: 0.15,
                    scaleX: 1.23
                });
                Utils.asyncTween(eyeCatInner, {
                    x: 294,
                    y: 242,
                    scaleY: 0.17,
                    scaleX: 1.27
                });
                let ani = (yield Utils.createDragonBone("dragonbone/T.sk"));
                this.wrap.addChildAt(ani, 1);
                ani.pos(wrapCatEye.x, wrapCatEye.y);
                wrapCatEye.visible = false;
                ani.play("bianse", false);
                yield Utils.asyncByTime(1000);
                ani.play("bianxing", false);
                yield Utils.asyncByTime(1000);
                ani.visible = false;
                let wrapM = this.wrap.getChildByName("wrapM");
                wrapM.visible = true;
                PlayManager.showTxt("视力", "#000000");
                Laya.SoundManager.playSound("sound/23.mp3");
                let right = wrapM.getChildByName("left");
                let left = wrapM.getChildByName("right");
                Utils.asyncTween(left, { height: 442 }, 1000);
                yield Utils.asyncTween(right, { height: 442 }, 1000);
                PlayManager.showTxt("是一个人能够分辨影像的能力", "#000000");
                Utils.asyncByTime(3000).then(e => {
                    PlayManager.showTxt("");
                });
                yield Utils.asyncTween(wrapM, { scaleX: 0, scaleY: 0 }, 500);
                let wrapListM = this.wrap.getChildByName("wrapListM");
                for (let i = 1; i < 13; i++) {
                    let spM = wrapListM.getChildByName("M" + i);
                    spM.alpha = 0;
                    spM.scale(0, 0);
                }
                wrapListM.visible = true;
                for (let i = 1; i < 13; i++) {
                    let spM = wrapListM.getChildByName("M" + i);
                    Utils.asyncTween(spM, { scaleX: 1, scaleY: 1, alpha: 1 }, 800);
                    let startY = spM.y;
                    let ffMove = () => __awaiter(this, void 0, void 0, function* () {
                        yield Utils.asyncTween(spM, { y: startY + 20 }, 2000);
                        yield Utils.asyncTween(spM, { y: startY }, 2000);
                        yield ffMove();
                    });
                    ffMove();
                    yield Utils.asyncByTime(400);
                }
                PlayManager.showTxt("");
                PlayManager.goNext();
            });
        }
    }

    class Page8 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                let baby = this.wrap.getChildByName("baby");
                PlayManager.showTxt("新生儿的世界是一片模糊的", "#000000");
                Laya.SoundManager.playSound("sound/25.mp3");
                baby.rotation = -180;
                baby.y = 58;
                yield Utils.asyncTween(baby, {
                    y: 300
                }, 500);
                yield Utils.asyncTween(baby, {
                    y: 570,
                    rotation: 0
                }, 1000);
                let babyBlur = this.wrap.getChildByName("babyBlur");
                Utils.asyncTween(baby, { alpha: 0 }, 1500);
                yield Utils.asyncTween(babyBlur, { alpha: 1 }, 1500);
                yield Utils.asyncByTime(500);
                PlayManager.goNext();
                PlayManager.showTxt("");
            });
        }
    }

    class Page9 extends PageBase {
        constructor() {
            super();
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                PlayManager.showTxt("六岁左右");
                Utils.asyncByTime(1000).then(e => {
                    PlayManager.showTxt("儿童的视力发展到趋于成人的水平");
                });
                Utils.asyncByTime(4900).then(e => {
                    PlayManager.showTxt("单眼裸视可达到1.0");
                });
                Laya.SoundManager.playSound("sound/26.mp3");
                let monkey = this.wrap.getChildByName("monkey");
                let girl = this.wrap.getChildByName("girl");
                let arm = this.wrap.getChildByName("arm");
                let bubbleGirl = this.wrap.getChildByName("bubbleGirl");
                let bubbleMonkey = this.wrap.getChildByName("bubbleMonkey");
                yield Utils.asyncByTime(500);
                yield Utils.asyncByTime(500);
                monkey.skin = "img/img_monkey1.png";
                yield Utils.asyncByTime(200);
                monkey.skin = "img/img_monkey0.png";
                yield Utils.asyncByTime(200);
                monkey.skin = "img/img_monkey1.png";
                yield Utils.asyncByTime(200);
                monkey.skin = "img/img_monkey0.png";
                yield Utils.asyncByTime(1500);
                Utils.asyncByTime(30);
                yield Utils.asyncTween(arm, { rotation: -54 }, 400);
                yield Utils.asyncByTime(500);
                bubbleGirl.visible = true;
                yield Utils.asyncByTime(2000);
                bubbleMonkey.visible = true;
                yield Utils.asyncByTime(1700);
                PlayManager.goNext();
            });
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("page/page1.ts", Page1);
            reg("page/page10.ts", Page10);
            reg("page/page11.ts", Page11);
            reg("page/page12.ts", Page12);
            reg("page/page13.ts", Page13);
            reg("page/page14.ts", Page14);
            reg("components/Bar.ts", Bar);
            reg("page/page15.ts", Page15);
            reg("components/Progress.ts", Progress);
            reg("page/page16.ts", Page16);
            reg("components/ItemLastChooseItem.ts", ItemLastChooseItem);
            reg("page/page2.ts", Page2);
            reg("page/page3.ts", Page3);
            reg("page/page4.ts", Page4);
            reg("page/page5.ts", Page5);
            reg("page/page6.ts", Page6);
            reg("page/page7.ts", Page7);
            reg("page/page8.ts", Page8);
            reg("page/page9.ts", Page9);
        }
    }
    GameConfig.width = 1921;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "pages/page3.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class LoadingManager {
        static get list() {
            return this._list;
        }
        static loadSingle(call = () => { }) { }
        static loadFontList(arr) {
            arr.forEach(name => {
                this.loadFont(name);
            });
        }
        static loadFont(name) {
            var bitmapFont = new Laya.BitmapFont();
            bitmapFont.loadFont("font/" + name + ".fnt", new Laya.Handler(this, e => {
                this.onFontLoaded(e, name);
            }, [bitmapFont]));
        }
        static onFontLoaded(bitmapFont, name) {
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
                    Laya.loader.load(this.list, Laya.Handler.create(this, () => {
                        rsv();
                    }), Laya.Handler.create(null, e => {
                        this.progress = e;
                    }, null, false));
                }
                else {
                    rsv();
                }
            });
        }
    }
    LoadingManager.moduleList = [];
    LoadingManager._list = [];
    LoadingManager.progress = 0;

    class Main {
        constructor() {
            window["EventManager"] = EventManager;
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            return __awaiter(this, void 0, void 0, function* () {
                let flagRotate = Laya.Browser.clientWidth < Laya.Browser.clientHeight;
                let img = new Image();
                img.src = `img/img_tv_gif${flagRotate ? "2" : ""}.gif?time=${new Date().getTime()}`;
                img.onload = () => {
                    img.className = "loaded";
                };
                document.body.appendChild(img);
                PlayManager.gifImg = img;
                window["PlayManager"] = PlayManager;
                yield LoadingManager.startLoad();
                yield PlayManager.start();
            });
        }
        audioAutoPlay() {
            let ffAutoPlay = () => {
                Laya.SoundManager.playMusic("sound/blank.mp3");
                document.addEventListener("WeixinJSBridgeReady", () => {
                    Laya.SoundManager.playMusic("sound/blank.mp3");
                }, false);
            };
            if (window["domLoaded"]) {
                ffAutoPlay();
                console.log(1);
            }
            else {
                document.addEventListener("DOMContentLoaded", function () {
                    ffAutoPlay();
                    console.log(2);
                });
            }
        }
    }
    new Main();

}());
