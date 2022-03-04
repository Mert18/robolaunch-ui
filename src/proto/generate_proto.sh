protoc -I=launch launch.proto \
    --js_out=import_style=commonjs:../api/launch \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../api/launch
                                                                            
protoc -I=launch launch.proto \
    --js_out=import_style=commonjs+dts:../api/launch \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:../api/launch
