// Should use a UUID for the key 
//  Map over comment list from App.js state and render each comment

const Comments = ({ commentList }) => (
    <section className="comments">
      {
        commentList.map((comment, i) => {
        return (
          <article key={i} className="comments__comment">
            <p className="comments__comment--user">{comment.userName}</p>

            <p className="comments__comment--copy">{comment.comment}</p>

            <p className="comments__comment--date-time">
              {comment.commentDate}
            </p>
          </article>
        );
      })
    }
    </section>
  );

export default Comments;
