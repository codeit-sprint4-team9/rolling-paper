import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../../components/Button/Button';
import ToggleButton from '../../../components/Button/ToggleButton';
import Input from '../../../components/Input/Input';
import Upload from '../../../components/Upload/Upload';
import { BACKGROUND_COLOR_LIST } from '../../../constant/constant.js';
import createAxiosInstance from '../../../utils/axios';
import css from './NewPost.module.scss';
import OptionCardList from './OptionCardList/OptionCardList';

const NewPost = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [selectedButton, setSelectedButton] = useState('color');
  const [selectedOption, setSelectedOption] = useState(0);
  const [isInputError, setIsInputError] = useState(false);
  const [backgroundImageList, setBackgroundImageList] = useState([]);
  const [uploadImageURL, setUploadImageURL] = useState(null);

  useEffect(() => {
    const fetchBackgroundList = async () => {
      const { data: response } = await axios.get(
        'https://rolling-api.vercel.app/background-images/',
      );
      setBackgroundImageList(response.imageUrls);
    };
    fetchBackgroundList();
  }, []);

  const handleInputChange = value => {
    setInputValue(value);
  };

  const handleInputBlur = () => {
    inputValue === '' ? setIsInputError(true) : setIsInputError(false);
  };

  const handleButtonClick = () => {
    if (selectedButton === 'color') return setSelectedButton('image');
    setSelectedButton('color');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const axios = createAxiosInstance();
    const postData = {
      name: inputValue,
      backgroundColor: BACKGROUND_COLOR_LIST[selectedOption],
      backgroundImageURL: selectedButton === 'color' ? null : backgroundList[selectedOption],
    };

    try {
      const result = await axios.post('/recipients/', postData);
      navigate(`/post/${result.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const backgroundList =
    typeof uploadImageURL === 'string'
      ? [uploadImageURL, ...backgroundImageList]
      : backgroundImageList;
  return (
    <section className={css.layout}>
      <form className={css.formBox} onSubmit={handleSubmit}>
        <div className={css.titleBox}>
          <h2 className={css.title}>To.</h2>
          <Input
            value={inputValue}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            isError={isInputError}
            placeholder='받을 사람을 입력해 주세요.'
          />
        </div>
        <div className={css.backgroundBox}>
          <h2 className={css.title}>배경화면을 선택해 주세요.</h2>
          <p className={css.description}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          <div className={css.toggleButtonBox}>
            <ToggleButton selectedButton={selectedButton} onClick={handleButtonClick} />
            {selectedButton === 'image' && <Upload setUploadImageURL={setUploadImageURL} />}
          </div>
          <div className={css.cardListBox}>
            <OptionCardList
              cardList={selectedButton === 'color' ? BACKGROUND_COLOR_LIST : backgroundList}
              selectedButton={selectedButton}
              selectedOption={selectedOption}
              onClick={setSelectedOption}
            />
          </div>
        </div>
        <Button fill isDisabled={inputValue === ''} width='100%'>
          생성하기
        </Button>
      </form>
    </section>
  );
};

export default NewPost;
