---
title: 'panic'
pubDate: 2023-06-11
description: '记录'
author: 'Eq'
heroImage: 'https://bingw.jasonzeng.dev?index=4'
tags: ["coding"]
---



```go
package main

import "fmt"

func main() {
    defer func() {
      fmt.Println(recover()) // 3
    }()

    defer panic(3) // 将替换恐慌2
    defer panic(2) // 将替换恐慌1
    defer panic(1) // 将替换恐慌0
    panic(0)
}
```

```go
type _panic struct {
    argp      unsafe.Pointer        // 指向 defer 调用时参数的指针
    arg       interface{}           // 调用 panic 时传入的参数
    link      *_panic               // 指向了更早调用的 runtime._panic 结构
    recovered bool                  // 表示当前 runtime._panic 是否被 recover 恢复
    aborted   bool                  // 表示当前的 panic 是否被强行终止
    pc        uintptr
    sp        unsafe.Pointer
    goexit    bool
}
```

