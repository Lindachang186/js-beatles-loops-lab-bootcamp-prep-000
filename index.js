function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; musicians.length > i;){
    array.push(`"${musicians}`+" plays "+`${instruments}"`)
  }
  return array
}
