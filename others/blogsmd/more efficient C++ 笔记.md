<center style="font-size:30px;">more efficient C++ 笔记</center><br>

<center>好的方程列出来有诗的美感</center>

# 

​																							*updating*

------------------------------------

<center style="font-size:larger;">目录</center>

[toc]

-------




<div STYLE="page-break-after: always;"></div>

##基础 Basics

​	主要讨论 pointer（指针）、reference（引用）、casts（类型转换）、array（数组）、constructor（构造函数）。



### 区分 pointer 和 reference

####reference不可为null，pointer则可以为null

reference 不可为 null ，pointer 则可以为 null ，这导致了 reference 必然代表了某个确定存在的对象，而 pointer 则可以代表某个存在性存疑（可能存在，也可能不存在）的对象。

对于下列代码, 编译器不会报错,但是 C++ 对此没有定义,其结果不可预期。

```c++
	char *pc = nullptr;	//将指针pc设为nullptr
	char &rc = *pc; //让rc成为pc指向的char的引用
```

永远不要这么做！！！永远不要使 reference 成为 null ！！！

这样一来，不需要考虑 reference 成为 null 的可能性，使用 reference 可能会比使用 pointer 更有效率，因为使用 pointer 需要考虑其是否为 nullptr ，而 reference 则不需要。

```c++
	//使用reference
	void add(const int& ra,const int& rb)
    {
        cout<< ra+rb;
	}
```

```c++
	//使用pointer
	void add(const int *pa,const int *pb)
    {
        if(pa&&pb)
        {
			cout<< *pa+*pb;
        }
        else
        {
			cerr<<"nullptr";	
        }
    }

```

####reference不可被重新赋值,而non-const pointer可以

**reference 不可以在初始化之后被重新赋值，并且 reference 必须在定义时被赋值(即初始化)**，这有点类似于常指针（const pointer），但与之不同的是 reference 在被初始化时必须代表一个存在的对象，而 const pointer 则可被初始化为 null 。

<footer style="text-align:right; font-size:10px;">方程的疑问:或许 reference 就是通过 const pointer 实现的?</footer>		

定义一个 non-const pointer 则不需要初始化,并且可以被多次赋值。



####区分使用reference或pointer的场景

以下情形适合使用 reference:	

- 当确切的知道需要指向某个存在的对象并且不再改变使之指向其他对象时
- 一般情况下在运算符重载中,如重载 +、++、 +=、 [ ] 时 (有特殊需求时除外)

其他情况请使用 pointer 。

### 最好使用 C++ 转型操作符

​		C++ 转型操作符比 C-style 转型方式有更清晰的语义,更易于理解和查找

- ​	static_cast\<type\>(expression)
    - 将表达式转化为 type 类型,但不能改变常量性,也不能将某个struct转化为 int ,不能将某个 double 类型的变量转化为一个 pointer 。
- ​	const_cast\<type\>(expression)
    - 用于改变表达式的常量性
- ​	dynamic_cast\<type\>(expression)
    - 用于把 expression 转换成 type 类型的对象。type 必须是类的pointer、类的 reference 或者 void*
- ​	reinterpret_cast\<type\>(expression)
    - 用于进行各种不同类型的 pointer 之间、不同类型的 reference 之间以及指针和能容纳指针的整数类型之间的转换。转换时，执行的是逐个比特复制的操作。

<footer style="text-align:right;font-size:10px;"><a href="http://c.biancheng.net/view/410.html" style="text-decoration:none; color:red;">参考C语言中文网</a></footer>	

### 绝对不要以多态方式处理数组

对于下列代码，们预期的运行结果应为：

<center>1 1 1 1 1 1 1 1 1 1</center>

而实际运行结果则为：

<center>1 2 1 2 1 2 1 2 1 2</center>

```c++
	class base
    {
    public:
      	int a;
        base()
        {
			a=1;
        }
    }

	class derived:public base
    {
    public:
        int b;
        derived()
        {
            b=2;
        }
    }

	void print(base *array，int length)
    {
		for(int i;i<length;++i)
        {
            cout<<array[i].a<<" ";
        }
    }

	int main()
    {
		derived array[10];
        print(array,10);
        return 0;
    }
```



