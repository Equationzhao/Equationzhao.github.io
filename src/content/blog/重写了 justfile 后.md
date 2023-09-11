---
title: '重写了 justfile 后...'
pubDate: 2023-09-11
description: '构建系统'
author: 'Eq'
heroImage: 'https://bingw.jasonzeng.dev?index=12'
tags: ["coding"]

---

重新用 justfile 写了编译脚本之后，我把更新 aur 和更新 brew 都写进去了

结果更新之后今天就收到一封邮件，说我 `PKGBIULD` 写错了

![image-20230911232504719](/justfile-email.png)

好家伙，写的时候原来是 `($CARCH)`, 写的时候改成了 `X86_64` , 但是忘记加括号了 应该是 `('X86_64')`

当时传的时候也没检查，因为用的是 mac，也没测试，结果就翻车了 :crying_cat_face:

 引以为戒
