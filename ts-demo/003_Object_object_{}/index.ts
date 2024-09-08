namespace module_003_Object_object_对象类型 {
    let a: Object = {};
    let b: Object = '1';
    let c: Object = [];
    let d: Object = true;
    let e: Object = null;
    let f: Object = undefined;
    let g: Object = () => { };
}

namespace module_003_Object_object_对象类型_002 {
    let a: object = {};
    // let b: object = '1';   // 原始类型,错误
    let c: object = [];
    // let d: object = true;   // 原始类型,错误
    let e: object = null;
    let f: object = undefined;
    let g: Object = () => 123;
}

namespace module_003_Object_object_对象类型_003 {
    // 对象类型 {} 等价于 Object
    let a: {} = 123;

    let b: {} = { age: 1 }
    console.log(b.age);     // 无法访问
    b.age = 2;      // 无法赋值
}