package main

import (
	"fmt"
	"log"
	"net/http"
	
	"github.com/gorilla/mux"

	"github.com/manabase/backend/cmd/manabase/app"
)

func main() {
	fmt.Printf("server init\n")

	r := mux.NewRouter()
    // Routes consist of a path and a handler function.
    app.DefineRoutes(r)

    // Bind to a port and pass our router in
    log.Fatal(http.ListenAndServe(":8000", r))
}
