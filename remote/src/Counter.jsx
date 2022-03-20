import { createSignal } from 'solid-js';

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        Count = {count()}
      </div>
      <button class='bg-blue-500 hover:bg-blue-700 text-white px-4 rounded'
              onClick={() => setCount(count() + 1)}>
        Plus
      </button>
    </>
  );
}