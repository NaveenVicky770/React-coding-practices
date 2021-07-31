const className = "greeting";
const name = "Rahul";
const element = (
  <div>
    <h1 className={className}>Hey {name}</h1>
    <p>Good to see you bro!</p>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
