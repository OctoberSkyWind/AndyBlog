# java-spring

[[toc]]

## spring

## spring-mvc

#### Spring MVC 作为基于 Servlet 规范实现的 Java Web MVC 框架，其核心定位是处理 Web 请求的业务逻辑分发与处理，本身并不直接绑定或实现任何 HTTP 协议版本（如 HTTP/1.1、HTTP/2、HTTP/3）。日常开发中我们的接口默认使用 HTTP/1.1 协议，本质是因为 Spring MVC 通常部署在 Tomcat、Jetty 等主流 Web 容器上，而这些容器默认启用 HTTP/1.1 协议支持；但 Spring MVC 自身不限制协议版本，只要底层 Web 容器（如 Tomcat 8.5+ 支持 HTTP/2、Tomcat 10.1+ 实验性支持 HTTP/3）提供对应协议的实现，Spring MVC 开发的接口即可无缝适配 HTTP/2、HTTP/3 等更高版本的协议。简言之，Spring MVC 接口所使用的 HTTP 协议版本，由其运行的 Web 容器决定，而非框架本身。

## webflux

## spring-boot


