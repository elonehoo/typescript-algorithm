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
