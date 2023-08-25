const Comment = require('../model/Comment');
// 함수 내보내기 08-node math2.js 참고

exports.main = (req, res) => {
  res.render('index');
};

exports.comments = (req, res) => {
  res.render('comments', { comments: Comment.getCommentAll() });
};

exports.comment = (req, res) => {
  const cmtId = Number(req.params.id);

  const comments = Comment.getCommentAll(); //댓글 목록 배열

  if (!comments[cmtId - 1]) {
    res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] });
};
