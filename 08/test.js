const promise = fetch("./json.json");
console.log(promise);

promise
  .then((res) => {
    console.log(("res: ", res));
    const textPromise = res.json();
    console.log(("textPromise:", textPromise));

    textPromise.then((result) => {
      console.log(("data:", result));
    });
  })
  .catch((err) => {
    console.log("result: ", err);
  });

function callback(data) {
  console.log(data);
}
