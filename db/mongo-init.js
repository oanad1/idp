db.createUser(
    {
        user: "client",
        pwd: "client",
        roles: [
            {
                role: "readWrite",
                db: "app_db"
            }
        ]
    }
);