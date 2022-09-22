// Intializiation tests
const Employee = require("../lib/Employee");

describe("Employee", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = new Employee(nameInput);

        expect(object.name == 'Bob').toEqual(true);
        })

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Employee('Bob', idInput);
            expect(object.id == '0935').toEqual(true);
        })
        //one more in same style
    });

})

    // Testing the constructor

// A test for each function