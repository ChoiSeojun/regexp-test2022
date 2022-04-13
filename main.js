const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/.{1,}(?=\@)/g) // @는 특수문자라서 \백슬래시 써야하는데 정규표현식에서 @가 의미가 없기 때문에 \백슬래시 안써줘도됨
  )
console.log(
  str.match(/(?<=@).{1,}/g)
)