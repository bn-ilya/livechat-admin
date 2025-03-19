import { useState } from 'react';
import { FoolproofForm } from './features/foolproof-form';
import { StatisticPanel } from './features/statistic-panel'
import { TableUsers } from './features/table-users'
import { foolproofCode } from './shared/consts';

function App() {
  const [code, setCode] = useState(Number(localStorage.getItem('foolproofCode')))

  if (code !== foolproofCode) return <FoolproofForm setCode={setCode}/>
  return (
    <>
      <StatisticPanel />
      <TableUsers />
    </>
  )
}

export default App
