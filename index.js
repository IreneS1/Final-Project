//separation icons

const dot = document.querySelector('p3');
let html ='';

for (let i = 0; i < 3; i++){
  html += `<div></div>`;  
}

dot.innerHTML = html;

// event listener on button to fetch bored api
let button = document.getElementById('search');
button.addEventListener('click', () => {
    fetch("https://www.boredapi.com/api/activity/")
        .then(response => {
            if (response.status === 404){
                alert('NOT FOUND');
            } else {
            response.json().then(data => {
                console.log(data);
                let activity = data.activity;
                let link = data.link;
                let participants = data.participants;
                let price = data.price;
                let type = data.type; 
                if (link === ""){
                    link = " no link needed";
                    document.getElementById('bored').innerHTML = `<b>Activity:</b> ${activity} <br>
                <b>Type of activity:</b> ${type} <br> <b>Link:</b>${link}<br>
                <b>Participants</b> ${participants} <br> <b>Price:</b> ${price}`
                } else {
                    link = link;
                    document.getElementById('bored').innerHTML = `<b>Activity:</b> ${activity} <br>
                <b>Type of activity:</b> ${type} <br> <b>Link:</b> <a href="${link}">${link}</a><br>
                <b>Participants</b> ${participants} <br> <b>Price:</b> ${price}`
                }
                
            })
            }
        })
})


