let myBook = {
    title: "1984",
    author: "George Orwell",
    pages: 326
}

let otherBook = {
    title: "A People's History",
    author: "Howard Zinn",
    pages: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pages} pages long`
    }    
    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)


console.log(bookSummary.pageCountSummary)