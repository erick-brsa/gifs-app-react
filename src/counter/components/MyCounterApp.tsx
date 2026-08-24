import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {

  const { counter, handleAdd, handleSubtract, handleReset } = useCounter(10);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <h2>Counter: {counter}</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <button onClick={handleSubtract}>
            -1
          </button>
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
