// /components/PopulationChart.js

import React from "react";

const PopulationChart = ({ data }) => {
  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 50, left: 50 };

  const years = data.map((d) => Number(d.year));
  const values = data.map((d) => Number(d.value));

  const xMin = Math.min(...years);
  const xMax = Math.max(...years);
  const yMin = 0;
  const yMax = Math.max(...values);

  const xScale = (year) =>
    ((year - xMin) / (xMax - xMin)) * (width - margin.left - margin.right) +
    margin.left;
  const yScale = (value) =>
    height -
    margin.bottom -
    ((value - yMin) / (yMax - yMin)) * (height - margin.top - margin.bottom);

  const pathData = data
    .map((d, i) => {
      const x = xScale(Number(d.year));
      const y = yScale(Number(d.value));
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const totalYears = years.length;
  const maxLabels = 10;
  const labelInterval = Math.ceil(totalYears / maxLabels);

  const xAxisLabels = years.filter(
    (year, index) => index % labelInterval === 0
  );

  return (
    <svg width={width} height={height}>
      <line
        x1={margin.left}
        y1={height - margin.bottom}
        x2={width - margin.right}
        y2={height - margin.bottom}
        stroke="black"
      />
      <line
        x1={margin.left}
        y1={margin.top}
        x2={margin.left}
        y2={height - margin.bottom}
        stroke="black"
      />
      <path d={pathData} stroke="blue" fill="none" strokeWidth={2} />

      {xAxisLabels.map((year, index) => {
        const x = xScale(year);
        return (
          <g key={index}>
            <line
              x1={x}
              y1={height - margin.bottom}
              x2={x}
              y2={height - margin.bottom + 5}
              stroke="black"
            />
            <text
              x={x}
              y={height - margin.bottom + 15}
              textAnchor="middle"
              fontSize="10"
            >
              {year}
            </text>
          </g>
        );
      })}

      {[yMin, yMax].map((value, index) => {
        const y = yScale(value);
        return (
          <g key={index}>
            <line
              x1={margin.left - 5}
              y1={y}
              x2={margin.left}
              y2={y}
              stroke="black"
            />
            <text x={margin.left - 10} y={y + 3} textAnchor="end" fontSize="10">
              {value.toLocaleString()}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default PopulationChart;
