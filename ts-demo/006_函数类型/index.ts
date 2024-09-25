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

    // 4.定义函数this类型
    interface Obj {
        name:number[],
        add:(this:Obj,num:number) => void
    }
    // ts中可以定义函数this的类型,在js中无法使用 必须是第一个参数定义this的类型
    let obj:Obj = {
        name:[1,2,3],
        add(this:Obj,num:number){       // 指定第一个参数this的类型为Obj对象
            this.name.push(num)         // 这和this就可以调用自身的name属性(这里不定义也没有关系，只是没有代码提示而已)
        }
    }
    obj.add(4)
    console.log(obj);

    // 5.函数重载 (和Java几乎一样)
    let users:number[] = [1,2,3]
    function reload(id:number){
        
    }

    

    
    

    

}