import React, { Component } from 'react'

interface SvgComponentTypes {
   renderComponent:any
   className?:string
}
class SvgComponent extends Component  <SvgComponentTypes>{
   render() {
      const {
         renderComponent: RenderComponent,
         className,
         ...other
      } = this.props
      return (
         <span className={className}>
            <RenderComponent {...other} />
         </span>
      )
   }
}

export default SvgComponent
