const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const rules = auth.rewriter({
  users: 660,
});

app.db = router.db;

app.use(cors());
app.use(middlewares);
app.use(rules);
app.use(router);
app.use(auth);
app.listen(port, () => {
  console.log("server is listening");
});
