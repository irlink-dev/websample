'use client'

const OcxPage = () => {
  function handleClick() {
    console.log('clicked')
  }

  return (
    <main
      style={{
        height: '100vh',
      }}
    >
      {/* <iframe
        src="/ocx/sample.html"
        width="100%"
        height="700px"
        style={{
          border: 'none',
        }}
      ></iframe> */}
      <object
        id="IRUSB"
        name="IRUSB"
        width="20"
        height="20"
        classid="CLSID:2C7789BE-2160-41F0-B350-9595620DD0D8"
        codebase="./cab/IRUSBControl.cab#version=1,0,0,27"
      ></object>

      <button onClick={handleClick}>CreateDevice</button>
    </main>
  )
}

export default OcxPage
