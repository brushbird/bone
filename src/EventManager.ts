import EventDispatcher = Laya.EventDispatcher;
export default class EventManager extends EventDispatcher {
  static eventDispatcher: EventDispatcher = new EventDispatcher();
  ///注册事件
  static pub(InName, agv?) {
    //派发事件
    // console.log("派发事件", InName);
    EventManager.eventDispatcher.event(InName, agv);
  }
  //侦听事件
  static sub(InName, caller, listener: Function, arg?: any[]): void {
    // console.log("侦听事件", InName);
    EventManager.eventDispatcher.on(
      InName,
      caller,
      listener,
      arg == null ? null : [arg]
    );
  }

  static unSub(caller) {
    EventManager.eventDispatcher.offAllCaller(caller);
  }
}
window["EventManager"] = EventManager;
