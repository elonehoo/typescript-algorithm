import { assert, expect, test } from 'vitest'
import {isStraight} from '../../../packages/core/src/algorithmic-complexity/time-complexity/contact'

test.skip('text start',()=>{
  console.log('text start')
})

test('is straight',()=>{
  console.log('is straight', isStraight([10,11,0,12,6]))
})
