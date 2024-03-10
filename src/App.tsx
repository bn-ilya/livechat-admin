import './App.css'
import { useGetUsersQuery } from './shared/api'

function App() {
  const {data} = useGetUsersQuery();

  return (
    <>
     {data && data.map(user => (
      <div key={user.id}>{user.}</div>
     ))}
    </>
  )
}

export default App
