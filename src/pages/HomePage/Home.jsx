import Button from '../../components/Button/Button';
import { MAIN_IMAGE_01, MAIN_IMAGE_02 } from '../../constant/constant';
import './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className='point01'>
        <div className='textBox'>
          <p>point. 01</p>
          <h1>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h1>
          <p>로그인 없이 자유롭게 만들어요.</p>
        </div>
        <img src={MAIN_IMAGE_01} alt='롤링 소개 이미지' />
      </div>
      <div className='point02'>
        <p>point. 02</p>
        <div className='textBox'>
          <h1>서로에게 이모지로 감정을 표현해보세요</h1>
          <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </div>
        <img src={MAIN_IMAGE_02} alt='롤링 소개 이미지' />
      </div>
      <Button>구경해보기</Button>
    </>
  );
};

export default Home;
