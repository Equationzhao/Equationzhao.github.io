---
title: '有趣的技巧'
pubDate: 2023-09-04
description: ''
author: 'Eq'
heroImage: 'https://bingw.jasonzeng.dev?index=6'
tags: ["coding"]

---

## strings.Index + strings.LastIndex 判断字符串中某字符是否唯一

```go
func Unique(str string,c byte)(isUnique bool){
  	return strings.Index(str,string(c)) == strings.LastIndex(str,string(c))
}
```



