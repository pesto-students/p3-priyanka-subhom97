class Person{
    constructor (name){
        this.name=name;
    }
    getname(){
        return this.name;
    }
}
class Teacher extends Person{
    constructor(name,subject){
        super(name);
        this.subject=subject;
    }
    teach(){
        console.log(super.getname()+' '+'is now teaching'+' '+this.subject);
    }
}

const T=new Teacher('Ana','Maths');
T.teach();
