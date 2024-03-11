import { Link } from 'react-router-dom';
import { ROLLING_ICON } from '../../constant/constant';
import css from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={css.background}>
      <div className={css.contents}>
        <Link to='/'>
          <img className={css.logo} src={ROLLING_ICON} alt='rolling' />
        </Link>
        <div className={css.errorArea}>
          <p className={css.notfound}>🄴🅁🅁🄾🅁</p>
          <p className={css.title}>𝟜𝟘𝟜</p>
          <p className={css.notfound}>🄽🄾🅃 🄵🄾🅄🄽🄳</p>
        </div>
        <p className={css.message}>죄송합니다. ૮꒰ྀི ⸝⸝ᴗ͈ ‸ ᴗ͈⸝⸝ ꒱ྀིა</p>
        <p className={css.message}>요청하신 페이지를 찾을 수 없습니다. ·ࡇ·</p>

        <p className={css.people}>
          👥👤👥 뭐야..👤👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤
          뭐야..👥👤👥👤👥👥👤👥👤👥👤👥👤👥👤👥👤👥👥 뭐야..👤👥👤
          👤👥👤👥👤👤👥👥👤👥👤👥👤👥👥👤👥웅성웅성..👤👥 👤👥👤👥👤👥👤👥👥👤👥
          👤👥👤👥👥👤👥👤👥👤👥 👥👤👥👤뭐야..👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤
          👥👤웅성..👥👤👥👥👤👥👤👥👤 👥👥👤👥뭐야..👤👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤
          뭐야..👥👤👥👤👥👥👤👥👤👥👤👥👤👥👤👥👤👥👥 뭐야..👤👥👤
          👤👥👤👥👤👤👥👥👤👥👤👥👤👥👥👤👥웅성웅성..👤👥 👤👥👤👥👤👥👤👥👥👤👥
          👤👥👤👥👥👤👥👤👥👤👥 👥👤👥👤뭐야..👥👥👤👥👥👤👥 👤👥👥👥👤👥👤👥👤
          👥👤웅성..👥👤👥👥👤👥👤👥👤 👥웅성웅성..👤👥 👤👥👤👥👤👥👤
        </p>
      </div>
    </div>
  );
};

export default NotFound;
