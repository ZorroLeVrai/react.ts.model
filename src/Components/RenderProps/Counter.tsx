type PropType = {
  count: number,
  incCount: () => void
}

function Counter({count, incCount} : PropType)
{
  return (
    <button onClick={incCount}>{count}</button>
  );
}

export default Counter;