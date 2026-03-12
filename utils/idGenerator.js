module.exports = function(list){
  if(list.length === 0) return 1

  const ids = list.map(item => item.id)
  const maxId = Math.max(...ids)

  return maxId + 1
}