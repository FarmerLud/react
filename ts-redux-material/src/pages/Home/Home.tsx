import { useCustomSelector, useCustomDispatch } from '../../hooks/redux'
import { setAccessToken } from '../../redux/slices/auth'

const Home = () => {
  const { auth } = useCustomSelector((state) => state)
  const dispatch = useCustomDispatch()

  console.log(auth.accessToken)

  const handleLogin = () => {
    dispatch(setAccessToken('asdadfsdfsdfsdf'))
  }

  return (
    <>
      Home
      <button onClick={handleLogin}>Botón</button>
    </>
  )
}

export default Home
