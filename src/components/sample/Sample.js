import React from 'react'
import { ContextUseContextProvider } from '../../contextapi/Contextapi'

function Sample() {

  const thala = ContextUseContextProvider();

  console.log(thala, "thala");
  return (
    <div>Sample </div>
  )
}

export default Sample