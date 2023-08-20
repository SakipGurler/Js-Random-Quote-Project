const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const button = document.querySelector(".button")
const url = "https://api.quotable.io/random"

let getQuote = () => {
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        quote.textContent = `${data.content}`
        author.textContent = `${data.author}`
    })
    .catch((err)=> console.log(err))
}

button.addEventListener('click',getQuote)

getQuote()

