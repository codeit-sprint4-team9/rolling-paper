import { EMOJI_ICON_PATH, EMOJI_WHITE_ICON_PATH } from '../../constant/constant';
import css from './OutlinedButton.module.scss';

const OutlinedButton = ({
  isDisabled = false,
  hasIcon = false,
  size = 'extraLarge',
  children,
  onClick,
}) => {
  return (
    <section>
      <button className={css[size]} disabled={isDisabled} onClick={onClick}>
        {hasIcon && (
          <img
            className={css.emojiIcon}
            src={isDisabled ? EMOJI_WHITE_ICON_PATH : EMOJI_ICON_PATH}
            alt='plus'
          />
        )}
        <p className={css.buttonTitle}>{children}</p>
      </button>
    </section>
  );
};

export default OutlinedButton;
