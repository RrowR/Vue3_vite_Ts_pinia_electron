let b = 100;
console.log(b);

// 1. any unknown
// 2. Object
// 3.Number String Boolean
// 4.number string boolean
// 5. 1 'dd'  false
// 6.never


// any 就是任意类型,其实就是没有被ts限制,变成js
// export let a:any = 1;
// export let c:any = [];

// unknown只能给自身或者any类型复制
export let a: unknown = 1;
export let e: unknown = 1;
export let d: number = 1;
export let c: any = { 帅: true, open:()=> 123};
// e = a;
// d = a;   // 这里会报错
// c = a;
// unknown类型不能直接使用属性 方法也不可以调用
// let dongdong:unknown = {帅:true}
// dongdong.帅;    // 这里会报错

// 由于unknown 是不允许调用任何类型和方法的,所以更加安全
console.log(c.帅);
console.log(c.open());


