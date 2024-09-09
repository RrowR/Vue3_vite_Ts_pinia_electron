namespace module_001_接口类型 {
    interface Person {
        name: string;
    }

    interface Person {      // 相同接口可以合并属性
        Ikun: string;
        [nadsadame: string]: any;          // 索引签名： 可选属性，properName为属性名，any为属性值类型,这里如果value为string，其他属性也必须为string
    }

    let a: Person = {       // 定义的对象必须拥有对应的属性，不能少
        name: '张三',
        Ikun: '蔡徐坤',
        'age': 18,      // 这个是索引签名定义的属性
        'age2': 18,
        'age1': 18
    }
    console.log(a);
}

namespace module_002_接口继承_属性不确定_属性不能修改 {
    interface MyInterface extends MyInterface2 {     // 接口可以继承，和java一模一样
        name: string;
        readonly id: number;
        age?: number;        // 可选属性
        readonly mt: () => boolean;
    }

    interface MyInterface2 {
        xxx: string;
    }

    let user: MyInterface = {
        name: '张三',
        xxx: "231",
        id: 1,
        // age:18
        mt: () => false
    }
    console.log(user.id);       // 只读属性则不能修改
    // user.mt = () => true;       // 这里的函数被修改了
    console.log(user.mt());
}

namespace module_003_约束方法 {

    interface Fn {
        (a: number): string[];     // 函数类型约束
    }

    const fn:Fn = function (a: number) {        // 约束入参
        return ["1"];       // 约束返回值类型
    }

}
