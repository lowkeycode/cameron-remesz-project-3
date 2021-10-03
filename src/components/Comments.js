const Comments = ({ commentList }) => {
  //todo Create date variable to get timestamp here and return below

  console.log("From Comments props", commentList);

  return (
    <section className="comments">
      {commentList.map((comment, i) => {
        return (
          <div key={i} className="comments__comment">
            <p className="comments__comment--user">{comment.userName}</p>

            <p className="comments__comment--copy">{comment.comment}</p>

            <p className="comments__comment--date-time">
              {comment.commentDate}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
