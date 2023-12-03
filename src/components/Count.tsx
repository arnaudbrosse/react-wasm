import { ChangeEvent, useState } from 'react';

import init, { compute_sum } from '../../wasm/pkg';

export function Count() {
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);
  const [length, setLength] = useState(100000000);

  const computeWithJs = async () => {
    const start = performance.now();

    const array = Array.from({ length }, (_, i) => i + 1);
    const result = array.reduce((acc, current) => acc + current, 0);

    const end = performance.now();
    setElapsedTime(end - start);
    console.log(result);
  };

  const computeWithWasm = async () => {
    await init();
    const start = performance.now();

    const result = compute_sum(BigInt(length));

    const end = performance.now();
    setElapsedTime(end - start);
    console.log(result);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLength(Number(event.target.value));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <input onChange={handleChange} value={length} />
      <button onClick={computeWithJs}>Compute sum with js</button>
      <button onClick={computeWithWasm}>Compute sum with wasm</button>
      {elapsedTime !== null && <div>Finished in {elapsedTime}ms</div>}
    </div>
  );
}
