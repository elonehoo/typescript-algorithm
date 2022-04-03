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

