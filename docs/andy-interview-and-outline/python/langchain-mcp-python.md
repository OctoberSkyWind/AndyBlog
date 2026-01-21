# LangChain MCP Python

## MCP

#### MCP与大模型交互的时候，本质是基于Function Calling的，MCP只是集成了多个工具来进行调用

#### 大模型按Function Calling支持可以分为 持Function Calling和不支持Function Calling 的模型，支持的才能使用MCP

#### 有些客户端可以实现没有Function Calling模式使用MCP是通过提示词优化调用，可以通过优化的提示词实现不支持Function Calling 的模型使用MCP

#### MCP Server开发时不推荐使用不支持Function Calling 的模型进行MCP

#### MCP Server开发常用的工具有npx和uvx两个工具

####  
