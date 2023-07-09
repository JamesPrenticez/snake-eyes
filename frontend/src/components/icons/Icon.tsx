import React, { type ReactElement, type ComponentProps } from 'react'

interface ImgProps extends ComponentProps<"img"> {
  src: string;
}

export const Icon = ({width, src}: ImgProps): ReactElement => {
  return (
    <img src={src} width={width} alt="" />
  )
}