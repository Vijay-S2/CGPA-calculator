

var sem=document.querySelector('.sem')
    var sem1credits1=document.querySelector("#sem1sub1")
    var sem1garde1=document.querySelector('#sem1grade1')
    var sem1credits2=document.querySelector("#sem1sub2")
    var sem1garde2=document.querySelector('#sem1grade2')
    var sem1credits3=document.querySelector("#sem1sub3")
    var sem1garde3=document.querySelector('#sem1grade3')
    var sem1credits4=document.querySelector("#sem1sub4")
    var sem1garde4=document.querySelector('#sem1grade4')
    var sem1credits5=document.querySelector("#sem1sub5")
    var sem1garde5=document.querySelector('#sem1grade5')
    var sem1credits6=document.querySelector("#sem1sub6")
    var sem1garde6=document.querySelector('#sem1grade6')
    var sem1credits7=document.querySelector("#sem1sub7")
    var sem1garde7=document.querySelector('#sem1grade7')
    var sem1credits8=document.querySelector("#sem1sub8")
    var sem1garde8=document.querySelector('#sem1grade8')
    var sem1credits9=document.querySelector("#sem1sub9")
    var sem1garde9=document.querySelector('#sem1grade9')
    var sem1credits10=document.querySelector("#sem1sub10")
    var sem1garde10=document.querySelector('#sem1grade10')


function totalsem()
{
  var totalcredits1=parseInt(sem1credits1.value)+parseInt(sem1credits2.value)+parseInt(sem1credits3.value)+parseInt(sem1credits4.value)+parseInt(sem1credits5.value)+parseInt(sem1credits6.value)+parseInt(sem1credits7.value)+parseInt(sem1credits8.value)+parseInt(sem1credits9.value)+parseInt(sem1credits10.value)
  var totalgarde1=parseInt(sem1credits1.value*sem1garde1.value)+parseInt(sem1credits2.value*sem1garde2.value)+parseInt(sem1credits3.value*sem1garde3.value)+parseInt(sem1credits4.value*sem1garde4.value)+parseInt(sem1credits5.value*sem1garde5.value)+parseInt(sem1credits6.value*sem1garde6.value)+parseInt(sem1credits7.value*sem1garde7.value)+parseInt(sem1credits8.value*sem1garde8.value)+parseInt(sem1credits9.value*sem1garde9.value)+parseInt(sem1credits10.value*sem1garde10.value)
  var totalsem1=totalgarde1/totalcredits1
  var div=document.createElement('h4')
  div.setAttribute('h4','sem1')
  div.innerHTML=`<h4>Total:${totalsem1}</h4>`;
  sem.append(div)
}