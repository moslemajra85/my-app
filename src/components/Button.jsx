const Button = ({ variant, children, onPress }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onPress}>
      {children}
    </button>
  );
};
export default Button;
