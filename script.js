function createGames(team1, hour, team2) {
    return `
    <li>
        <img src="./assets/icon=${team1}.svg" alt="${team1}">
        <strong>${hour}</strong>
        <img src="./assets/icon=${team2}.svg" alt="${team2}">
     </li>
     `
}

let delay = -0.2;
function createCard(date, day, game) {
    delay = delay + 0.2;
    return `
    <div class="card" style="animation-delay: ${delay}s">
       <h2>${date} <span>${day}</span></h2>

       <ul>
         ${game}
       </ul>
    </div>`
}


document.querySelector("#cards").innerHTML = 

          createCard("24/11" , "quinta" , createGames('brazil' , '16:00' , 'serbia')) +

          createCard("28/11" , "segunda" , createGames('brazil' , '13:00' , 'switzerland')) +

          createCard("02/11" , "sexta" ,  createGames('cameroon' , '16:00' , 'brazil'))