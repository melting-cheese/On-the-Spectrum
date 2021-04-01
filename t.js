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
  switch (abbr) {
    case abbr > 80:
      document.getElementById(type).style.backgroundColor = "var(--a7)";
      break;
    case abbr > 60:
      document.getElementById(type).style.backgroundColor = "var(--a5)";
      break;
    case abbr > 40:
      document.getElementById(type).style.backgroundColor = "var(--a3)";
      break;
    case abbr > 20:
      document.getElementById(type).style.backgroundColor = "var(--a2)";
      break;
    default:
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
var qnumber = 1;
var dm = 50;
var mt = 50;
var ht = 50;
var rg = 50;
var de = 50;
var rb = 50;
var pr = 50;
var sv = 50;
var sb = 50;
