import * as React from "react";

function Gato(props) {
  return (
    <svg id="prefix__gato" viewBox="0 0 1920 2500">
      <defs>
        <style>{".prefix__cls-3{fill:#3b3b4c}"}</style>
      </defs>
      <path
        d="M1795.75 1688.71c0 13.44-137.81 29.05-296.6 29.05s-287.51-10.9-287.51-24.34 128.72-24.34 287.51-24.34 296.6 6.19 296.6 19.63z"
        fill="#32323f"
        opacity={0.09}
      />
      <path
        d="M1393.8 1631.86c-3.93-19.86-25.74-7.94-56.08-56.9s-7.52-132.09 14.92-132.2c8.12-.04 6.5 31.16 22.48 37.59 15.98 6.44 24.91-21.67 40.06-17.78 15.15 3.89-11.57 36.44 25.64 63.79s86.79-35.92 177.49-11.88 88.69 159.43 94.2 198.87c5.51 39.44 48.28 59.57 28.05 61.35-20.23 1.77-63.63-53.44-83.68-82.28-12.52-18.01-15.58-31.62-196.64-18.17-38.51 2.86-54.1 27.59-85.88 18.86-30.54-8.39-54.05-10.64-65.79.53-11.74 11.17-47.12-13.44-7.93-27.45 21.24-7.59 29.23-11.81 51.85-8.71 34.05 4.67 46.37-.06 41.31-25.63z"
        fill="#fff"
      />
      <path
        className="prefix__cls-3"
        d="M1323.89 1531.87c14.88-8.17 35.34-31.86 47.6-53.6-12.15-9.31-11.41-35.55-18.86-35.5-16.59.08-33.42 45.6-28.75 89.11zM1389.95 1477.22c6.39 12.82 14.82 19.79 31.81 24.11-5.91-19.23 4.03-36.03-6.58-38.75-9.82-2.52-17.03 8.41-25.24 14.65zM1628.45 1517.78c-5.94 34.36-5.92 70.65 67.11 84.2-11-36.25-30.6-70.06-67.11-84.2z"
      />
      <path
        d="M1656.87 1692.42c7.25 34.37 63.46 84.05 83.69 82.28 19.03-1.67-17.7-19.59-26.71-54.55-27.13-19.12-40.31-23.61-56.97-27.73z"
        fill="#1f1f39"
      />
    </svg>
  );
}

const MemoGato = React.memo(Gato);
export default MemoGato;
