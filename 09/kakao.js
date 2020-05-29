const $btn = document.getElementById("search-btn");
const $text = document.getElementById("search-text");
const $result = document.getElementById("result");
const $more = document.getElementById("more");

const url = "https://dapi.kakao.com/v2/search/web";

const headers = { Authorization: "KakaoAK 48f6c33e9d8b2faf63ec6461c1a1b70a" };

function success(data) {
  const { documents } = data;
  console.log(documents);
  $more.style.display = "block";
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });
  $result.innerHTML = `<ul class="list-group list-group-flush>${li.join(
    "",
  )}</ul>`;
}

function error() {
  alert("데이터를 읽어오지 못했습니다.");
}

function search() {
  const { value } = $text;
  if (value === "") {
    alert("검색어를 입력하세요");
    return false;
  }

  fetch(`${url}?query=${value}`, { headers: headers })
    .then((result) => result.json())
    .then(success)
    .catch(error);

  return true;
}

$btn.addEventListener("click", search);
$more.addEventListener("click", search);
