
const iconElement = document.querySelector(".stuts");


function realtimeclock(){

    var rtClock = new Date();
  
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    
    hours = ("0"+hours).slice(-2);
    minutes = ("0"+ minutes).slice(-2);
    seconds = ("0"+ seconds).slice(-2);
  

 //  iconElement.innerHTML = '<img src="high.png"/>';

 //   document.getElementById("clock").innerHTML=
   //   "Present Time: " + hours + " : "+ minutes + " : " + seconds;

      var t = setTimeout(realtimeclock,500);

      if(hours==9)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt3').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('modr.png')`;

      }

      else if(hours==10)
      {
        document.getElementById('statt').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('modr.png')`;

      }

      else if(hours==11)
      {
        document.getElementById('statt').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt3').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('low.png')`;

      }
      
      else if(hours==12)
      {
      document.getElementById('statt').style.backgroundImage= `url('modr.png')`;
      document.getElementById('statt2').style.backgroundImage= `url('low.png')`;  
      document.getElementById('statt3').style.backgroundImage= `url('high.png')`;
      document.getElementById('statt4').style.backgroundImage= `url('low.png')`;
      document.getElementById('statt5').style.backgroundImage= `url('modr.png')`;
      document.getElementById('statt7').style.backgroundImage= `url('modr.png')`;
      document.getElementById('statt8').style.backgroundImage= `url('low.png')`;


      }
      
      else if(hours==13)
      {
      document.getElementById('statt').style.backgroundImage= `url('modr.png')`;
      document.getElementById('statt2').style.backgroundImage= `url('modr.png')`;  
      document.getElementById('statt3').style.backgroundImage= `url('high.png')`;
      document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
      document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
      document.getElementById('statt7').style.backgroundImage= `url('modr.png')`;
      document.getElementById('statt8').style.backgroundImage= `url('low.png')`;


      }
      
      else if(hours==14)
      {
        document.getElementById('statt').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('low.png')`;  
        document.getElementById('statt3').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('low.png')`;


      }
      
      else if(hours==15)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('low.png')`; 
        document.getElementById('statt3').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('low.png')`;

      }

      else if(hours==16)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('low.png')`; 
        document.getElementById('statt3').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('high.png')`;
        document.getElementById('statt6').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('modr.png')`;

      }
    
      else if(hours==17)
      {
        document.getElementById('statt').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('high.png')`; 
        document.getElementById('statt3').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('high.png')`;
        document.getElementById('statt6').style.backgroundImage= `url('high.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('modr.png')`;

      }

      else if(hours==18)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt3').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt6').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('modr.png')`;

      }
      
      else if(hours==19)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('modr.png')`; 
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt6').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('low.png')`;

      }
      
      else if(hours==20)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;  
        document.getElementById('statt2').style.backgroundImage= `url('modr.png')`;  
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('low.png')`;

      }
      
      else if(hours==21)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('high.png')`;  
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('modr.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('modr.png')`;

      }
      else if(hours==22)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt2').style.backgroundImage= `url('high.png')`;  
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt7').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('modr.png')`;

      }
      else if(hours==23)
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;     
        document.getElementById('statt2').style.backgroundImage= `url('modr.png')`; 
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt8').style.backgroundImage= `url('low.png')`;

      }

      else
      {
        document.getElementById('statt').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt3').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt4').style.backgroundImage= `url('low.png')`;
        document.getElementById('statt5').style.backgroundImage= `url('low.png')`;

      }
  
//    if(hours<12)
    //    iconElement.innerHTML = <img src="modr.png"/>;
  //      document.getElementById("stuts").innerHTML= <img src="high.png"/>;
    //else
    //iconElement.innerHTML = <img src="high.png"/>;
      //  document.getElementById("stuts").innerHTML= <img src="low.png"/>;
    }
  