import React, {useState} from 'react';

interface ShowToolTipProp
{
  showToolTip: boolean;
}

function withToolTip<P extends object>(Component: React.ComponentType<P & ShowToolTipProp>)
{
  return function WrapperToolTip(props: any)
  {
    const [showToolTip, setShowToolTip] = useState(false);

    function mouseOver()
    {
      setShowToolTip(true);
    }

    function mouseOut()
    {
      setShowToolTip(false);
    }

    return (
      <div className="height-25 gold" onMouseOver={mouseOver} onMouseOut={mouseOut}>
        { /* this is fundamental to pass all props to my wrapped component */ }
        <Component {...props} showToolTip={showToolTip} />
      </div>
    );
  }
}

export default withToolTip;