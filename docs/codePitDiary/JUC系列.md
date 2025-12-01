# JUC 系列

[TOC]
[[TOC]]

## 线程池

#### 取消线程池中的正在执行的任务

- 前置
    - 线程池的submit不会抛出异常，而是捕获异常，将异常封装到Future中返回
    - 线程池的execute会抛出异常
    - 当线程因 InterruptedException（打断异常）退出阻塞状态时，JVM 会自动将该线程的打断标志重置为 false，这是 Java 中断机制的核心特性
    - Java 没有 “强制终止线程” 的安全方法，只能通过中断（interrupt） 通知线程停止执行，任务需主动检测中断状态并退出。
        - 关键工具：Future对象（提交任务时返回），通过Future.cancel(boolean mayInterruptIfRunning)方法触发取消：
        - 任务层面：必须在任务中检测中断状态（如Thread.interrupted()或isInterrupted()），并主动退出，否则即使调用cancel(true)
          也无法停止任务。
            - 如果任务不检测中断状态、也不调用可中断的阻塞方法，即使调用cancel(true)也无法停止
- 实践

```java

```