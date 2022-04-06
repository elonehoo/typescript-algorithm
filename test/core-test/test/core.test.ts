import { test } from 'vitest'
import {isStraight,cuttingRope} from '../../../packages/core/src/algorithmic-complexity/time-complexity/contact'

test.skip('text start',()=>{
  console.log('text start')
})

test.skip('is straight',()=>{
  console.log('is straight', isStraight([10,11,0,12,6]))
})

test('cutting rope',()=>{
  console.log('cutting rope', cuttingRope(2))
})
