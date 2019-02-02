package db

import (
    "database/sql"
    "fmt"

    _ "github.com/lib/pq"
)

// dev environment config
const (
    host = "localhost"
    port = 5432
    user = "postgres"
    password = "admin" // rename this with your password
    dbname = "manabase_dev"
)

func main() {
    psqlInfo := fmt.Sprintf(
        "host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
        host, port, user, password, dbname,
    )
    db, err := sql.Open("postgres", psqlInfo)
    if err != nil {
        panic(err)
    }
    defer db.Close()
    err = db.Ping()
    if err != nil {
        panic(err)
    }

    fmt.Println("Successfully connected!")
}