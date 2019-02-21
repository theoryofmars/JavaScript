let conCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)
    return celsius 
}

let conKelvin = function (fahrenheit) {
    let kelvin = (fahrenheit + 459.67) * (5 / 9)
    return kelvin
}

let celsius1 = conCelsius(32)
let celsius2 = conCelsius(68)
let kelvin1 = conKelvin(32)
let kelvin2 = conKelvin(68)

console.log(celsius1)
console.log(celsius2)
console.log(kelvin1)
console.log(kelvin2)