/**
 * 输入长度为 NN 的整数数组 nums ，
 * 判断此数组中是否有数字 77 ，
 * 若有则返回 true ，否则返回 false 。
 * 
 * @param nums 数组
 * @returns 线性查找，即遍历整个数组，遇到 77 则返回 true 。
 */
 export function findSeven(nums:number[]):boolean{
    for(var i = 0 ; i < nums.length ; i++){
        if(nums[i] == 7){
            return true
        }
    }
    return false
}

/**
 * 运行次数与 NN 大小呈常数关系，即不随输入数据大小 NN 的变化而变化。
 * 
 * @param N 输入数据
 * @returns 计算操作数量
 */
export function algorithm(N:number):number{
    const a:number = 1
    const b:number = 2
    const x:number = a * b + N

    return 1
}

/**
 * 对于以下代码，无论 aa 取多大，都与输入数据大小 NN 无关，因此时间复杂度仍为 O(1)O(1) 。
 * 
 * @param N 输入数据
 * @returns 计算操作结构
 */
export function algorithm2(N:number):number{
    let count:number = 0
    const a:number = 10000

    for(var i:number = 0 ; i < a ; i++){
        count++
    }
    return count
}

/**
 * 线性 O(N)O(N) ：
 * 循环运行次数与 NN 大小呈线性关系，时间复杂度为 O(N)O(N) 。
 * 
 * @param N 输入数据
 * @returns 循环运行次数与 NN 大小呈线性关系
 */
export function algorithm3(N:number):number{
    let count:number = 0
    for(var i = 0; i < N ; i++){
        count++
    }
    return count
}

/**
 * 虽然是两层循环，但第二层与 NN 大小无关，因此整体仍与 NN 呈线性关系。
 * 
 * @param N 输入数据
 * @returns 整体仍与 N 呈线性关系
 */
export function algorithm4(N:number):number{
    let count:number = 0
    let a:number = 10000
    for(var i = 0; i < N ; i++){
        for(var j = 0; j < a ; j++){
            count++
        }
    }
    return count
}

/**
 * 两层循环相互独立，都与 NN 呈线性关系，因此总体与 NN 呈平方关系，时间复杂度为 O(N^2)O(N2) 。
 * @param N 输入数据
 * @returns 总体与 NN 呈平方关系
 */
export function algorithm5(N:number):number{
    let count:number = 0
    for(var i = 0 ; i < N ;i++){
        for(var j = 0 ; j < N ; j++){
            count++
        }
    }
    return count
}

/**
 * 冒泡排序
 * 
 * @param nums 需要排序的数组
 * @returns 排序结果的数组
 */
export function algorithm6(nums:number[]):number[]{
    let N:number = nums.length
    for(var i = 0; i < N - 1; i++){
        for(var j = 0; j < N - 1; j++){
            if (nums[j] > nums[j + 1]) {
                var tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return nums
}

/**
 * 指数阶常出现于递归
 * 
 * @param N 指数阶
 * @returns 指数阶
 */
export function algorithm7(N:number):number{
    if(N <= 0){
        return 1
    }
    let count_1:number = algorithm7(N - 1)
    let count_2:number = algorithm7(N - 1);
    return count_1 + count_2
}

/**
 * 阶乘阶对应数学上常见的 “全排列” 。即给定 NN 个互不重复的元素，求其所有可能的排列方案
 * @param N 阶乘阶
 * @returns 阶乘阶
 */
export function algorithm8(N:number):number{
    if(N <= 0){
        return 1
    }
    let count:number = 0
    for(var i = 0 ; i < N ; i++){
        count += algorithm8(N - 1)
    }
    return count
}

/**
 * 对数阶与指数阶相反，指数阶为 “每轮分裂出两倍的情况” ，而对数阶是 “每轮排除一半的情况” 。对数阶常出现于「二分法」、「分治」等算法中，体现着 “一分为二” 或 “一分为多” 的算法思想。
 * 
 * @param N 输入数据大小
 * @returns 线性关系
 */
export function algorithm9(N:number):number{
    let count = 0
    let i = N
    while(i > 1){
        i = i / 2
        count++
    }
    return count
}

/**
 * 为二分查找的时间复杂度
 * @param N 输入数据大小
 * @returns 线性关系
 */
export function algorithm10(N:number):number{
    let count:number = 0
    let i = N
    let a:number = 3
    while(i > 1){
        i = i / a
        count++
    }
    return count
}

/**
 * 两层循环相互独立，第一层和第二层时间复杂度分别为 O(\log N)O(logN) 和 O(N)O(N) ，则总体时间复杂度为 O(N \log N)O(NlogN) ；
 */
export function algorithm11(N:number):number{
    let count:number = 0
    let i = N
    while(i > 1){
        i = i / 2
        for(var j = 0 ; j < N ; j++){
            count++
        }
    }
    return count
}
