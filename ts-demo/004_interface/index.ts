namespace module_001_接口类型 {
    interface Person {
        name: string;
    }

    interface Person {      // 相同接口可以合并属性
        Ikun: string;
    }

    let a: Person = {       // 定义的对象必须拥有对应的属性，不能少
        name: '张三',
        Ikun: '蔡徐坤'
    }
}