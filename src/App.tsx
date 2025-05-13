import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Index from './pages/index'
import Blog from './pages/blog'
import Concept from './pages/concept'
import Imprint from './pages/imprint'
import PrivacyPolicy from './pages/privacypolicy'
import Rooms from './pages/rooms'
import NotFound from './pages/404'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Index />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/concept"
            element={<Concept />}
          />
          <Route
            path="/imprint"
            element={<Imprint />}
          />
          <Route
            path="/privacypolicy"
            element={<PrivacyPolicy />}
          />
          <Route
            path="/rooms"
            element={<Rooms />}
          />
          <Route element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
