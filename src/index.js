/**
 * @name ImageFlow
 * @description 图片特效组件
 */
import React from 'react';
import { Shaders, Node } from 'gl-react';
import { Surface } from 'gl-react-dom';
import shaderConfigs from './transtions';
import uniformsConfigs from './uniforms';
import timeLoop from "./timeLoop";

const shaders = Shaders.create(shaderConfigs);

export const Saturate = timeLoop(({
  time,
  children,
  type = 'Soul'
}) => {
  const _shader = shaders[type];
  const _uniforms = uniformsConfigs[type](time, children);

  return (
    <Node
      shader={_shader}
      uniforms={_uniforms}
    />
  )
});

function ImageFlow(props) {
  const {
    width = 450,
    height = 720,
    url = ""
  } = props;
  return (
    <Surface width={width} height={height}>
      <Saturate {...props}>
        {url}
      </Saturate>
    </Surface>
  )
}
export default ImageFlow
