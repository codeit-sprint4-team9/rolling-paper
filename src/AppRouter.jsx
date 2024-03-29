import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/HomePage/Home';
import List from './pages/ListPage/List';
import NotFound from './pages/NotFound/NotFound';
import Message from './pages/PostPage/MessagePage/Message';
import NewPost from './pages/PostPage/NewPost/NewPost';
import Post from './pages/PostPage/UserPost/Post';
import Search from './pages/Search/Search';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/search' element={<Search />} />
          <Route path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/post/:id/message' element={<Message />} />
          <Route path='*' element={<Navigate to='/notFound' />} />
        </Route>
        <Route path='/notFound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
