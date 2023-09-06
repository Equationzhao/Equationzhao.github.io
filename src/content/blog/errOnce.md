---
title: 'sync.Once with err'
pubDate: 2023-06-11
description: '带有返回值的 sync.Once'
author: 'Eq'
heroImage: 'https://bingw.jasonzeng.dev?index=5'
tags: ["coding"]
---

```go
type ErrOnce struct {
	done uint32
	m    sync.Mutex
}

func (o *ErrOnce) Do(f func() error) error {
	if atomic.LoadUint32(&o.done) == 0 {
		return o.doSlow(f)
	}
	return nil
}

func (o *ErrOnce) doSlow(f func() error) error {
	o.m.Lock()
	defer o.m.Unlock()
	//  因为已经加了锁，所以不需要原子读写
	if o.done == 0 {
		err := f()
		if err != nil {
			return err
		}
		o.done = 1
	}
	return nil
}

```

以下引用自极客兔兔 https://geektutu.com/post/hpg-sync-once.html
>将 done 置为 Once 的第一个字段：done 在热路径中，done 放在第一个字段，能够减少 CPU 指令，也就是说，这样做能够提升性能。
>
>简单解释下这句话：
>
>>热路径(hot path)是程序非常频繁执行的一系列指令，sync.Once 绝大部分场景都会访问 o.done，在热路径上是比较好理解的，如果 hot path >编译后的机器码指令更少，更直接，必然是能够提升性能的。
>
>为什么放在第一个字段就能够减少指令呢？因为结构体第一个字段的地址和结构体的指针是相同的，如果是第一个字段，直接对结构体的指针解引用即>可。如果是其他的字段，除了结构体指针外，还需要计算与第一个值的偏移(calculate offset)。在机器码中，偏移量是随指令传递的附加值，CPU >需要做一次偏移值与指针的加法运算，才能获取要访问的值的地址。因为，访问第一个字段的机器代码更紧凑，速度更快。