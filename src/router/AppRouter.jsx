import {Routes, Route} from 'react-router-dom';
import {Navar} from '../ui/components';
import {DCPage, MarvelPage} from '../heroes/pages/index';
import {HeroPage, LoginPage, SearchPage} from '../auth/pages/index';

export const AppRouter = () => {
  return (
    <>
      <Navar/>
      <Routes>

        <Route path='/' element={<MarvelPage/>}/>
        <Route path='marvel' element={<MarvelPage/>}/>
        <Route path='dc' element={<DCPage/>}/>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='hero/:id' element={<HeroPage/>}/>

      </Routes>
    </>
  )
}


