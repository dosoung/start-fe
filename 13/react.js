const rootEl = document.getElementById("root");
// const el = document.createElement("div");
// el.textContent = "React";
// el.className = "container";
// rootEl.append(el);
// console.log(rootEl);

const el = <div className="container">React!!!!!!!!!</div>;

// const el = React.createElement("div", { className: "container" }, "React");
ReactDOM.render(el, rootEl);
