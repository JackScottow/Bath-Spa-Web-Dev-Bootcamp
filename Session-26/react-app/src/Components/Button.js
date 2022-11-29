function Button({ padding, fontSize, bgColor, textColor, borderRad, children, onClick }) {
  const styles = {
    padding: padding,
    fontSize: fontSize,
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: borderRad,
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
