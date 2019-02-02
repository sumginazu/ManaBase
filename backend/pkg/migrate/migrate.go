package main

import (
	"fmt"
	"log"

	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
)

// dev environment config
const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "admin" // rename this with your password
	dbname   = "manabase_dev"
)

func main() {
	postgresFmt := "postgres://%s@%s:%d?password=%s&database=%s&sslmode=disable"
	postgresURL := fmt.Sprintf(postgresFmt, user, host, port, password, dbname)
	m, err := migrate.New("file://migrations", postgresURL)
	if err != nil {
		log.Fatal(err)
	}

	// Migrate all the way up ...
	if err := m.Up(); err != nil {
		log.Fatal(err)
	}
}
