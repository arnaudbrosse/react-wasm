import { useState } from 'react';

import init, { compute_sum } from '../../wasm/pkg';

enum Method {
  JS,
  WASM
}

export function Count() {
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);

  const handleClick = async (method: Method) => {
    await init();
    const length = 100_000_000;
    const start = performance.now();

    switch (method) {
      case Method.WASM:
        compute_sum(length);
        break;

      default:
        const array = Array.from({ length }, (_, i) => i + 1);
        array.reduce((acc, current) => acc + current, 0);
    }

    const end = performance.now();
    setElapsedTime(end - start);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <button onClick={() => handleClick(Method.JS)}>
        Compute sum with js
      </button>
      <button onClick={() => handleClick(Method.WASM)}>
        Compute sum with wasm
      </button>
      {elapsedTime !== null && <div>Finished in {elapsedTime}ms</div>}
    </div>
  );
}
