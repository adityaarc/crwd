let map;
let ltt;
let lngi;
var loclat =[23.417778976478935,23.416956174833647,23.41363875435298,23.41257120996481,23.410264553435745,23.4169550625844,23.41204021502413,23.423272075003478,23.419385265279764,23.416782361712567]
var loclong =[85.43411250687647,85.43580015192138,85.43609976659728,85.4417955432915,85.44026469132939,85.43825607680131,85.44118085109673,85.43279611655181,85.43333932531657,85.43806984952614]
var nam =[" PAHAN ", "MS xerozx ","Laxmi Canteen","Mahak","Veda","Food Cluster","Inner Circle", "TECHNOSOFT ", "CHHOTU DHABA","Paratha wala" ]

// CURRENT LOCATION

if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  
 ltt = parseFloat(position.coords.latitude);
 lngi =parseFloat(position.coords.longitude);

  
//  document.getElementById("lat").innerHTML=
  //  " Latitude : " + latitude;

    //document.getElementById("lon").innerHTML=
    //" Longitude : " + longitude;
}

function showError(error){
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

//MAP

function initMap() {

  
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat:23.41657,lng: 85.438170},
      zoom: 16,
    });

    /*
    new google.maps.Marker({
      position:  { lat: latitude, lng: longitude},
      map:map,
      title : "home",
      animation: google.maps.Animation.BOUNCE,
    });
*/

    new google.maps.Marker({
      position:  { lat: 23.41257120996481, lng: 85.4417955432915 },
      map:map,
      title : "Mehak",
      animation: google.maps.Animation.BOUNCE,
    });

    new google.maps.Marker({
      position:  { lat: 23.417778976478935, lng: 85.43411250687647 },
      map:map,
      title : "PAHAN",
      animation: google.maps.Animation.BOUNCE,
    });

    new google.maps.Marker({
      position:  { lat: 23.41363875435298, lng: 85.43609976659728 },
      map:map,
      title : "LAXMI",
      animation: google.maps.Animation.BOUNCE,
    });

    new google.maps.Marker({
      position:  { lat: 23.410264553435745, lng: 85.44026469132939 },
      map:map,
      title : "VEDA",
      animation: google.maps.Animation.BOUNCE,
    });

    new google.maps.Marker({
      position:  { lat:23.41204021502413, lng: 85.44118085109673 },
      map:map,
      title : "IC",
      animation: google.maps.Animation.BOUNCE,
    });

    new google.maps.Marker({
      position:  { lat: 23.419385265279764, lng: 85.43333932531657 },
      map:map,
      title : "CHOTU DHABA",
      animation: google.maps.Animation.BOUNCE,
    });

    new google.maps.Marker({
      position:  { lat: 23.416782361712567, lng: 85.43806984952614},
      map:map,
      title : "Food Cluster",
      animation: google.maps.Animation.BOUNCE,
    });
}

// Distance Calculation

//for(i=0;i<10;i++)
//{
  let diff=ltt;//(ltt-loclat[0])+(lngi-loclong[0]);
//}

// REAL TIME CLOCK

function realtimeclock(){

  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();
  
  hours = ("0"+hours).slice(-2);
  minutes = ("0"+ minutes).slice(-2);
  seconds = ("0"+ seconds).slice(-2);

  document.getElementById("clock").innerHTML=
 //  latitude+" "+ longitude;
    "Time: " + hours + " : "+ minutes + " : " + seconds+" ll "+ltt;
  
    var t = setTimeout(realtimeclock,500);

  }

