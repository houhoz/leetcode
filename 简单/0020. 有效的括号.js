let str1 = '()[]{}{}'
let str2 = '([)]'

// var isValid = s => {
//   while (s.includes('[]') || s.includes('()') || s.includes('{}')) {
//     s = s.replace('[]', '').replace('()', '').replace('{}', '')
//   }
//   return s.length === 0
// }

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let valid = true
  const stack = []
  const mapper = {
    '{': '}',
    '[': ']',
    '(': ')',
  }

  for (let i in s) {
    debugger
    const v = s[i]
    if (['(', '[', '{'].indexOf(v) > -1) {
      stack.push(v)
    } else {
      const peak = stack.pop()
      if (v !== mapper[peak]) {
        return false
      }
    }
  }

  if (stack.length > 0) return false

  return valid
}

console.log('isValid', isValid(str2))
