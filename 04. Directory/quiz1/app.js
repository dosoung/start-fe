var todayPhoto = [
  {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
  ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
  ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
  ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
  ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
  ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
  ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
  ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}
];

var $wrap = document.getElementById('wrap');
var $btnPrev = document.getElementById('prev');
var $page = document.getElementById('page');
var $totalpage = document.getElementById('totalpage');
var $btnNext = document.getElementById('next');
var $title = document.getElementById('title');

var page = 1;
var totalpage =3;
var listNum = Math.ceil(todayPhoto.length/totalpage);
console.log(listNum);

function prev() {
  if(page===1) return;
  page --;
  showImage(page);
  
}

function next() {
  if (page===totalpage) return;
  page ++;
  showImage(page);
}

$btnNext.addEventListener('click',next);
$btnPrev.addEventListener('click',prev);

//refactoring
function startIndex(page) {
//   if(page === 1) return 0;
//   if(page === 2) return 3;
//   if(page === 3) return 6;
    var startindex = (page-1)* listNum;
    return startindex;
  }

function showImage(page) {
  var startindex = startIndex(page);
  var str ='';
  for(var i =startindex; i<startindex+listNum; i++) {
    if(i<todayPhoto.length) {
    str += '<img src="' +todayPhoto[i].img + '"> ';
    }
  }

  $wrap.innerHTML = str;
  $page.innerHTML = page;
  $totalpage.innerHTML = totalpage;

}

showImage(page);

//중복되는 코드가 많으므로 refactoring
// function printPage1() {
//   var str ='';
//   for(var i =0; i<3 ; i++) {
//     str += '<img src="' +todayPhoto[i].img + '"> ';
//   }

//   $wrap.innerHTML = str;
//   $page.innerHTML = page;
//   $totalpage.innerHTML = totalpage;
// }


// function printPage2() {
//   var str ='';
//   for(var i =3; i<6 ; i++) {
//     str += '<img src="' +todayPhoto[i].img + '"> ';
//   }

//   $wrap.innerHTML = str;
//   $page.innerHTML = page;
//   $totalpage.innerHTML = totalpage;
// }

// function printPage3() {
//   var str ='';
//   for(var i =6; i<8 ; i++) {
//     str += '<img src="' +todayPhoto[i].img + '"> ';
//   }

//   $wrap.innerHTML = str;
//   $page.innerHTML = page;
//   $totalpage.innerHTML = totalpage;
// 

