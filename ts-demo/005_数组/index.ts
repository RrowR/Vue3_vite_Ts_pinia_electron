namespace module_001_数组 {
    let arr: number[] = [1, 2, 3];

    let arr2: Array<boolean> = [true, false];

    let arr3: Array<number> = [1, 2, 3];

    interface X {
        name: string,
        age?: number
    }

    let user: X = {
        name: "james",
        age: 15
    }

    // 数组类型的话直接在定义的接口右边类型里加一个[]即可 ---- 一维数组
    let arrs: X[] = [{ name: "哈哈哈", age: 11 }, { name: "大撒大撒", age: 123 }]

    // 三维数组
    let arrs3: number[][][] = [[[1]], [[2]]]
    let arrs3_1: Array<Array<Array<number>>> = [[[1]], [[2]]]     // 泛型的方式

    // 大杂烩数组
    let arrs4: any[] = [1, a, "dsa"]


    function a(...args: number[]) {
        // console.log(arguments);     // 类数组
        // let a: IArguments = arguments;
        let a: A = arguments;  // 等价于这个
        console.log(a);

    }

    a(1, 2, 3);

    interface A {
        callee: Function
        length: number
        [index: number]: any
    }

}

