class Student {
    constructor(name, age, cls) {
        this.myname = name;
        this.myage = age;
        this.myclass = cls;
    }

    // instance method
    biodata() {
        return (this.myname + " " + this.myage + " " + this.myclass)
    }

    // static method
    static secret() {
        console.log("this can't be inherited");
    }
}

class Player extends Student {
    constructor(name, age, cls, game) {
        super(name, age, cls);
        this.mygame = game;
    }
    player_biodata() {
        console.log(`${super.biodata()}`);
        console.log(this.myname + " " + this.myage + " " + this.myclass + " " + this.mygame)
    }

}

const obj1 = new Player('kv', 32, '10th', 'football');
const obj2 = new Student('D', 90, '12th');
obj1.player_biodata();
// obj2.biodata();