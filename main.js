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
      mt = mt + y - 4;
      color('master', mt);
      document.getElementById('master').style.width = mt+"%";
      break;
    case "hu":
      hu = hu + y - 4;
      color('hunter', hu);
      document.getElementById('hunter').style.width = hu+"%";
      break;
    case "bt":
      bt = bt + y - 4;
      color('brattamer', bt);
      document.getElementById('brattamer').style.width = bt+"%";
      break;
    case "ow":
      ow = ow + y - 4;
      color('owner', ow);
      document.getElementById('owner').style.width = ow+"%";
      break;
    case "dm":
      dm = dm + y - 4;
      color('daddy', dm);
      document.getElementById('daddy').style.width = dm+"%";
      break;
    case "sa":
      sa = sa + y - 4;
      color('sadist', sa);
      document.getElementById('sadist').style.width = sa+"%";
      break;
    case "sp":
      sp = sp + y - 4;
      color('spanker', sp);
      document.getElementById('spanker').style.width = sp+"%";
      break;
    case "dg":
      dg = dg + y - 4;
      color('degrader', dg);
      document.getElementById('degrader').style.width = dg+"%";
      break;
    case "ri":
      ri = ri + y - 4;
      color('rigger', ri);
      document.getElementById('rigger').style.width = ri+"%";
      break;
    case "dom":
      dom = dom + y - 4;
      color('dominant', dom);
      document.getElementById('dominant').style.width = dom+"%";
      break;
    case "sl":
      sl = sl + y - 4;
      color('slave', sl);
      document.getElementById('slave').style.width = sl+"%";
      break;
    case "pr":
      pr = pr + y - 4;
      color('prey', pr);
      document.getElementById('prey').style.width = pr+"%";
      break;
    case "br":
      br = br + y - 4;
      color('brat', br);
      document.getElementById('brat').style.width = br+"%";
      break;
    case "pe":
      pe = pe + y - 4;
      color('pet', pe);
      document.getElementById('pet').style.width = pe+"%";
      break;
    case "li":
      li = li + y - 4;
      color('little', li);
      document.getElementById('little').style.width = li+"%";
      break;
    case "ma":
      ma = ma + y - 4;
      color('masochist', ma);
      document.getElementById('masochist').style.width = ma+"%";
      break;
    case "sk":
      sk = sk + y - 4;
      color('spankee', sk);
      document.getElementById('spankee').style.width = sk+"%";
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
    case "su":
      su = su + y - 4;
      color('submissive', su);
      document.getElementById('submissive').style.width = su+"%";
      break;
    case "sw":
      sw = sw + y - 4;
      color('switch', sw);
      document.getElementById('switch').style.width = sw+"%";
      break;
    case "va":
      va = va + y - 4;
      color('vanilla', va);
      document.getElementById('vanilla').style.width = va+"%";
      break;
    case "ag":
      ag = ag + y - 4;
      color('ageplayer', ag);
      document.getElementById('ageplayer').style.width = ag+"%";
      break;
    case "eh":
      eh = eh + y - 4;
      color('exhibitionist', eh);
      document.getElementById('exhibitionist').style.width = eh+"%";
      break;
    case "vo":
      vo = vo + y - 4;
      color('voyeur', vo);
      document.getElementById('voyeur').style.width = vo+"%";
      break;
    case "ex":
      ex = ex + y - 4;
      color('experimentalist', ex);
      document.getElementById('experimentalist').style.width = ex+"%";
      break;
    case "nn":
      nn = nn + y - 4;
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
var mt = 52; // master
var hu = 52; // hunter
var bt = 52; // brattamer
var ow = 52; // owner
var dm = 52; // daddy
var sa = 52; // sadist
var sp = 52; // spanker
var dg = 52; // degrader
var ri = 52; // rigger
var dom = 52; // dominant
var sl = 52; // slave
var pr = 52; // prey
var br = 52; // brat
var pe = 52; // pet
var li = 52; // little
var ma = 52; // masochist
var sk = 52; // spankee
var de = 52; // degradee
var rb = 52; // ropebunny
var su = 52; // submissive
var sw = 52; // switch
var va = 52; // vanilla

var ag = 52; // ageplayer
var eh = 52; // exhibitionist
var vo = 52; // voyeur
var ex = 52; // experimentalist
var nn = 52; // non-monogamist
