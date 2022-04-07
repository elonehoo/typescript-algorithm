import { test } from 'vitest'
import {isStraight,cuttingRope,search,myPow,fib} from '../../../packages/core/src/algorithmic-complexity/time-complexity/contact'

test.skip('text start',()=>{
  console.log('text start')
})

test.skip('is straight',()=>{
  console.log('is straight', isStraight([10,11,0,12,6]))
})

test.skip('cutting rope',()=>{
  console.log('cutting rope', cuttingRope(2))
})

test.skip('search',()=>{
  console.log('search',search([5,7,7,8,8,10],8))
})

test.skip('my pow',()=>{
  console.log('my pow',myPow(2.00000,10))
})

test('fib',()=>{
  console.log('fib',fib(5))
})
