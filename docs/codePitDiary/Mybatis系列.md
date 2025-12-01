# Mybatis系列

## MybatisPlus

#### 基于MybatisPlus的注解使用自定义TypeHandler，需要结合"autoResultMap = true"才能正常使用
```text
@TableField(typeHandler = XXX.class)

@TableName(value = "xxx", autoResultMap = true)
```
