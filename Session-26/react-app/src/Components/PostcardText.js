function PostcardText({ title, text }) {
  return (
    <div className="postcard__text">
      <h2>{title}</h2>
      <p>{text} </p>
    </div>
  );
}
export default PostcardText;
