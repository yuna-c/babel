'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}// 코딩하는 파일
var Mover=function(){function a(b){_classCallCheck(this,a),this.color=b,this.elem=document.createElement('div'),this.elem.classList.add('mover','mover-'+b),this.elem.style.background=b,this.elem.addEventListener('click',this.go),document.body.appendChild(this.elem),this.go()}return _createClass(a,[{key:'go',value:function e(a){var b=a?a.currentTarget:this.elem;var c=.9*(Math.random()*innerWidth),d=.9*(Math.random()*innerHeight);b.style.transform='translate3d('+c+'px, '+d+'px, 0)'}},{key:'getColor',get:function a(){return this.color}},{key:'setColor',set:function b(a){this.color=a,this.elem.style.background=a}}],[{key:'sayHello',value:function a(){console.log('My name is Mover!!!!!??????')}}]),a}(),FastMover=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.elem.style.transitionDuration='0.3s',c}return _inherits(b,a),b}(Mover);