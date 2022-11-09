export function removeDuplicates(nums: number[]): number[] {
  if (nums.length < 2) return nums
  const map = buildDupMap(nums)
  let counter = 0
  for (const key in map) {
      if (map[key].length > 1) {
        const idxsToRemove = map[key]
        idxsToRemove.forEach((el, i) => {
          if (i !== 0 ){
            nums.splice(el - counter, 1)
            counter++
          }
        })
    }
  }
  return nums
};


type DupObjMap = {
  [key: number]: number[]
}

function buildDupMap(arr: number[]): DupObjMap {
  const dupObjMap: DupObjMap = {}
  arr.forEach((obj, i) => {
    if (!dupObjMap[obj]) { 
      dupObjMap[obj] = [i]
    }
    else {
      dupObjMap[obj].push(i)
    }
  })
  return dupObjMap
}