const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    //test for name
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = new Engineer(nameInput);

        expect(object.name == 'Bob').toEqual(true);
        })

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Engineer('Bob', idInput);
            expect(object.id == '0935').toEqual(true);
        })
        // //for github
        // it("should also have an github property", () => {
        //     const githubInput = '0935';
        //     const object = new Engineer('Bob', githubInput);
        //     expect(object.github == '0935').toEqual(true);
        // })
        //one more in same style
    });

})