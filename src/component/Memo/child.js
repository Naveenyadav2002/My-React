

import React from 'react'

function ChildMemo() {
    console.log("child re-render")
  return (
    <div></div>
  )
}

export default React.memo(ChildMemo)