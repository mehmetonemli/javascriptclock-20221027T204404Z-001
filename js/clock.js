let fullname = prompt("Adınız nedir?")

let myname = document.querySelector("#myName")

myname.innerHTML = `${fullname}`

let days = [
    "Pazar",
    "Pazartesi",
    "Sali",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

function showTime() {

    const today = new Date();
    let d = days[today.getDay()]
    let h= today.getHours();
    let m= today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m)
    s = checkTime(s)
    h = checkTime(h)
    document.getElementById(`myClock`).innerHTML= h + ":" + m + ":" + s + " " + d ; 
    setTimeout(showTime, 1000);
}

   
function checkTime(i) {
    if (i<10) {i = 0 + i};
    return i ;

}
  
  showTime()