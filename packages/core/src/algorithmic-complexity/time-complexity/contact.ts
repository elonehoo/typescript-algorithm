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

/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。
 * 不得使用库函数，同时不需要考虑大数问题。
 * 
 * 示例 1：
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 * 
 * 示例 2：
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 * 
 * 示例 3：
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2-2 = 1/22 = 1/4 = 0.25
 * 
 * 提示：
 * -100.0 < x < 100.0
 * -231 <= n <= 231-1
 * -104 <= xn <= 104
 * 
 * @param x 底数
 * @param n 幂次数
 */
export function myPow(x: number, n: number): number {
  if(n === 0){return 1}
  if(n === 1){return x}
  if(n === -1){return 1 / x}
  let result:number = myPow(x, n >> 1)
  result *= result
  if ((n & 1) == 1) {
    result *= x
  }
  return result
};

/**
 * 写一个函数，输入 n ，
 * 求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。
 * 斐波那契数列的定义如下：
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * 
 * 示例 1：
 * 输入：n = 2
 * 输出：1
 * 
 * 示例 2：
 * 输入：n = 5
 * 输出：5
 * 
 * 提示：
 * 0 <= n <= 100
 * 
 * @param n 第 n 项
 * @return 斐波那契（Fibonacci）数列的第 n 项
 */
export function fib(n: number): number {
  let a:number = 0
  let b:number = 1
  let sum:number = 0
  for(let i:number = 0; i < n ;i++){
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a
}


class ListNode{
  val: number
  next: ListNode | null
  constructor(val?:number , next?: ListNode|null){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 限制：
 * 0 <= 节点个数 <= 5000
 * 
 * @param head 链表
 * @returns 链表
 */
export function reverseList(head: ListNode | null): ListNode | null {
   let cur:ListNode | null = head
   let pre:ListNode | null = null

    while(cur !== null){
      const temp:ListNode | null = cur.next
      cur.next = pre
      pre = cur
      cur = temp
    }

   return pre
};

/**
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 
 * 示例 1:
 * 输入: [10,2]
 * 输出: "102"
 * 示例 2:
 * 输入: [3,30,34,5,9]
 * 输出: "3033459"
 * 
 * 提示:
 * 0 < nums.length <= 100
 * 
 * 说明:
 * 输出结果可能非常大，所以你需要返回一个字符串而不是整数
 * 拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
 * 
 * @param nums 一个非负整数数组
 * @returns 拼接起来的数字
 */
export function minNumber(nums: number[]): string {
  return nums.sort((a, b) => Number(String(a) + String(b)) < Number(String(b) + String(a)) ? -1 : 1).map(e => String(e)).join('');
};

/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
 * 
 * 示例 1:
 * 输入: [7,5,6,4]
 * 输出: 5
 * 
 * 限制：
 * 0 <= 数组长度 <= 50000
 * 
 * @param nums 数组
 * @return 逆序对的总数
 */
export function reversePairs(nums: number[]): number {
  if (nums.length === 0) return 0;
  let ans = 0;

  let left = 0;
  let right = nums.length - 1;

  mergeSort(left, right);

  function mergeSort(left:number, right:number) {
      if (left >= right) return;
      let mid = left + ((right - left) >> 1);
      mergeSort(left, mid);
      mergeSort(mid + 1, right);

      merge(left, mid, right);
  }

  function merge(lo:number, mid:number, hi:number) {
      let temp = [];
      let index = 0;
      let i = lo;
      let j = mid + 1;

      while(i <= mid && j <= hi) {
          if (nums[i] <= nums[j]) {
              temp[index++] = nums[i++];
          } else {
              temp[index++] = nums[j++];
              ans += (mid - i) + 1;
          }
      }

      while(i <= mid) {
          temp[index++] = nums[i++];
      }

      while(j <= hi) {
          temp[index++] = nums[j++];
      }

      for (let k = 0; k < temp.length; k++) {
          nums[lo + k] = temp[k];
      }
  }

  return ans;
};
