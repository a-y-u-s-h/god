import React from "react"
import Rive from "rive-react"

/*
  ======================================
    This component requires path to
    a .riv file (reference: rive.app).
    A motion designer would create their
    rive animation file and export it as
    with `.riv` extension which can be placed
    inside `public` directory to be used in
    places.
  ======================================
*/

export const Animation = ({ src, ...props }) => {
  const styles = {
    container: {
      className: `
        w-full h-full overflow-hidden
        grid items-center grainy
      `
    },
    animation: {
      src: src,
      autoPlay: true,
      ...props
    }
  }
  return (
    <div {...styles?.container}>
      <Rive {...styles?.animation} />
    </div>
  )
}

export default Animation
