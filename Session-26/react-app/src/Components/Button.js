function Button({ padding, fontSize, bgColor, textColor, border, borderRad, children, onClick }) {
  const styles = {
    padding: padding,
    fontSize: fontSize,
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: borderRad,
    border: border,
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
