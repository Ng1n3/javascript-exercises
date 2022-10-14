const books = [{title: 'Book', author: 'Name'},
{title: 'Book2', author: 'Name2'}]

// const getTheTitles = (books) => {
//  const totalTitle = books.reduce((total, books) => {
//     return total + `${books.title} `;
//  }, [''])
//  return totalTitle;
// };
const getTheTitles = (books) => 
{
    const totalTitle= books.map((books) => books.title)
    return totalTitle;
    

}

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
