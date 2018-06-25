function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; musicians.length > i; i++){
    array.push(`${musicians} plays ${instruments}`)
  }
  return array
}
