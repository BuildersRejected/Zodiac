const calc = require('./calc.js');
//users = [];
class User {
    constructor (name,sign){
        //super();
        //find sign
        //sig = calc.findSign(bday);
        this.name = name;
        //this.age = age;
        this.sign = sign;
        //this(name,age,sign);
        //this.sign =
    }

}
//Main tool for zodiac info. this is platform independant.
//for discord it will be exported as a module to use with node.js
module.exports = {
    users: new Array(),
    addUser: function(name,sign) {
            let u  = new User(name,sign);
            this.users.push(u);
            console.log(name);
    },
    showUser: function(name) {
        for (i = 0;i < this.users.length; i++) {
            if (this.users[i].name.match(name)){
                return this.users[i].sign;
            }
        }
    },
    showUsers: function() {
        //console.log(this.users);
        //console.log(this.users[0].name);
        let ret = "";
        for (i = 0;i < this.users.length; i++) {
            console.log("for: " + this.users[i].name);
            ret += this.users[i].name + "\n";
        }
        console.log("ret"+ret);
        return ret;
    }
}
