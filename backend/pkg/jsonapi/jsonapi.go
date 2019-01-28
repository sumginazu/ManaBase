package jsonapi

import (
	"fmt"
	"net/http"
	"encoding/json"
)

func Serialize(i interface{}) (interface{}, error) {
	return i, nil // TODO: implement
}

func Format(i interface{}) ([]byte, error) {
	s, err := Serialize(i)
	if err != nil{
		msg := "{message: \"Error serializing object.\"}"
		fmt.Println("Error serializing object.")
		return []byte(msg), err
	}
	ret, err := json.Marshal(s)
	if err != nil{
		msg := "{message: \"Error formatting object.\"}"
		fmt.Println("Error formatting object.")
		return []byte(msg), err
	}
	return ret, nil
}

func Respond(i interface{}, w http.ResponseWriter) {
	ret, _ := Format(i)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	w.Write(ret)
}