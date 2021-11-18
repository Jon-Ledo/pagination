const paginate = (followers) => {
  const itemsPerPage = 12
  const numberOfPages = Math.ceil(followers.length / itemsPerPage) // round up in the event, you don't get an even number of pages

  // construct new array using Array.from()
  // Array.from() lets you create Arrays from array-like objects (objects with a length property and indexed elements)
  // Array.from({length:numberOfPages} returns array object with a length property of 9, all undefined. The callback is what will defiine the contents 
  const newFollowers = Array.from({length:numberOfPages}, ( _, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}

export default paginate