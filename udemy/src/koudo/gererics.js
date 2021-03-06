"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const echo = (arg: number): number => {
//   return arg;
// };
// const echo = (arg: string): string => {
//   return arg;
// };
// 上記の二つの関数でジェネリクスで定義する。
var echo = function (arg) {
    return arg;
};
console.log(echo(100));
console.log(echo('hello'));
console.log(echo(true));
var Mirror = /** @class */ (function () {
    function Mirror(value) {
        this.value = value;
    }
    Mirror.prototype.echo = function () {
        return this.value;
    };
    return Mirror;
}());
console.log(new Mirror(123).echo());
console.log(new Mirror('geberics').echo());
console.log(new Mirror(true).echo());
