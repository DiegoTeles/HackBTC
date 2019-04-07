import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'SEMANA 1', SETOR: 4000, CAIS: 2400, GATE: 2400,
  },
  {
    name: 'SEMANA 2', SETOR: 3000, CAIS: 1398, GATE: 2210,
  },
  {
    name: 'SEMANA 3', SETOR: 2000, CAIS: 9800, GATE: 2290,
  },
  {
    name: 'SEMANA 4', SETOR: 2780, CAIS: 3908, GATE: 2000,
  },
  {
    name: 'SEMANA 5', SETOR: 1890, CAIS: 4800, GATE: 2181,
  },
];

export default class SimpleLineChart extends PureComponent {
  

  render() {
    return (
      <AreaChart
        width={1250}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="SETOR" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="CAIS" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="GATE" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    );
  }
}

