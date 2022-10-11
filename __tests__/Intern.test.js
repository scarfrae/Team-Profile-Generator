const Intern = require("../lib/Intern");

describe("Intern", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = Intern(nameInput);

        expect(object.name == 'Bob').toEqual(true);
        })

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Intern('Bob', idInput);
            expect(object.id == '0935').toEqual(true);
        })
        //for get office num etc.
        // it("should also have a school property", () => {
        //     const SchoolInput = 'Mount Vernon High School';
        //     const object = new Intern('Bob', SchoolInput);
        //     expect(object.school == 'Mount Vernon High School').toEqual(true);
        // })
        //one more in same style
    });

})