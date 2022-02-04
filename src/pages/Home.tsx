import { Button } from '@chakra-ui/react'
import { observer } from 'mobx-react'
import React, { FC } from 'react'
import EmptyLayout from '../components/layouts/EmptyLayout'
import Cookie from 'universal-cookie'

const Home: FC = observer(() => {
  const cookie = new Cookie()
  const token = cookie.get('token')
  console.log(token)

  return (
    <EmptyLayout title={'Home'}>
      <Button>click auth</Button>
    </EmptyLayout>
  )
})

export default Home
