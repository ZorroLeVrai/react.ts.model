import React from 'react';
import withToolTip from './withToolTip';

interface TypeProp
{
  showToolTip: boolean;
}

export function ComponentWithToolTip({showToolTip} : TypeProp)
{
  function getClassName()
  {
    return showToolTip ? "" : "visibility-hidden";

  }

  return (
    <div className="medium-border">
      <h1>Higher Component Order</h1>
      <div className={getClassName()}>Tooltip</div>
    </div>
  );
}


const WrappedComponentWithToolTip = withToolTip(ComponentWithToolTip);
export default WrappedComponentWithToolTip;