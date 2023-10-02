---
title: 'arch 常用操作'
pubDate: 2023-10-02
description: 'archlinux command'
author: 'Eq'
heroImage: 'https://arch.icekylin.online/images/hero.svg'
tags: ["tech"]

---
参考 [archlinux 简明指南](https://arch.icekylin.online/)

## ****清理软件包缓存及孤立包****

```bash
sudo pacman -Rns $(pacman -Qtdq) # 如上文所述，删除孤立软件包（常用）
sudo pacman -Sc # 删除当前未安装的所有缓存包和未使用的同步数据库（可选）
sudo pacman -Scc # 从缓存中删除所有文件，这是最激进的方法，不会在缓存文件夹中留下任何内容（一般不使用）
paccache -r # 删除已安装和未安装包的所有缓存版本，但最近 3 个版本除外
```

## ****清理 yay 缓存****

```bash
rm -rf ~/.cache/yay
```

## 导出 pkg list

```bash
function pacman_backup(){
        pacman -Qqen > arch-pkglist
}
```