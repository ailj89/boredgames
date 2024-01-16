const fsPromises = require("fs").promises;
fsPromises
  .readFile("games.json", "utf8")
  .then((data) => {
    let json = JSON.parse(data);

    json.games.map((s, i) => (s.id = i + 1));

    // console.log(json);
    //// Here - update your json as per your requirement ////

    fsPromises
      .writeFile("myFile2.json", JSON.stringify(json))
      .then(() => {
        console.log("Update Success");
      })
      .catch((err) => {
        console.log("Update Failed: " + err);
      });
  })
  .catch((err) => {
    console.log("Read Error: " + err);
  });
