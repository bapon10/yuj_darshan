import './Button.css';

function Button({ variant = 'primary', as = 'button', children, ...props }) {
  const Tag = as;
  return (
    <Tag className={`btn btn--${variant}`} {...props}>
      {children}
    </Tag>
  );
}

export default Button;