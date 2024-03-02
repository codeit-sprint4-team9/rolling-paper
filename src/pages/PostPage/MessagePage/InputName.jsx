import Input from '../../../components/Input/Input';
import css from './InputName.module.scss';

const InputName = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>From.</h1>
      <Input placeholder='이름을 입력해 주세요.' isDisabled={false} />
    </div>
  );
};

export default InputName;
