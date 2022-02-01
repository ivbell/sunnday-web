import { observer } from 'mobx-react'
import React, { FC } from 'react'
import EmptyLayout from '../components/layouts/EmptyLayout'
import UiStore from '../lib/store/UiStore'

const Home: FC = observer(() => {
  return (
    <EmptyLayout title={'Home'}>
      Home
      <div onClick={() => UiStore.toggleMode()}>123</div>
    </EmptyLayout>
  )
})

export default Home
