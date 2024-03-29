import Dropdown from '../../../../components/Dropdown/Dropdown';
import { FONT_LIST } from '../../../../constant/constant';
import css from './FontPicker.module.scss';

const FontPicker = ({ onChange }) => {
  return (
    <section className={css.box}>
      <h1 className={css.title}>폰트 선택</h1>
      <Dropdown
        isTabletChange={true}
        optionList={FONT_LIST}
        initialOption={FONT_LIST[0]}
        onChange={onChange}
      />
    </section>
  );
};

export default FontPicker;
