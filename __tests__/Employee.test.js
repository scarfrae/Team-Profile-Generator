// Intializiation tests
const Employee = require("../lib/Employee");

describe("Employee", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = new Employee(nameInput);

        expect(object.name).toEqual('Bob');
        })
    });
    //test for id
    describe("ID", () => {

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Employee('Bob', idInput);
            expect(object.id).toEqual('0935');
        })
        
    });

})
