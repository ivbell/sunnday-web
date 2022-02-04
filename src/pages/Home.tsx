import { Button } from '@chakra-ui/react'
import { observer } from 'mobx-react'
import React, { FC } from 'react'
import EmptyLayout from '../components/layouts/EmptyLayout'


const Home: FC = observer(() => {


  return (
    <EmptyLayout title={'Home'}>
      <Button>123</Button>
    </EmptyLayout>
  )
})

export default Home
