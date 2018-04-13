const express = require("express");
const app = express();
const client = require("prom-client");
const userVisits = new client.Counter({
  name: "users_visits",
  help: "users_visits_help"
});
const healthchecks = new client.Counter({
  name: "health_healthcheck",
  help: "health_healthcheck_help"
});

app.get("/", (req, res) => {
  userVisits.inc();
  res.json({ msg: "visited website" });
});

app.get("/healthcheck", (req, res) => {
  healthchecks.inc();
  res.json({ msg: "ok" });
});

module.exports = app;
