import { _decorator, Component, Label } from "cc";
const { ccclass, property } = _decorator;
export enum EventType {
  SCROLL_START,
  SCROLL_ING,
  SCROLL_END,
  CLICK_CENTER,
}

@ccclass("Helloworld")
export default class Helloworld extends Component {
  @property(Label)
  label: Label | null = null;
  @property
  text: string = "hello";
  start() {
    // // init logic
    this.label.string = this.text;
  }

  select(e) {
    if (e.type === EventType.CLICK_CENTER) {
      console.info("center");
    }
    // if (e.type === EventType.SCROLL_START && e.index === this.lastSelectIndex) {
    //   console.info("big", this.lastSselectIndex);
    // }
  }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const {ccclass, property} = cc._decorator;
//
// @ccclass
// export default class Helloworld extends cc.Component {
//
//     @property(cc.Label)
//     label: cc.Label = null;
//
//     @property
//     text: string = 'hello';
//
//     start () {
//         // init logic
//         this.label.string = this.text;
//     }
// }
