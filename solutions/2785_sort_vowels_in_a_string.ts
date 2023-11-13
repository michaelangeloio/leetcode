const vowels = {
  A: 65,
  E: 69,
  I: 73,
  O: 79,
  U: 85,
  a: 97,
  e: 101,
  i: 105,
  o: 111,
  u: 117,
}

const vowelRank = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

const addToVowelMap = (
  vowelMap: Map<string, number>,
  val: string
) => {
  const existingVal = vowelMap.get(val)
  if (!existingVal) {
    vowelMap.set(val, 1)
  } else {
    vowelMap.set(val, existingVal + 1)
  }
}

function sortVowels(s: string): string {
  const stringArr = s.split('')

  const vowelMap = new Map<string, number>()

  const indicesArr: number[] = []

  for (let i = 0; i < s.length; i++) {
    const val = s[i]
    if (vowels[val]) {
      indicesArr.push(i)
      addToVowelMap(vowelMap, val)
    }
  }

  const finalVowelArr: string[] = []

  vowelRank.forEach((val) => {
    const foundVal = vowelMap.get(val)
    if (foundVal) {
      for (let i = 0; i < foundVal; i++) {
        finalVowelArr.push(val)
      }
    }
  })

  for (let i = 0; i < finalVowelArr.length; i++) {
    const finalVowel = finalVowelArr[i]
    const indiceToReplace = indicesArr[i]
    stringArr[indiceToReplace] = finalVowel
  }
  console.log(stringArr)

  return stringArr.join('')
}
