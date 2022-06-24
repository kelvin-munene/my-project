const cryptoCardTemplate = document.querySelector("[data-user-template]")
const dataCryptoCardsContainer = document.querySelector("[data-crypto-cards-container]")

let users =[]

fetch("https://api.coinlore.net/api/global/")
.then(res => res.json())
.then(data => {
    users = data.map(user=>{
         const card = cryptoCardTemplate.content.cloneNode(true).children[0]
         const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent= user.active_markets
        body.textContent= user.coins_count
        dataCryptoCardsContainer.append(card)
        return{
            name: user.name,element: card
        }
        
        
})     
})

const links = document.querySelectorAll(".scroll")
links.forEach((item)=>{
    item.addEventListener("click", () =>{
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({behaviour: "smooth", block:"center"})

        })
})