// var x ='The answer is' - 2;
// var y = 42+ 'is the answer';
// console.log(x);
// console.log(y);
// console.log(isNaN(x));
// console.log(isNaN(y));
// 图书馆
function Book ( isbn, title, author ) {
    this._setIsbn(isbn);
    this.title = title || '未给标题';
    this.author = author || '未给作者';
}

Book.prototype._setIsbn = function(isbn) {
    if(this._checkIsbn()){
        this.isbn=isbn;
    } else {
        throw new Error('isbn有误');
    }
}

Book.prototype.borrow=function(){

}

Book.prototype._checkIsbn=function(isbn){
    return /[0-90{10}]/.test(isbn);
}

Book.prototype.getTitle =function(){
    return this.title;
}

Book.prototype.getAuthor = function(){
    return this.author;
}

var book = new Book('sjs1212','三国演义','罗贯中');