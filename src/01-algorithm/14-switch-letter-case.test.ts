/**
 * @description 切换字母大小写 test
 * @author Kevin
 */

 import { switchLetterCase1, switchLetterCase2 } from './14-switch-letter-case'

 describe('切换字母大小写', () => {
     it('正常', () => {
         const str = '100aBcD$#xYz'
         const res = switchLetterCase1(str)
         expect(res).toBe('100AbCd$#XyZ')
     })
     it('空字符串', () => {
         const res = switchLetterCase1('')
         expect(res).toBe('')
     })
     it('非字母', () => {
         const res = switchLetterCase1('100$%你好')
         expect(res).toBe('100$%你好')
     })
 })
 