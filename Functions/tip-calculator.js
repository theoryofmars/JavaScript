let total = function (paid, tipPercent) {
    let percent = tipPercent * 100
    let totalAmount = paid * tipPercent
    return `A ${percent}% tip on $${paid} would be $${totalAmount}`
}

let result = total(20, .40)
console.log(result)


let totalBill = function (paid, tipPercent = .2) {
    return (paid * tipPercent) + paid
}

let result1 = totalBill(20, .40)
console.log(`The total amount of your bill with tip included is $${result1}`)