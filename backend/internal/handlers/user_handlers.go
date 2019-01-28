package handlers

import (
	"net/http"

	"github.com/manabase/backend/pkg/jsonapi"
	"github.com/manabase/backend/internal/models"
)

func AllUsersHandler (w http.ResponseWriter, r *http.Request) {
	user1 := models.User{ID: 1, Name: "Alex"}
	user2 := models.User{ID: 2, Name: "Jon"}
	user3 := models.User{ID: 3, Name: "Luis Scott-Vargas"}
	users := [3]models.User{user1, user2, user3}

	jsonapi.Respond(users, w)
}
