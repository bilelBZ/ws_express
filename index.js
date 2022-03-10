// import express
const express = require("express");
// get an instance from express
const app = express();
// define your port
const PORT = 5000;

app.get("/F3", (req, res) => {
  res.send("<h1>hello F3</h1>");
});
const path = require("path");
// /public/index
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// middleware

app.use(express.static("public"));
app.use(express.json());

// listen to the port
app.listen(PORT, (err) =>
  console.log(`server is up and running on port ${PORT}`)
);

const students = [
  {
    id: 0,
    email: "naceur@gmail.com",
    age: 20,
  },
  {
    id: 1,
    email: "youssef@gmail.com",
    age: 18,
  },
  {
    id: 2,
    email: "khaled@gmail.com",
    age: 10,
  },
];

// METHOD GET
app.get("/students", (req, res) => {
  res.send({ msg: "list of students", students });
});
// method post
app.post("/addStudent", (req, res) => {
  let newStudent = [...students, req.body];
  res.send({ msg: "student added successfully", newStudent });
});
// method delete

app.delete("/delete/:id", (req, res) => {
  let deletedUser = students.filter((student) => student.id != req.params.id);
  res.send({ msg: "student deleted", deletedUser });
});
// method put

app.put("/updateStudent/:id", (req, res) => {
  let update = students.map((student) =>
    student.id == req.params.id ? { ...student, ...req.body } : student
  );
  res.send({ msg: "student updated", update });
});
