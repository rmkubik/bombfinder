import React from "react";

const Stats = ({ stats }) => {
  return (
    <>
      <h2>Stats</h2>
      <ul>
        {Object.values(stats).map((stat) => (
          <li key={stat.name}>
            {stat.name} - {`${stat.value}${stat.max ? `/${stat.max}` : ""}`}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Stats;
