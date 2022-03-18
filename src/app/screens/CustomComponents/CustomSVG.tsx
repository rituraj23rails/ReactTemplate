import React from 'react'

const CustomSVG = (props: any) => {
    console.log('@@@ Props ===========', props);
    const SVG_COMP = props.component;
  return (
    <div>
        {props.component}
    </div>
  )
}

export default CustomSVG