array[ i ] 其实是一个"指针算数表达式"的简写:它表达的其实是 \*(array+i) 。数组是用一段连续的内存空间存储的, array 与 array+i 在内存中相距 i * sizeof(typeObj)例如在函数 print 中,形参为 base* array , int length , 而 array[ i ] 在内存中与 array 相距 i * sizeof(baseObj) 。

运用多态时, 若传入的是派生类 derived 数组，则该元素在内存中占的空间将为sizeof(derivedObj) 而不是 print 中确定的 sizeof(baseObj)^[1]^ , 实际上 array[ i ] 在内存中与 array 相距 i * sizeof(derivedObj),但是编译器仍认为它们相距 i * sizeof(baseObj) 

如此一来, 在进行遍历等操作时 array[ i ]\(即*array+i\)将会位移至错误的位置,并输出 unexpected result.

"值得注意的是如果你不从一个具体类（concrete classes）（例如BST）派生出另一个具体类（例如BalancedBST），那么你就不太可能犯这种使用多态性数组的错误。"	请查看[item33](#item33)



<footer style="font-size:10px;text-align:right;">[1] sizeof(baseObj)与sizeof(derivedObj)通常并不相等

### 非必要不提供 default constructors 





## 操作符 Operators

### 对定制的"类型转换函数"保持警觉

<div id="item5"></div>

### 区别 increment / decrement 操作符的前置(prefix)和后置(postfix)形式

<div id="item6"></div>

### 千万不要重载 &&, || 和 , 操作符

<div id="item7"></div>

### 了解各种不同意义的 new 和 delete

<div id="item8"></div>

## 异常 Exceptions

### 利用 destructor 避免资源泄露

<div id="item9"></div>

### 在 constructor 内阻止资源泄露

<div id="item10"></div>

### 禁止异常(exception)流出 destructor 外

<div id="item11"></div>

### 了解"抛出一个exception"与"传递一个参数"或"调用一个虚函数"之间的差异

<div id="item12"></div>

###以 by reference 方式捕捉 exception

<div id="item13"></div>

### 明智运用 exception specifications

<div id="item14"></div>

### 了解异常处理(exception handling)的成本

<div id="item15"></div>

## 效率 Efficiency

### 谨记 80-20 法则

<div id="item15"></div>

### 考虑使用缓式评估(lazy evaluation)

 <div id="item17"></div>

### 分期摊还预期的计算成本

<div id="item18"></div>

### 了解临时对象的来源

<div id="item19"></div>

### 协助完成"返回值优化"(RVO)

<div id="item20"></div>

### 利用重载技术(overload)避免隐式类型转换(implicit type conversions)

<div id="item21"></div>

### 考虑以操作符复合形式(op=)取代其独身形式(op)

<div id="item22"></div>

### 考虑使用其他程序库

<div id="item23"></div>

### 了解 虚函数、多继承、虚基类、运行时类型识别的成本

<div id="item24"></div>

## 技术 Technique,Idioms,Patterns

### 将 constructor 和 non-member function 虚化

<div id="item25"></div>

### 限制某个 class 所能产生的对象数量

<div id="item26"></div>

### 要求(或禁止)对象产生于堆(heap)中

<div id="item27"></div>

### 智能指针(Smart pointers)

<div id="item28"></div>

### 引用计数(Reference counting)

<div id="item29"></div>

### 替身类、代理类(Proxy classes)

<div id="item30"></div>

### 让函数根据一个以上的对象类型来决定如何虚化

<div id="item31"></div>

##杂项讨论 Miscellany

### 在未来时态下发展程序

<div id="item32"></div>

### 将非尾端类(non-leaf classes)设计为抽象类(abstract classes)

<div id="item33"></div>

### 如何在同一个程序中结合 C++ 和 C

<div id="item34"></div>

### 让自己习惯于标准 C++ 语言

<div id="item35"></div>

