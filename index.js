function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = musicians.length; musicians.length < i; i++){
    array.push(`${musicians} plays ${instruments}`)
  }
  return array
}
