---
title: 'vs code vim'
pubDate: 2023-09-07
description: '配置 '
author: 'Eq'
heroImage: 'https://bingw.jasonzeng.dev?index=7'
tags: ["config"]
---

添加至 vsc 配置文件中 

```json
"vim.easymotion": true,
  "vim.insertModeKeyBindings": [
    {
        "before": ["j", "j"],
        "after": ["<Esc>"]
    },
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
        "before": ["S"],
        "commands":[":w!"]
    },
    {
        "before": ["Q"],
        "commands":[":q!"]
    },  
    {
        "before": ["Z"],
        "commands":[":wq!"]
    },
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["$"]
    },
    {
      "before": ["H"],
      "after":["^"]
    },
    {
      "before": ["L"],
      "after":["$"]
    },
    {
      "before":["s"],
      "after":["<nop>"]
    },
    {
      "before": ["m"],
      "after": ["leader", "leader", "leader", "b", "d", "w"]
    },
  ],
  "vim.leader": "<space>",
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
 
```

 配置的 `‘K’->10k`和`'J'->10j`不知道为什么不生效 :-(

>   记得开启 easyMotion
