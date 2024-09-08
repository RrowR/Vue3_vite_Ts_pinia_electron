namespace module_001_接口类型 {
    interface Person {
        name: string;
    }

    interface Person {      // 相同接口可以合并属性
        Ikun: string;
        [name: string]: any;          // 索引签名： 可选属性，properName为属性名，any为属性值类型
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