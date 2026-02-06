_# python-web-fastapi

#### fastapi 的http协议版本

> FastAPI 本身不直接实现 HTTP 协议，底层依赖 Uvicorn 等 ASGI 服务器提供完整的网络支撑，协议版本解析、连接管理、TLS
> 加密、流量处理均由底层服务器全权负责；FastAPI 仅作为上层应用框架，专注于请求路由、参数校验、接口文档、依赖注入等业务逻辑处理，对
> HTTP 协议版本无感知、无直接配置入口。默认场景下，Uvicorn 仅启用 HTTP/1.1，无需证书、配置最简单、兼容性最广，可直接满足绝大多数开发与内网部署需求；若要启用
> HTTP/2，需配置合法 SSL 证书并通过 ASGI 服务器（如 Uvicorn）启用对应协议，Uvicorn 无需通过 --http=h11/--http=httptools
> 显式指定（该参数仅控制 HTTP/1.x 解析器），只需配置 SSL 证书后，Uvicorn 会自动通过 ALPN 协商支持 HTTP/2 over TLS；HTTP/2
> 虽标准支持明文模式（h2c），但主流 ASGI 服务器（包括 Uvicorn）为遵循现代安全最佳实践，仅支持基于 TLS（HTTPS）的 HTTP/2。若要启用
> HTTP/3，需安装包含 QUIC 协议支持的 Uvicorn 完整版本（如 uvicorn [standard]）、配置兼容 TLS 1.3 的 SSL 证书并指定对应 UDP
> 端口，HTTP/3 强制依赖 TLS 加密，且目前仍属于 Uvicorn 实验性特性，需通过 --http3（部分旧版本需 --quic，且需配合 --ws
> quic）等专属参数启用，必须显式指定 --ssl-keyfile/--ssl-certfile 才能生效，生产环境需评估稳定性、兼容性与运维成本后谨慎使用。实际部署中通常建议同时保留
> HTTP/1.1 兼容，以覆盖老旧客户端、代理、网关等广泛场景；Uvicorn 在正确配置 SSL 并启用 HTTP/3 时，会自动通过 ALPN（应用层协议协商）机制兼容
> HTTP/1.1 与 HTTP/2 over TLS，同时通过 UDP 端口提供 HTTP/3 服务，无需额外多端口或多进程配置，只需确保 SSL
> 证书合法有效、服务器内核与网络环境支持 QUIC/UDP 多路复用、防火墙开放对应 UDP 端口即可。_