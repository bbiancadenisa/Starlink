import React, { useRef, useEffect, useState } from "react";

function Canvas({ latLng }) {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");

      if (renderCtx) {
        setContext(renderCtx);
      }
    }
    if (context !== null) {
      latLng.map((coords) => {
        let x, y;
        if (coords.latitude < 0) {
          x = ((45 - Math.abs(coords.latitude)) * 1200) / 180;
        } else x = ((45 + coords.latitude) * 1200) / 180;

        if (coords.longitude < 0) {
          y = ((69 - Math.abs(coords.longitude)) * 600) / 180;
        } else y = ((69 + coords.longitude) * 600) / 180;

        context.fillRect(x, y, 1, 1);
        return 0;
      });
    }
  }, [context, latLng]);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={1204} height={604} />
    </div>
  );
}

export default Canvas;
