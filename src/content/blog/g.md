---
title: 'g:一个现代化的 ls 工具'
pubDate: 2023-09-01
description: '自制工具介绍'
author: 'Eq'
heroImage: 'https://github.com/Equationzhao/g/blob/master/logo.jpg?raw=true'
tags: ["coding","golang"]
---

![linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![macos](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
![windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![AUR version](https://img.shields.io/aur/version/g-ls?color=1793d1&label=g-ls&logo=arch-linux&style=for-the-badge)

g is a ls alternative with features:

1. display items with type-specific icons and colors that are easy to be customized
2. display in various layouts ( grid/across/byline/zero/comma/table/html/json/markdown/tree )
3. user-friendly options with many aliases
4. check file git-status when listing entries
5. highly customizable sort option
6. cross-platform ( Linux/Windows/MacOS )
7. option to fuzzy match the path like [`zoxide`](https://github.com/ajeetdsouza/zoxide) with [`fzf`](https://github.com/junegunn/fzf) algorithm

## Why

我觉得 exa 很好用, 但是 Windows 下没有官方 release, 所以自己写了一个类似的工具

支持 Windows/Linux/macOS

[Github repo](https://github.com/Equationzhao/g)

文档地址在这里  [g](https://g.equationzhao.space)

>   Logo 是 bing 画的

##  效果展示

shot with [vhs](https://github.com/charmbracelet/vhs)
![g](https://github.com/Equationzhao/g/blob/master/how-g-works.gif?raw=true)