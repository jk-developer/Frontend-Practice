const sortingByAge = require("./app");

test("Testing if the first user is Shiva after sorting", () => {
    const sortedData = sortingByAge();
    expect(sortedData[0].name).toBe("Shiva");
})

test("Testing if the last user is Shiva after sorting", () => {
    const sortedData = sortingByAge();
    expect(sortedData[sortedData.length - 1].name).toBe("Jitendra Kumar");
})

test("Testing if the sorted data has length of 6", () => {
    const sortedData = sortingByAge();
    expect(sortedData.length).toBe(6);
})