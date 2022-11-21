const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = new Engineer(nameInput);

        expect(object.name).toEqual('Bob');
        })
    });
    //test for id
    describe("ID", () => {

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Engineer('Bob', idInput);
            expect(object.id).toEqual('0935');
        })
        
    });
    describe("Email", () => {
        it("should also have an email property", () => {
            const emailinput = 'myemail@gmail.com';
            const object = new Engineer('Bob', 2, emailinput);
            expect(object.email).toBe('myemail@gmail.com');
        })
    });
    
})