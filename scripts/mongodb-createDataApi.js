db.createUser(
  {
    user: "dataapi",
    pwd: "password",
    roles: ["readWrite"]
  }
);
db.createCollection("userjournals");