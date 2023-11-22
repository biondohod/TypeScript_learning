class Job {
    constructor(private role: string, private salary: number) { }
    getSalary(): number {
        return this.salary;
    }

    work(personName: string): void {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}

class Person {
    private job?: Job;
    constructor(private name: string = 'Человек') {}

    setJob(job: Job): void {
        this.job = job;
    }

    getSalary(): number {
        if (!this.job) {
            console.log(`${this.name} не имеет работы`);
            return 0;
        }
        return this.job.getSalary();
    }

    work(): void {
        if (!this.job) {
            console.log(`${this.name} не имеет работы`);
        } else {
            this.job.work(this.name);
        }
    }
}

const teacher: Job = new Job('Учитель', 20000);
const driver: Job = new Job('Водитель', 10000);
const Andrey: Person = new Person('Андрей');
const Anton: Person = new Person('Антон');
Andrey.work();
console.log(Andrey.getSalary());
Anton.setJob(teacher);
Anton.work();
console.log(Anton.getSalary());
Anton.setJob(driver);
Anton.work();
console.log(Anton.getSalary());
