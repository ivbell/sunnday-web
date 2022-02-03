import { observer } from 'mobx-react'
import React, { FC } from 'react'
import EmptyLayout from '../components/layouts/EmptyLayout'

const Home: FC = observer(() => {
  return <EmptyLayout title={'Home'}>Home</EmptyLayout>
})

export default Home
