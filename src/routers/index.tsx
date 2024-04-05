import {FC} from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppHome, AdminHome} from '../pages'

export const AppRouter: FC = () => {
  return (
    <Routes>
        <Route path="/" element={<AppHome/>}/>
    </Routes>
  )
}

export const AdminRouter: FC = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminHome/>}/>
    </Routes>
  )
}
