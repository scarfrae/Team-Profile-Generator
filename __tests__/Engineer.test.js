const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const nameInput = 'Bob';
        const object = new Engineer(nameInput);

        expect(object.name).toEqual('Bob');
        })
    });
    describe("ID", () => {

        it("should also have an id property", () => {
            const idInput = '0935';
            const object = new Engineer('Bob', idInput);
            expect(object.id).toEqual('0935');
        })
        //one more in same style
    });
    //test for name
    
        // //for github
        // it("should also have an github property", () => {
        //     const githubInput = '0935';
        //     const object = new Engineer('Bob', githubInput);
        //     expect(object.github == '0935').toEqual(true);
        // })
        //one more in same style
   

})