namespace module_001_函数类型_定义函数的参数和返回值类型 {
    // 1.定义函数的参数和返回值类型
    function A(x: number): number {
        return Math.pow(x, 2);
    }

    console.log("A=" + A(2));

    // 2.函数的默认参数 | 函数的可选参数
    function B(x: number = 1, y: number = 2, z?: number): number {
        return x + y + z;
    }
    console.log(B(2, 3, 4));
    const B2 = (x: number, y?: number): number => x + y;
    console.log(B2(2, 5));

    // 3.参数为对象时，如何定义
    interface User {        // 定义一个对象接口
        name: string
        age?: number
    }

    function getUser(user: User): User {
        return user;
    }
    console.log(getUser({ name: "猫羽雫", age: 16 }));

    

}