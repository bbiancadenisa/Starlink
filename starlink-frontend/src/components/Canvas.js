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
      let width = window.innerWidth;
      let height = window.innerHeight - 50;
      context.fillStyle = "red";
      context.fillRect(width / 2, height / 2, 10, 10);
      context.fillRect(500, 500, 20, 20);
      latLng.map((coords) => {
        let x, y;
        let spikes = 5;
        let innerRadius = 1;
        let outerRadius = 5;
        if (coords.latitude < 0) {
          x = ((45 - Math.abs(coords.latitude)) * width) / 180;
        } else x = ((45 + coords.latitude) * width) / 180;

        if (coords.longitude < 0) {
          y = ((69 - Math.abs(coords.longitude)) * height) / 180;
        } else y = ((69 + coords.longitude) * height) / 180;
        var rot = (Math.PI / 2) * 3;
        var step = Math.PI / spikes;
        let cx = x;
        let cy = y;

        context.strokeSyle = "#000";
        context.beginPath();
        context.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          context.lineTo(x, y);
          rot += step;

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          context.lineTo(x, y);
          rot += step;
        }
        context.lineTo(cx, cy - outerRadius);
        context.closePath();
        context.lineWidth = 1;
        context.strokeStyle = "white";
        context.stroke();
        context.fillStyle = "#f7f8fa";
        context.fill();
        return 0;
      });
    }
  }, [context, latLng]);

  return (
    <div className="canvas">
      <canvas
        ref={canvasRef}
        width={window.innerWidth - 50}
        height={window.innerHeight - 50}
      />
    </div>
  );
}

export default Canvas;
