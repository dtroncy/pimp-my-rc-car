// 

package main

import (
	"fmt"
	"log"
	"net/http"

	i2c "github.com/d2r2/go-i2c"
	"github.com/gorilla/mux"
)

// RightKeydown Turn car's wheels to the right
func RightKeydown(w http.ResponseWriter, req *http.Request) {
	i2c, err := i2c.NewI2C(0x22, 1)
	
	// 0x64 in byte = 100
	i2c.WriteBytes([]byte{0x01, 0x64})
	defer i2c.Close()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Car turn right")
}

// LeftKeydown Turn car's wheels to the left
func LeftKeydown(w http.ResponseWriter, req *http.Request) {
	i2c, err := i2c.NewI2C(0x22, 1)
	
	// 0x9C in byte = -100
	i2c.WriteBytes([]byte{0x01, 0x9C})
	defer i2c.Close()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Car turn left")
}

// ForwardKeydown Move car forward
func ForwardKeydown(w http.ResponseWriter, req *http.Request) {
	i2c, err := i2c.NewI2C(0x22, 1)
	i2c.WriteBytes([]byte{0x00, 0x64})
	defer i2c.Close()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Car go forward")
}

// BackwardKeydown Move car backward
func BackwardKeydown(w http.ResponseWriter, req *http.Request) {
	i2c, err := i2c.NewI2C(0x22, 1)
	i2c.WriteBytes([]byte{0x00, 0x9C})
	defer i2c.Close()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Car go backward")

}

// ResetMotorTurn Reset car's motor that turn wheels
func ResetMotorTurn(w http.ResponseWriter, req *http.Request) {
	i2c, err := i2c.NewI2C(0x22, 1)
	i2c.WriteBytes([]byte{0x01, 0x00})
	defer i2c.Close()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Reset turn")

}

// ResetMotorMove Reset car's motor that move the car
func ResetMotorMove(w http.ResponseWriter, req *http.Request) {
	i2c, err := i2c.NewI2C(0x22, 1)
	i2c.WriteBytes([]byte{0x00, 0x00})
	defer i2c.Close()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Reset move")

}

// Reset Reset all motors
func Reset(w http.ResponseWriter, req *http.Request) {
	i2c, err := i2c.NewI2C(0x22, 1)

	i2c.WriteBytes([]byte{0x00, 0x00})
	i2c.WriteBytes([]byte{0x01, 0x00})

	defer i2c.Close()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Full reset")

}

func main() {

	router := mux.NewRouter()
	router.HandleFunc("/rightKeydown", RightKeydown).Methods("GET")
	router.HandleFunc("/leftKeydown", LeftKeydown).Methods("GET")
	router.HandleFunc("/forwardKeydown", ForwardKeydown).Methods("GET")
	router.HandleFunc("/backwardKeydown", BackwardKeydown).Methods("GET")
	router.HandleFunc("/resetMotorTurn", ResetMotorTurn).Methods("GET")
	router.HandleFunc("/resetMotorMove", ResetMotorMove).Methods("GET")
	router.HandleFunc("/reset", Reset).Methods("GET")
	log.Fatal(http.ListenAndServe(":12345", router))

}