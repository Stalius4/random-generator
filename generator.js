

const fruit = ["Pineapple", "Bannana", "Apple"]
const familyMember = ["Brother", "Sister", "Mother", "Father"]
const action = ["eating", "droped", "stealed", "holding"]


const randInt = (len) => {
    return Math.floor(Math.random() * len.length)
}

const generatrApp = () => {
    const randomFruit = fruit[randInt(fruit)]
    const randomMember = familyMember[randInt(familyMember)]
    const randomAction = action[randInt(action)]
    let result = `${randomMember} ${randomAction} the ${randomFruit}`
    return result
}

console.log(generatrApp())