/**
 * base.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */

let Base = {};

Base = {
  
  getWinSize: function() {
   let w = window, inner = 'inner';
      if (!('innerWidth' in w )){
          inner = 'client';
          w = document.documentElement || document.body;
      }
      return { width:w[inner+'Width'], height:w[inner+'Height'] };
  },
  
  getScroll(){
    const doc = document;
    const scrollLeft = doc.body.scrollTop || doc.documentElement.scrollTop|| window.pageXOffset;
    const scrollTop = doc.body.scrollLeft || doc.documentElement.scrollLeft|| window.pageYOffset;
    return {
      X: scrollLeft,
      Y: scrollTop
    }
  },
   /**
   * 绑定事件
   * @param  {object}   element dom
   * @param  {string}   type    事件名
   * @param  {function} fn      回调函数
   */
  addEvent: function(element, type, fn) {
    var _addEvent = null;
    if (element.addEventListener) {
        _addEvent = function(element, type, fn){
        element.addEventListener(type, fn, false);
      }
    } else {
      if (element.attachEvent) {
        _addEvent = function(element, type, fn){
          element.attachEvent('on' + type, fn);
        }
      } else {
        _addEvent = function(element, type, fn){
          element['on' + type] = fn;
        }
      }
    }
    _addEvent(element, type, fn);
    this.addEvent = _addEvent;
  },
  /**
   * 移除绑定的事件
   * @param  {object}   element dom
   * @param  {string}   type    事件名
   * @param  {function} fn      回调函数
   */
  removeEvent: function(element, type, fn) {
    var _removeEvent = null;
    if (element.removeEventListener) {
      _removeEvent = function(element, type, fn){
        element.removeEventListener(type, fn, false);
      }
    } else {
      if (element.detachEvent) {
        _removeEvent = function(element, type, fn){
          element.detachEvent('on' + type, fn);
        }
      } else {
        _removeEvent = function(element, type, fn){
          element['on' + type] = null;
        }
      }
    }
    _removeEvent(element, type, fn);
    this.removeEvent = _removeEvent;
  },
  
  //去掉字符串首尾空格
  trim: function(str){
    if (String.prototype.trim) {
      return str.trim();
    }else{
      return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
  }
  
}

export default Base;