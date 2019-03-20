proto:
	protoc --go_out=plugins=grpc:server/chatpb --js_out=import_style=commonjs,binary:client/chatpb proto/*.proto

.PHONY: proto
