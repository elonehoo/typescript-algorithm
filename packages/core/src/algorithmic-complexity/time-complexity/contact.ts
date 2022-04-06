/**
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，
 * 即这5张牌是不是连续的。2～10为数字本身，
 * A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 * 
 * 示例1
 * 输入: [1,2,3,4,5]
 * 输出: True
 * 
 * 实例2
 * 输入: [0,0,1,2,5]
 * 输出: True
 * 
 * 限制：
 * 数组长度为 5 
 * 数组的数取值为 [0, 13].
 * 
 * 思路 
 * 排序，去重，获取最大 / 最小的牌，判断是否为顺子
 * 
 * @param nums 若干副扑克牌中随机抽 5 张牌
 * @return 是不是一个顺子
 */
export function isStraight(nums: number[]): boolean {
  let joker:number = 0
  nums = nums.sort((a,b)=>a - b)
  for(let i = 0 ; i < nums.length - 1; i++){
    if(nums[i] === 0){
      joker++
    }else if(nums[i] === nums[i + 1]){
      return false
    }
  }
  return nums[4] - nums[joker] < 5
}

/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
 * 每段绳子的长度记为 k[0],k[1]...k[m-1] 。
 * 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 例如，
 * 当绳子的长度是8时，
 * 我们把它剪成长度分别为2、3、3的三段，
 * 此时得到的最大乘积是18。
 * 
 * 示例 1：
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1
 * 
 * 示例 2:
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
 * 
 * 提示：
 * 2 <= n <= 58
 * 
 * @param n 长度为 n 的绳子
 * @return 最大的乘积
 */
export function cuttingRope(n: number): number {
  if(n === 2){return 1}
  if(n === 3){return 2}
  if(n === 4){return 4}
  let res:number = 1
  while(n > 4){
    res *= 3
    n -= 3
  }
  res *= n
  return res
}

/**
 * 统计一个数字在排序数组中出现的次数。
 * 
 * 示例 1:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: 2
 * 
 * 示例 2:
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: 0
 * 
 * 提示：
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums 是一个非递减数组
 * -109 <= target <= 109
 * 
 * @param nums 排序数组
 * @param target 一个数字
 */
export function search(nums: number[], target: number): number {
  /**
  let count:number = 0
  for (let num of nums){
    if(num === target){
      count++
    }
  }
  return count
   */

  return search_helper(nums,target) - search_helper(nums,target - 1)
};

function search_helper(nums:number[],target:number):number{
  let i:number = 0
  let j:number = nums.length - 1
  while(i <= j){
    const m = i + ((j - i) >> 1)
    if(nums[m] <= target){
      i = m + 1
    }else{
      j = m - 1
    }
  }
  return i
}
