proto:
	protoc \
	--go_out=plugins=grpc:server/ \
	--js_out=import_style=commonjs,binary:client/ \
	--grpc_out=client/ \
	--plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin \
	chatpb/*.proto

deps:
	go get -u google.golang.org/grpc
	npm install

.PHONY: proto
