import React from 'react'
import './Vcontrol.css'

function Vcontrol() {
  return (
    <main style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh' }}>
      <section style={{ width: '1000px', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flex: 1, backgroundColor: 'lightblue' }}>
          상단 섹션
        </div>
        <div style={{ flex: 1, backgroundColor: 'lightcoral' }}>
          중간 섹션
        </div>
        <div style={{ flex: 1, backgroundColor: 'lightgreen' }}>
          하단 섹션
        </div>
      </section>
      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flex: 1, backgroundColor: 'lightblue' }}>
          상단 섹션
        </div>
        <div style={{ flex: 1, backgroundColor: 'lightcoral' }}>
          하단 섹션
        </div>
      </section>
    </main>
  )
}

export default Vcontrol