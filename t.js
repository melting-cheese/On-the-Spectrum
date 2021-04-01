function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("q1").style.display = "block";
  qnumber++;
}
function next(x) {
  var qid = "q"+qnumber;
  document.getElementsByClassName('card-footer')[qnumber - 2].innerHTML = x;
  document.getElementById(qid).style.display = "block";
  qnumber++;
}
function color(type, abbr) {
  if (abbr > 90) {
    document.getElementById(type).style.backgroundColor = "var(--a7)";
  } else if (abbr > 70) {
    document.getElementById(type).style.backgroundColor = "var(--a5)";
    document.getElementById(type).style.color = "black";
  } else if (abbr > 50) {
    document.getElementById(type).style.backgroundColor = "var(--a4)";
    document.getElementById(type).style.color = "black";
  } else if (abbr > 30) {
    document.getElementById(type).style.backgroundColor = "var(--a3)";
    document.getElementById(type).style.color = "black";
  } else if (abbr > 10) {
    document.getElementById(type).style.backgroundColor = "var(--a2)";
    document.getElementById(type).style.color = "black";
  } else {
    document.getElementById(type).style.backgroundColor = "var(--a1)";
  }
}
function status(x,y) {
  switch (x) {
    case "dm":
      dm = dm + y - 4;
      color('dominant', dm);
      document.getElementById('dominant').style.width = dm+"%";
      break;
    case "mt":
      mt = mt + y - 4;
      color('master', mt);
      document.getElementById('master').style.width = mt+"%";
      break;
    case "ht":
      ht = ht + y - 4;
      color('hunter', ht);
      document.getElementById('hunter').style.width = ht+"%";
      break;
    case "rg":
      rg = rg + y - 4;
      color('rigger', rg);
      document.getElementById('rigger').style.width = rg+"%";
      break;
    case "sk":
      sk = sk + y - 4;
      color('spanker', sk);
      document.getElementById('spanker').style.width = sk+"%";
      break;
    case "de":
      de = de + y - 4;
      color('degradee', de);
      document.getElementById('degradee').style.width = de+"%";
      break;
    case "rb":
      rb = rb + y - 4;
      color('ropebunny', rb);
      document.getElementById('ropebunny').style.width = rb+"%";
      break;
    case "pr":
      pr = pr + y - 4;
      color('prey', pr);
      document.getElementById('prey').style.width = pr+"%";
      break;
    case "sv":
      sv = sv + y - 4;
      color('slave', sv);
      document.getElementById('slave').style.width = sv+"%";
      break;
    case "sb":
      sb = sb + y - 4;
      color('submissive', sb);
      document.getElementById('submissive').style.width = sb+"%";
      break;
    default:
      rb = 0
  }
}

var today = new Date();
document.getElementById('result-date').innerText = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월 " + today.getDate() + "일";

var qnumber = 1;
var dm = 52;
var mt = 52;
var ht = 52;
var rg = 52;
var de = 52;
var rb = 52;
var pr = 52;
var sv = 52;
var sb = 52;
