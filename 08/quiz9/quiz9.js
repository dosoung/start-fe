const $url = document.getElementById("url");
const $get = document.getElementById("get");
const $log = document.getElementById("log");

function getUrl() {
  const url = $url.value;

  if (!url) {
    alert("url을 입력하세요");
  } else {
    fetch(url)
      .then((result) => {
        result.text().then((text) => {
          $log.value = text;
        });
      })
      .catch((err) => {
        $log.value = err;
      });
  }
}

$get.addEventListener("click", getUrl);
$url.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    getUrl();
  }
});
