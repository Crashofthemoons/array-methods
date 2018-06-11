const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetString = (planet) => {
    const planetEl = document.getElementById("planets")
    const para = document.createElement('p')
    para.textContent = `${planet}`
    planetEl.appendChild(para)
}
planets.forEach(planetString)
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const propperPlanets = planets.map(function (planet) {
    const upperCasePlanet = planet.charAt(0).toUpperCase() + planet.slice(1)
    return upperCasePlanet
})

console.log(propperPlanets)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const theLetterE = planets.filter(planet => {
    const hasE = planet.includes('e')
        console.log(hasE)
    return hasE
})
console.log(theLetterE)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/



// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentenceOfWords = words.reduce(function (one, two){
    return `${one}  ${two}`
})

console.log(sentenceOfWords)