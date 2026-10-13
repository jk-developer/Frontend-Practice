const data = [
    {
        name: "Jitendra Kumar",
        age: 28
    },
    {
        name: "Narender Kumar",
        age: 22
    },
    {
        name: "Ranjan Kumar",
        age: 26
    },
    {
        name: "Neha",
        age: 27
    },
    {
        name: "Satvik",
        age: 2
    },
    {
        name: "Shiva",
        age: 1
    }
]
function sortingByAge() {
    const sortedData = data.sort((a, b) => a.age - b.age)
    return sortedData
    console.log(sortedData)
}

console.log(sortingByAge())

module.exports = sortingByAge;