package app

import (
	"github.com/gorilla/mux"
	"github.com/manabase/backend/internal/handlers"
)

// This will contain all the config information - db, env, etc
type AppConfig struct {
}

func DefineRoutes(r *mux.Router) {
    // Routes consist of a path and a handler function.
    r.HandleFunc("/", handlers.AllUsersHandler)
}
