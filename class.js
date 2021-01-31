class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'C.P.S.C.R';
    }
}

const student1 = new Student(12, 'Hridi');
const student2 = new Student(22, 'Nishat');

console.log(student1.name, student2.school);
// console.log(student1, student2);