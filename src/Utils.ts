export default class Utils {
  static asyncTween(
    target,
    to,
    duration = 1000,
    easeFunc = Laya.Ease.linearNone
  ) {
    return new Promise((rsv, rej) => {
      Laya.Tween.to(
        target,
        to,
        duration,
        easeFunc,
        Laya.Handler.create(this, () => {
          rsv();
        })
      );
    });
  }
  static asyncByTime(time) {
    return new Promise(rsv => {
      Laya.timer.once(time, this, () => {
        rsv();
      });
    });
  }
  static createDashLines(
    node: Laya.Sprite,
    startX,
    startY,
    endX,
    endY,
    each = 2,
    space = 1,
    color = "#000000",
    lineWidth = 2
  ) {
    let distance = Math.sqrt(
      Math.pow(endY - startY, 2) + Math.pow(endX - startX, 2)
    );
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
  static async toggleSkin(node: Laya.Image, skin1, skin2, delay, maxCount = 5) {
    let count = 0;
    let ffChange = async () => {
      count++;
      node.skin = node.skin == skin1 ? skin2 : skin1;
      await Utils.asyncByTime(delay);
      if (!maxCount || count < maxCount) {
        await ffChange();
      }
    };
    await ffChange();
  }
  static createDragonBone(url) {
    return new Promise(rsv => {
      var skeleton: Laya.Skeleton = new Laya.Skeleton();
      //通过加载直接创建动画
      skeleton.load(
        url,
        Laya.Handler.create(this, () => {
          rsv(skeleton);
        })
      );
    });
  }
  static showDashAni(
    wrap: Laya.Sprite,
    pointsList: Array<Laya.Point>,
    eachCall = idx => { },
    eachLen = 40,
    color = "#000000",
    lineWidth = 2
  ) {
    let lastPoint = new Laya.Point(0, 0);
    let count = 0;
    let idx = -1;
    let countTotal = -1;
    let linesCache = [];

    let distance;
    let posStart;
    let posEnd;
    let funcUpdate = async () => {
      if (count > countTotal) {
        idx++;
        await eachCall(idx);
        if (idx + 1 > pointsList.length - 1) {
          return;
        }
        count = 0;
        posStart = pointsList[idx];
        posEnd = pointsList[idx + 1];
        distance = Math.sqrt(
          Math.pow(posEnd.y - posStart.y, 2) +
          Math.pow(posEnd.x - posStart.x, 2)
        );
        countTotal = Math.ceil(distance / eachLen);
        if (linesCache.length == 0) {
          //没有存过的时候把第一个点存进去
          linesCache.push(posStart);
        }
      }

      let x =
        posStart.x + (count * eachLen * (posEnd.x - posStart.x)) / distance;
      let y =
        posStart.y + (count * eachLen * (posEnd.y - posStart.y)) / distance;
      if (countTotal == count) {
        x = posEnd.x;
        y = posEnd.y;
      }
      if (count == 1) {
        linesCache.push(new Laya.Point(x, y));
      } else {
        linesCache[linesCache.length - 1] = new Laya.Point(x, y);
      }
      linesCache.forEach((point, idx) => {
        let pointNext = linesCache[idx + 1];
        if (pointNext) {
          this.createDashLines(
            wrap,
            point.x,
            point.y,
            pointNext.x,
            pointNext.y,
            16,
            8,
            color,
            lineWidth
          );
        }
      });
      count++;
      Laya.timer.once(60, this, async e => {
        await funcUpdate();
      });
    };

    funcUpdate();
  }
  static throttle(func, wait, options) {
    let timeout, context, args, result;
    let previous = 0;
    if (!options) options = {};

    let later = function () {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
    };

    let throttled = function () {
      let now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
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
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
    };
    return throttled;
  }
}
