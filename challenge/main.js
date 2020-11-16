const array = ['犬', '猫', '兎', '鳥', '川獺']

//取り出し配列作成
console.log(array.slice(4) + 'は可愛いです。')
//逆転
console.log(array.reverse())
//配列の結合
const array2 = ['こ', 'ん', 'に', 'ち', 'わ']
console.log(array2.join())

//stringとarrayの違い
//arrayでは関数を用いて使うメソッドがいくつかある
//arrayには繰り返し、検索がない
//stringには関数を用いるメソッドがない

//共通点
//結合、指定、値を新しく返すことができる