const obj = {
    name:'vaibhav',
    age: 20
};

const obj1 = {
    ...obj
}
obj.name = 'object1';
obj1.name='object2';

console.log(obj);
console.log(obj1);

const getCharCount = (str: string) => {
    const obj: { [key: string]: number } = {};
    // const order: string[] = [];
    const order: string[] = [...new Set(str.toLowerCase())];

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();

        // if (!obj[char]) {
        //     obj[char] = 1;
        //     order.push(char);
        // } else {
        //     obj[char]++;
        // }
        obj[char]= obj[char]? obj[char] + 1: 1;
    }
    // order.push(..._char);
    console.log(order, ' Obje=== ',obj)
    return order.map(char => char + obj[char]).join('');
};
const string='ssswwwhhhss';
console.log(getCharCount(string));


function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c        
        }
    }
}
console.log(add(1)(2)(3));

const arr =[1,[2,3],[4,5,6],[7,8,[10,[12,[101]]]]];
console.log(arr.flat(4));



    const Singleton = (() => {
        let instance: { name: string, getName: () => string } | null = null;

        const createInstance = () => {
            return {
                name: 'MySingleton',
                getName() {
                    return this.name;
                }
            };
        };

        return {
            getInstance: () => {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    })();

// ✅ Usage
const obj11 = Singleton.getInstance();
const obj12 = Singleton.getInstance();
console.log(obj11 === obj12); 
console.log(obj11.getName());


const Singleton2=(()=>{
    let instance;
    const createInstance = () => {
return {
    name: 'MySingleTon 2',
    getName() {
       return this.name;
    }
}
    }
return {
    getInstance:()=>{
        if(!instance){
            instance = createInstance();
        
        }
       
            return instance;
    
    }
}


})();

const instance12 = Singleton2.getInstance();
console.log(instance12.getName());