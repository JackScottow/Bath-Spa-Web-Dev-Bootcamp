import PostcardImage from "./PostcardImage";
import PostcardText from "./PostcardText";

function Postcard({ imageSrc, text, title }) {
  return (
    <div className="postcard">
      <PostcardImage imageSrc={imageSrc} />
      <PostcardText title={title} text={text} />
    </div>
  );
}
export default Postcard;
