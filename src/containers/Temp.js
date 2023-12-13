import React from 'react'
import Typed from 'react-typed'
const Temp = () => {
  return (
    <div>
      <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
    </div>
  )
}

export default Temp
