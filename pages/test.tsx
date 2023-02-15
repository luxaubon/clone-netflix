import { useRecoilState } from 'recoil';
import { countState } from '@/atoms/modalAtom'


function TestPages() {
  const [count, setCount] = useRecoilState(countState);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export  default  TestPages;