import express from "express"; //module js

const app = express();
const port = process.env.port || 3000;

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "A joke",
      content: "This is a another joke",
    },
    {
      id: 3,
      title: "A joke",
      content: "This is a third joke",
    },
    {
      id: 4,
      title: "A joke",
      content: "This is a forth joke",
    },
    {
      id: 5,
      title: "A joke",
      content: "This is a fifth joke",
    },
  ];
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
