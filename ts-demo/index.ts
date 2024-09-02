let str: string = '东东';

let num: number = NaN;
let num2: number = Infinity;  // 无穷大

let hex: number = 0xf00d;
// 编写其他进制
let binary: number = 0b1010;
let octal: number = 0o744;
let decimal: number = 15;
let b1: boolean = true;
let b2: boolean = false;
let n: null = null;
let un: undefined = undefined;

let v1: void = null;        // 可以修改tsconfig.json里的strict的值
let v2: void = undefined;

let a: undefined = undefined;
let n2: null = null;
n2 = a;
a = n2;



// =====================================================

console.log(str);
console.log(num);
console.log(num2);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(decimal);


