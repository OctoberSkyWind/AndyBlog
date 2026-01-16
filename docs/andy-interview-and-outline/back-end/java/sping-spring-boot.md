# Spring Spring Boot

## Spring

### @Valid/@Validated

#### 场景一：Controller 层校验 @RequestBody/@ModelAttribute/@RequestPart 标记的自定义对象参数，参数标注 @Valid/@Validated 即可（无需类上标注），无上述注解的自定义普通参数需类上 @Validated 才触发校验，原理是 Spring MVC 参数解析器检测到参数校验注解后直接调用校验器，不依赖 AOP 代理；

#### 使用场景二：Controller 层校验 String/Integer 等简单类型参数，必须类上标注 @Validated、简单参数标注校验注解，原理是类上 @Validated 触发 AOP 代理创建，由拦截器扫描并调用校验器执行校验；

#### ；使用场景三：Service 层校验任意类型参数，必须类上标注 @Validated、方法参数按需标注 @Valid/@Validated 或校验注解，原理是 Service 层无 MVC 参数解析器兜底，完全依赖类上 @Validated 触发的 AOP 代理完成校验。

## Spring Boot
