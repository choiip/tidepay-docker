db.createUser(
  {
    user: "blobvault",
    pwd: "password",
    roles: ["readWrite"]
  }
);
db.createCollection("idphotos");