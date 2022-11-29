import PostcardImage from "./PostcardImage";
import PostcardText from "./PostcardText";

function Postcard({ imageSrc, text, title, isDarkmode }) {
  return (
    <div className={`postcard${isDarkmode ? " darkmode" : ""}`}>
      <PostcardImage imageSrc={imageSrc} />
      <PostcardText title={`${title} By ${isDarkmode ? "Night" : "Day"}`} text={text} />
    </div>
  );
}
export default Postcard;
