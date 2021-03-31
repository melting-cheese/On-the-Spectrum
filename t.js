function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("q1").style.display = "block";
  qnumber++;
}
function next() {
  var qid = "q"+qnumber;
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
    case "rg":
      rg = rg + y - 4;
      color('rigger', rg);
      document.getElementById('rigger').style.width = rg+"%";
      document.getElementById('rigger').ariavaluenow = rg;
      break;
    case "de":
      de = de + y - 4;
      color('degradee', de);
      document.getElementById('degradee').style.width = de+"%";
      document.getElementById('degradee').ariavaluenow = de;
      break;
    case "rb":
      rb = rb + y - 4;
      color('ropebunny', rb);
      document.getElementById('ropebunny').style.width = rb+"%";
      document.getElementById('ropebunny').ariavaluenow = rb;
      break;
    default:
      rb = 0
  }
}
var qnumber = 1;
var rb = 50;
var rg = 50;
var de = 50;
