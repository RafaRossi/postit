class Student
{
    constructor(name: string, age: number, isGraduated: boolean) {
        this.name = name;
        this.age = age;
        this.isGraduate = isGraduated;
    }
    
    private name: string = '';
    private age: number = 0;
    private isGraduate: boolean = false;
    
    public studentFormattedData() : string
    {
        return 'Nome: ' + this.name + ', Idade: ' + this.age;
    }
}

const student = new Student('Rafael', 24, true);

console.log(student.studentFormattedData())