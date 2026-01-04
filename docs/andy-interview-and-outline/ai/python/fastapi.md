# FastAPI

## Dependencies

#### Depends 是 FastAPI 的依赖注入机制，只能在路由端点函数的参数声明中使用

#### get_db是个生成器， 以在路由参数中使用 db: Session = Depends(get_db) ,但是 在普通函数中借口或者方法体中，只能通过 类似如下  db: Session = next(get_db()) 形式使用