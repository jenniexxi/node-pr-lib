//book 에서 쓰이는 내용의 type 지정
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('book', bookSchema);
//bookSchema 라는 것을 정의했잖아
//이거를 book 이라는 거에 넣겠다는 거지
//mongodb에 몽구즈를 활용행서 우리가 정의한 bookSchema를 book 이라는 거로 쓰겠다 이 모델에서