---

title: 'kv 存储'
pubDate: 2023-09-03
description: '记录'
author: 'Eq'
heroImage: 'https://bingw.jasonzeng.dev?index=3'
tags: ["coding"]

---

## LSM

Log Structured-Merge Tree（日志结构合并树）

写入时追加数据

写快读慢

### bitcask

索引在内存中，更新时同步写入磁盘

到阈值后进行合并降低空间开销

数据格式

`[key-size] [value-size] [key] [value] [check-sum] [ttl]`

索引值为 `key offset`

