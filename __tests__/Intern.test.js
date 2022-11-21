const Intern = require("../lib/Intern");

describe("Intern", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = new Intern(nameInput);

        expect(object.name).toEqual('Bob');
        })
    });
    //test for id
    describe("ID", () => {

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Intern('Bob', idInput);
            expect(object.id).toEqual('0935');
        })
    });
    //test for email
    describe("Email", () => {
        it("should also have an email property", () => {
            const emailinput = 'myemail@gmail.com';
            const object = new Intern('Bob', 2, emailinput);
            expect(object.email).toBe('myemail@gmail.com');
        })
    });
    

})