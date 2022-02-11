import React, { FC } from 'react'
import EmptyLayout from '../components/layouts/EmptyLayout'

const Error: FC = () => {
  return (
    <EmptyLayout title={'Error page'}>
      404 | error page
    </EmptyLayout>
  )
}

export default Error
