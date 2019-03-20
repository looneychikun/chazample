package chatservice

import (
	"context"

	"github.com/looneychikun/chazample/server/chatpb"
)

// ChatService is the host for the gRPC server
type ChatService struct{}

// Chat primary chat interface
func (c *ChatService) Chat(stream chatpb.ChatService_ChatServer) error {

	return nil
}

// ChatHistory is for preloading the clients history
func (c *ChatService) ChatHistory(ctx context.Context, req *chatpb.ChatHistoryRequest) (*chatpb.ChatHistoryResponse, error) {

	return &chatpb.ChatHistoryResponse{}, nil
}
