const Manager = require("../lib/Manager");

describe("Manager", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = new Manager(nameInput);

        expect(object.name).toEqual('Bob');
        })
    });
    //id test
    describe("ID", () => {

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Manager('Bob', idInput);
            expect(object.id).toEqual('0935');
        })
    
    });
    //email test
    describe("Email", () => {
        it("should also have an email property", () => {
            const emailinput = 'myemail@gmail.com';
            const object = new Manager('Bob', 2, emailinput);
            expect(object.email).toBe('myemail@gmail.com');
        })
    });
    //office number test
    describe("Office Number", () => {
        it("should also have an office number property", () => {
            const officeNumInput = '0935';
            const object = new Manager('Bob', 2, 'myemail@gmail.com', officeNumInput);
            expect(object.OfficeNumber).toBe('0935');
        })
    })
  

})