require("./smart-promise");
const fetch = require("node-fetch");
let counter = 1;
Promise.race(
  Array.from({ length: 10 }, () =>
    fetch("http://localhost:8000")
      .then((res) => res.json())
  )
).then(a => console.log(a))
