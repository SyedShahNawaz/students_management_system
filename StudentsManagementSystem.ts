import inquirer from "inquirer"
class Student{

    name: string;
    id: number;
    static sdudentId: number = 10000;
    course: string[]=[];
    balance: number=0;
    constructor(name:string){
        this.name=name;
        this.id =++Student.studentId
    }
    viewBalance(){
        console.log('Student ${this.name} has a balance of ${this.balance}')
    }
    showStatus(){
        console.log('
        Student : ${this.name}
        course :${this.course.join(',')} this.course enrolled
        student Id: ${Student.studentId}
        Balance : ${this.balance}
        ')
    }
    depositFee(amount : number){
        if(amount>0){
            this.balance+=amount;
            console.log('student ${this.name} has been credited with ${amount}')
        }else{
            console.log('invalid amount')
        }
        }
    paytuitionFees(amount:number){
        if(this.balance>=amount){
            this.balance-=amount;
            console.log('Student ${this.name} has paid ${amount}')
        }else{
            console.log('Student ${this.name} has insufficient balance')
        }
    }
    enroll(course:string){
        this.course.push(course);
    }
    }
    (async function main(){
        let students : Student[] = []
        let condition = true;
        while(condition){
            let{choice} = await inquirer.prompt([
                {
                name: "choice",
                type: "list",
                messege: "Select an option",
                choice:[
                    "Adda anew student",
                    "Enroll a student in a course",
                    "Deposite amount to account",
                    "View a student's balance",
                    "Pay tuition fees",
                    "Show student status",
                    "Exit",
                ]
                }
            ])
        switch(choice){
            case "Add n new student":
                let{name}= await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        messege:"Enter student name",
                    }
                ])
        let student = new Student(name);
        students.push(student);
        console.log('Student ${name} has been added');
        break;
            case "Enroll a student in a course":
                let{studId1,course} = await inquirer.prompt([
                    {
                        name: "stdId1",
                        type: "input",
                        messege: "Enter student Id"
                    },
                    {
                        name: "course",
                        type: "input",
                        messege: "Enter course name"
                    }
                ])
        let selectedObj1 = students.find(a=>a.id==StudId1)
        console.log(selectedObj1)
        if(selectedObj1){
            selectedObj1.enroll(course)
            console.log('Student ${selectedObj1.name} has been enrolled in ${course}')
        }else{
            console.log("Student ID not found")
        }

        }

        }
    })
}