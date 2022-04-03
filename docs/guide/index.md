# 概述

## 时间复杂度

根据定义，时间复杂度指输入数据大小为 NN 时，算法运行所需花费的时间。需要注意：

- 统计的是算法的「计算操作数量」，而不是「运行的绝对时间」。计算操作数量和运行绝对时间呈正相关关系，并不相等。算法运行时间受到「编程语言 、计算机处理器速度、运行环境」等多种因素影响。例如，同样的算法使用 Python 或 C++ 实现、使用 CPU 或 GPU 、使用本地 IDE 或力扣平台提交，运行时间都不同。
- 体现的是计算操作随数据大小 NN 变化时的变化情况。假设算法运行总共需要「 11 次操作」、「 100100 次操作」，此两情况的时间复杂度都为常数级 O(1)O(1) ；需要「 NN 次操作」、「 100N100N 次操作」的时间复杂度都为 O(N)O(N) 。

### 符号表示

根据输入数据的特点，时间复杂度具有「最差」、「平均」、「最佳」三种情况，分别使用 OO , Θ , Ω 三种符号表示。以下借助一个查找算法的示例题目帮助理解。

> **题目**： 输入长度为 NN 的整数数组 nums ，判断此数组中是否有数字 77 ，若有则返回 true ，否则返回 false。
>
> **解题算法**： 线性查找，即遍历整个数组，遇到 77 则返回 true 。
>
> 代码：
> ```typescript
> function findSeven(nums:number[]):boolean{
>    for(var i = 0 ; i < nums.length ; i++){
>        if(nums[i] == 7){
>            return true
>        }
>    }
>   return false
> }
> ```

- 最佳情况 \Omega(1)Ω(1) ： nums = [7, a, b, c, ...] ，即当数组首个数字为 77 时，无论 nums 有多少元素，线性查找的循环次数都为 11 次；
- 最差情况 O(N)O(N) ： nums = [a, b, c, ...] 且 nums 中所有数字都不为 77 ，此时线性查找会遍历整个数组，循环 NN 次；
- 平均情况 \ThetaΘ ： 需要考虑输入数据的分布情况，计算所有数据情况下的平均时间复杂度；例如本题目，需要考虑数组长度、数组元素的取值范围等；

> 大 OO 是最常使用的时间复杂度评价渐进符号，下文示例与本题目解析皆使用 OO 。

### 常见种类

根据从小到大排列，常见的算法时间复杂度主要有:

O(1) < O(\log N) < O(N) < O(N\log N) < O(N^2) < O(2^N) < O(N!)

![step1](../.vitepress/public/guide/index/step1.png)

### 示例解析

对于以下所有示例，设输入数据大小为 NN ，计算操作数量为 countcount 。图中每个「蓝色方块」代表一个单元计算操作。

#### 常数 O(1)O(1) ：

运行次数与 NN 大小呈常数关系，即不随输入数据大小 NN 的变化而变化。

```typescript
function algorithm(N:number):number{
    const a:number = 1
    const b:number = 2
    const x:number = a * b + N

    return 1
}
```

对于以下代码，无论 aa 取多大，都与输入数据大小 NN 无关，因此时间复杂度仍为 O(1)O(1) 。

```typescript
function algorithm2(N:number):number{
    let count:number = 0
    const a:number = 10000

    for(var i:number = 0 ; i < a ; i++){
        count++
    }
    return count
}
```

![step2](../.vitepress/public/guide/index/step2.png)

#### 线性 O(N)O(N) ：

循环运行次数与 NN 大小呈线性关系，时间复杂度为 O(N)O(N) 。


