// import React, { useState, useEffect, useRef } from 'react'
// import BIRDS from 'vanta/dist/vanta.birds.min'
// // Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

// const Back = (props) => {
//   const [vantaEffect, setVantaEffect] = useState(0)
//   const myRef = useRef(null)
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(BIRDS({
//         el: myRef.current
//       }))
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect])
//   return <div ref={myRef}>
//     Foreground content goes here
//   </div>
// }

// export default Back;