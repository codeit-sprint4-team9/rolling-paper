import css from './Button.module.scss';
const Button = ({ children, type, size, isDisabled = false, onclick }) => {
  let buttonClassName = `${css.primary}`;
  if (type === 'secondary') buttonClassName = `${css.secondary} ${css.small}`;
  if (size === 'small') buttonClassName += ` ${css.small}`;
  if (size === 'full') buttonClassName += ` ${css.full}`;

  return (
    <>
      <button className={buttonClassName} disabled={isDisabled} onClick={onclick}>
        {children}
      </button>
    </>
  );
};

export default Button;
