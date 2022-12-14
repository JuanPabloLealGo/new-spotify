import { useRoutes } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Favorites from "./components/pages/Favorites"
import Home from "./components/pages/Home"
import Landing from "./components/pages/Landing"
import NotFound from "./components/pages/NotFount"
import { RootState, useAppSelector } from "./redux-store"
import Services from "./components/pages/Services"
import StyleGuide from "./components/pages/StyleGuide"
import useAuth from "./hooks/useAuth"
import "./scss/main.scss"
import TermsOfServices from "./components/pages/TermsOfService"
import PrivacyPolicy from "./components/pages/PrivacyPolicy"
import Playlist from "./components/pages/Playlist"

const App = () => {
  useAuth()
  const isAuthenticated = useAppSelector((state: RootState) => state.auth.data)
  const isDarkTheme = useAppSelector((state: RootState) => state.ui.isDarkTheme)
  let initialScreen = isAuthenticated ? <Home /> : <Landing />

  const element = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: initialScreen },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'favorites', element: <Favorites /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
        { path: 'services', element: <Services /> },
        { path: 'terms-of-service', element: <TermsOfServices /> },
        { path: 'playlist/:id', element: <Playlist /> }
      ]
    },

    {
      path: '/styleguide',
      element: <StyleGuide />,
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className={isDarkTheme ? 'dark' : 'light'}>
      {element}
    </div>
  )
}

// OTHER WAY:
/*
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/playlists' element={<MainLayout />} >
        <Route index element={<Playlists />} />
        <Route path=':id' element={<Playlist />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
*/

export default App;
