package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "API RestFull em go - planos")
}

func main() {
	port := os.Getenv("SERVER_PORT")
	if port == "" {
		port = "8080"
	}
	r := mux.NewRouter()

	// Defina suas rotas aqui
	r.HandleFunc("/", helloHandler)

	http.Handle("/", r)
	fmt.Printf("Servidor rodando em http://localhost:%s\n", port)
	err := http.ListenAndServe(":"+port, r)
	if err != nil {
		panic(err)
	}
}
