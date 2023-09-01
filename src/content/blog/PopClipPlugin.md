---
title: 'PopClip 插件'
pubDate: 2023-09-01
description: 'docker stop'
author: 'Eq'
heroImage: '/PopClipPlugin.png'
tags: ["coding"]
---

##  起因

98 上看到一个帖子

![image-20230901235552664](../img/PopClipPlugin/why.png)

 想到 PopClip 应该可以实现，就学习了一下，插个眼，以后慢慢看

https://www.popclip.app/dev/snippets

## impl

```
#popclip
name: docker stop
interpreter: zsh
shell script: docker stop $POPCLIP_TEXT
```

