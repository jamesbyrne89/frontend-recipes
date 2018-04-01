
describe("Multiply", function () {
    const multiply = (a, b) => {
        return a * b;
    }
    it("multiplies two numbers", function () {
        expect(multiply(2, 4)).toBe(6)
        console.log('Successfully multiplied')
    });
});