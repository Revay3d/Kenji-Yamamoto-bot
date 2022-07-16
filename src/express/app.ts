import express from "express";
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Routes
app.get("/", (req, res) => {
  res.send("Bot en linea");
});

// Server listening
export default () => {
  app.listen(app.get("port"), () => {
    console.clear();
    console.log(`Server on port: ${app.get("port")}`)
  });
}
