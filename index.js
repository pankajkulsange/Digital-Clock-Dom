// finding elements
let clock1 = document.getElementsByClassName("b");
let option = document.getElementsByTagName("option");
let GM = document.getElementsByClassName("breakfast");
let AM = document.getElementsByClassName("AM");

let photo = document.getElementsByClassName("image");
let MG = document.getElementsByClassName("GM");
let morn = document.getElementById("change1");
let aft = document.getElementById("change2");
let eve = document.getElementById("change3");
let night = document.getElementById("change4");

let party = document.getElementById("party");

// image
function image() {
  let time = new Date();
  let hours = time.getHours();
  //   let hours = 9;
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  if (hours >= 10 && hours <= 11) {
    GM[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    photo[0].style.backgroundImage = "url('./Component 30 – 1.jpg')";
  } else if (hours >= 12 && hours <= 15) {
    GM[0].innerText = "LET HAVE SOME LUNCH";
    photo[0].style.backgroundImage = "url('./Component 31 – 1.jpg')";
  } else if (hours >= 16 && hours <= 19) {
    GM[0].innerText = "STOP YAWNING, GET SOME TEA... ITS JUST EVENING";
    photo[0].style.backgroundImage = "url('./lunch_image.jpg')";
  } else {
    GM[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    photo[0].style.backgroundImage = "url('./goodnight_image.jpg')";
  }
}
image();

// timer
function callme() {
  let time = new Date();
  let hours = time.getHours();
  //   let hours = 9;
  let mins = time.getMinutes();
  let secs = time.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
    AM[0].innerText = "PM";
  } else {
    AM[0].innerHTML = "AM";
  }

  let timezone = ` ${hours} Hours `;
  let timezone1 = ` ${mins} Mins`;
  let timezone2 = ` ${secs} Secs`;
  clock1[0].innerText = timezone;
  clock1[1].innerText = timezone1;
  clock1[2].innerText = timezone2;
}

setInterval(() => {
  callme();
}, 1000);

party.addEventListener("mouseover", () => {
  party.innerText = "Party Time!";
});

party.addEventListener("mouseout", () => {
  party.innerText = "Set Alarm";
});

// settalarm
function settalarm() {
  let time = new Date();
  let hours = time.getHours();

  let wakeTime =
    document.getElementById("change1").options[
      document.getElementById("change1").selectedIndex
    ].text;
  let lunchTime =
    document.getElementById("change2").options[
      document.getElementById("change2").selectedIndex
    ].text;
  let napTime =
    document.getElementById("change3").options[
      document.getElementById("change3").selectedIndex
    ].text;
  let nightTime =
    document.getElementById("change4").options[
      document.getElementById("change4").selectedIndex
    ].text;

  // Update the text content of the guide div
  document.getElementById("wakeTime").textContent = wakeTime;
  document.getElementById("lunchTime").textContent = lunchTime;
  document.getElementById("napTime").textContent = napTime;
  document.getElementById("nightTime").textContent = nightTime;

  if (hours === parseInt(morn.value)) {
    MG[0].innerText = "GOOD MORNING!!WAKE UP!!";
    GM[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    photo[0].style.backgroundImage = "url('./Component 30 – 1.jpg')";
  } else if (hours === parseInt(aft.value)) {
    MG[0].innerText = "GOOD AFTERNOON!! TAKE SOME SLEEP";
    GM[0].innerText = "LETS HAVE SOME LUNCH";
    photo[0].style.backgroundImage = "url('./Component 31 – 1.jpg')";
  } else if (hours === parseInt(eve.value)) {
    MG[0].innerText = "GOOD EVENING!!";
    GM[0].innerText = "STOP YAWNING, GET SOME TEA... ITS JUST EVENING";
    photo[0].style.backgroundImage = "url('./lunch_image.jpg')";
  } else if (hours === parseInt(night.value)) {
    MG[0].innerText = "GOOD NIGHT!!";
    GM[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    photo[0].style.backgroundImage = "url('./goodnight_image.jpg')";
  }
}
