package main

import (
	"log"
	"net"

	"google.golang.org/grpc"

	"github.com/looneychikun/chazample/server/chatpb"
	"github.com/looneychikun/chazample/server/chatservice"
)

func main() {
	ln, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatal(err)
	}

	s := grpc.NewServer()
	chatpb.RegisterChatServiceServer(s, &chatservice.ChatService{})

	if err := s.Serve(ln); err != nil {
		log.Fatalf("Error hosting gRPC: %v", err)
	}
}
