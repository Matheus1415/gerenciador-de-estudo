import React, { useEffect, useState } from 'react';

export function ErroUser({ texto, visivel }: { texto: string | undefined, visivel: boolean }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (visivel) {
      setOpacity(1);
      setTimeout(() => {
        setOpacity(0);
      }, 5000);
    }
  }, [visivel]);

  const style: React.CSSProperties = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'opacity 0.3s ease-in-out',
    opacity: opacity,
    pointerEvents: visivel ? 'auto' : 'none',
  };

  return (
    <div style={style}>
      {texto}
    </div>
  );
}

export default ErroUser;
