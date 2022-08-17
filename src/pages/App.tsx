import { Route, Routes } from 'react-router-dom'
import { Repos } from './Repos'
import User from './User'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/repos/*" element={<Repos />} />
    </Routes>
  )
}
