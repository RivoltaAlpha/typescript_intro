class Animals{
    name: string;
    gender: string;

    constructor(name:string, gender:string) {
        this.name = name
        this.gender = gender  
    }

    identifyAnimal(): void {
        console.log(`The Animal ${this.name} is of gender ${this.gender}`)
    }
}

class Cats extends Animals {
    age: number;

    constructor(age:number,name:string, gender:string) {
        super(name, gender);
        this.age = age;
    }

    identifyAnimal(): void {
        console.log(`The Cat${this.name} is of ${this.gender} gender and is of age ${this.age}`)
    }
}

const testsubject = new Cats(2, "Puppy", "Female")
// const testsubject = new Animals( "Puppy", "Female")
testsubject.identifyAnimal()