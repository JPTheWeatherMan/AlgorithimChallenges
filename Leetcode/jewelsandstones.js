const j = "aA"
const s = "aAAbbbb"

const numJewelsInStones = function(J, S) {
  return S.split('').filter((c)=> J.includes(c)).length
};

numJewelsInStones(j, s)