import { useCustomDispatch, useCustomSelector } from '../../hooks/redux'
import { login } from '../../redux/slices/auth'
import { Button, Switch } from '@mui/material'
import { setThemeMode } from '../../redux/slices/settings'

const Home = () => {
  const {
    auth: { accessToken, isLoading },
    settings: { themeMode }
  } = useCustomSelector((state) => state)
  const dispatch = useCustomDispatch()

  console.log(accessToken, isLoading)

  const handleLogin = () => {
    login(
      {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      },
      dispatch
    )
  }

  const handleChangeTheme = () => {
    dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      Home
      <Button variant="contained" onClick={handleLogin}>
        Botón
      </Button>
      <Switch onChange={handleChangeTheme}></Switch>
      <p>{isLoading ? 'loading...' : ':)'}</p>
    </>
  )
}

export default Home
