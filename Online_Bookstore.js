function Author(name,birthyear,nationality){
    this.name=name;
    this.birthyear=birthyear;
   this.nationality=nationality;

}
function Book(title,author,genre,price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price
   

}
Book.prototype.getBookInfo=function(){
    console.log(`title:- ${this.title}`)
    console.log(` author:- ${this.author.name}`)
    console.log(` genre:- ${this.genre}`)
    console.log(` price:- ${this.price}`)
    
}
const author1=new Author('J.K. Rowling', 1965, 'British')
const author2=new Author('George R.R. Martin', 1948, 'American')
const author3=new Author('Haruki Murakami', 1949, 'Japanese')

const book1=new Book('Harry Potter and the Sorcerer\'s Stone', author1, 'Fantasy', 25.99)
const book2=new Book('A Game of Thrones', author2, 'Fantasy', 29.99)
const book3=new Book('Norwegian Wood', author3, 'Fiction', 19.99)

book1.getBookInfo()
book2.getBookInfo()
book3.getBookInfo()

