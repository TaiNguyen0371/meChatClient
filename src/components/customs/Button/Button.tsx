type ButtonProp = {
  className?: string;
  content?: string;
  type?: 'button' | 'submit' | 'reset';
};
const Button = ({ className, content, type = 'button' }: ButtonProp) => {
  return (
    <button type={type} className={`py-3 px-5 border-pr-green border-2 rounded-2xl ${className}`}>
      {content}
    </button>
  );
};

export default Button;
