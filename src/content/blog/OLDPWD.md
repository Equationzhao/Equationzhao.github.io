---
title: 'OLDPWD'
pubDate: 2023-09-07
description: 'why?'
author: 'Eq'
heroImage: 'https://bingw.jasonzeng.dev?index=8'
tags: ["shell"]
---

寻思给 `g` 加上 接受 '-' 就显示 `OLDPWD` 的功能，在多个 shell 里试了一下，发现只有 `zsh` `bash` `nushell`  能获取到上一个目录

btw: nushell 中 `echo $OLDPWD` 是不行的，要用 `echo $env.OLDPWD`  才能获取环境变量

不知道有没有方法可以获取 `pwsh` 和 `fish`  的 “old pwd” ？