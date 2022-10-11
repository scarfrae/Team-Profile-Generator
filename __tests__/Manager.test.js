const Manager = require("../lib/Manager");

describe("Intern", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = Manager(nameInput);

        expect(object.name == 'Bob').toEqual(true);
        })

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Manager('Bob', idInput);
            expect(object.id == '0935').toEqual(true);
        })
        //for get office num etc.
        // it("should also have an office number property", () => {
        //     const OfficeNumInput = '0935';
        //     const object = new Manager('Bob', OfficeNumInput);
        //     expect(object.OfficeNumber == '0935').toEqual(true);
        // })
        //one more in same style
    });

})