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
function etcbar() {
  document.getElementById('etcbtn').style.display = "none";
  document.getElementById('etcbar').style.display = "block";
}
function color(type, abbr) {
  if (abbr > 72) {
    document.getElementById(type).style.backgroundColor = "var(--a7)";
  } else if (abbr > 62) {
    document.getElementById(type).style.backgroundColor = "var(--a6)";
    document.getElementById(type).style.color = "black";
  } else if (abbr > 54) {
    document.getElementById(type).style.backgroundColor = "var(--a5)";
    document.getElementById(type).style.color = "black";
  } else if (abbr > 46) {
    document.getElementById(type).style.backgroundColor = "var(--a4)";
    document.getElementById(type).style.color = "black";
  } else if (abbr > 37) {
    document.getElementById(type).style.backgroundColor = "var(--a3)";
    document.getElementById(type).style.color = "black";
  } else if (abbr > 27) {
    document.getElementById(type).style.backgroundColor = "var(--a2)";
    document.getElementById(type).style.color = "black";
  } else {
    document.getElementById(type).style.backgroundColor = "var(--a1)";
  }
}
function status(x,y) {
  switch (x) {
    case "mt":
      mt = mt + y - 3;
      color('master', mt);
      document.getElementById('master').style.width = mt+"%";
      break;
    case "hu":
      hu = hu + y - 3;
      color('hunter', hu);
      document.getElementById('hunter').style.width = hu+"%";
      break;
    case "bt":
      bt = bt + y - 3;
      color('brattamer', bt);
      document.getElementById('brattamer').style.width = bt+"%";
      break;
    case "ow":
      ow = ow + y - 3;
      color('owner', ow);
      document.getElementById('owner').style.width = ow+"%";
      break;
    case "dm":
      dm = dm + y - 3;
      color('daddy', dm);
      document.getElementById('daddy').style.width = dm+"%";
      break;
    case "sa":
      sa = sa + y - 3;
      color('sadist', sa);
      document.getElementById('sadist').style.width = sa+"%";
      break;
    case "sp":
      sp = sp + y - 3;
      color('spanker', sp);
      document.getElementById('spanker').style.width = sp+"%";
      break;
    case "dg":
      dg = dg + y - 3;
      color('degrader', dg);
      document.getElementById('degrader').style.width = dg+"%";
      break;
    case "ri":
      ri = ri + y - 3;
      color('rigger', ri);
      document.getElementById('rigger').style.width = ri+"%";
      break;
    case "dom":
      dom = dom + y - 3;
      color('dominant', dom);
      document.getElementById('dominant').style.width = dom+"%";
      break;
    case "sl":
      sl = sl + y - 3;
      color('slave', sl);
      document.getElementById('slave').style.width = sl+"%";
      break;
    case "pr":
      pr = pr + y - 3;
      color('prey', pr);
      document.getElementById('prey').style.width = pr+"%";
      break;
    case "br":
      br = br + y - 3;
      color('brat', br);
      document.getElementById('brat').style.width = br+"%";
      break;
    case "pe":
      pe = pe + y - 3;
      color('pet', pe);
      document.getElementById('pet').style.width = pe+"%";
      break;
    case "li":
      li = li + y - 3;
      color('little', li);
      document.getElementById('little').style.width = li+"%";
      break;
    case "ma":
      ma = ma + y - 3;
      color('masochist', ma);
      document.getElementById('masochist').style.width = ma+"%";
      break;
    case "sk":
      sk = sk + y - 3;
      color('spankee', sk);
      document.getElementById('spankee').style.width = sk+"%";
      break;
    case "de":
      de = de + y - 3;
      color('degradee', de);
      document.getElementById('degradee').style.width = de+"%";
      break;
    case "rb":
      rb = rb + y - 3;
      color('ropebunny', rb);
      document.getElementById('ropebunny').style.width = rb+"%";
      break;
    case "su":
      su = su + y - 3;
      color('submissive', su);
      document.getElementById('submissive').style.width = su+"%";
      break;
    case "sw":
      sw = sw + y - 3;
      color('switch', sw);
      document.getElementById('switch').style.width = sw+"%";
      break;
    case "va":
      va = va + y - 3;
      color('vanilla', va);
      document.getElementById('vanilla').style.width = va+"%";
      break;
    case "ag":
      ag = ag + y - 3;
      color('ageplayer', ag);
      document.getElementById('ageplayer').style.width = ag+"%";
      break;
    case "eh":
      eh = eh + y - 3;
      color('exhibitionist', eh);
      document.getElementById('exhibitionist').style.width = eh+"%";
      break;
    case "vo":
      vo = vo + y - 3;
      color('voyeur', vo);
      document.getElementById('voyeur').style.width = vo+"%";
      break;
    case "ex":
      ex = ex + y - 3;
      color('experimentalist', ex);
      document.getElementById('experimentalist').style.width = ex+"%";
      break;
    case "nn":
      nn = nn + y - 3;
      color('non', nn);
      document.getElementById('non').style.width = nn+"%";
      break;
    default:
      alert("오류 발생! 입력값이 이상합니다.");
  }
}

var today = new Date();
document.getElementById('result-date').innerText = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월 " + today.getDate() + "일 " + today.getHours() + "시";

var qnumber = 1;

// 변수선언
var mt = 40; // master
var hu = 40; // hunter
var bt = 40; // brattamer
var ow = 40; // owner
var dm = 40; // daddy
var sa = 40; // sadist
var sp = 40; // spanker
var dg = 40; // degrader
var ri = 40; // rigger
var dom = 40; // dominant
var sl = 40; // slave
var pr = 40; // prey
var br = 40; // brat
var pe = 40; // pet
var li = 40; // little
var ma = 40; // masochist
var sk = 40; // spankee
var de = 40; // degradee
var rb = 40; // ropebunny
var su = 40; // submissive
var sw = 40; // switch
var va = 40; // vanilla

var ag = 40; // ageplayer
var eh = 40; // exhibitionist
var vo = 40; // voyeur
var ex = 40; // experimentalist
var nn = 40; // non-monogamist
