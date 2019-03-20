proto:
	protoc --go_out=plugins=grpc:server/ --js_out=import_style=commonjs,binary:client/ chatpb/*.proto

.PHONY: proto
