import Counter from "./Counter";
import Wrapper from "./Wrapper";

function RenderProps()
{
  return (
    <div>
      <Wrapper render={(count: number, incCount: () => void) => {
          return <Counter count={count} incCount={incCount} />
        }}
      />
    </div>
  );
}

export default RenderProps;