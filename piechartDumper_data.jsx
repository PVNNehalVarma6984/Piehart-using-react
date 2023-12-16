import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const rawData = [{ dumperNumber: 'DMPR-237', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-521', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-579', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-456', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-468', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-807', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-246', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-789', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-234', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-679', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-824', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-135', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-123', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-648', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-392', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-973', loadStatus: 1, dates: '19-12-2023' }
  // ... (your data as specified in the previous conversation)
];

const processData = (data) => {
  const counts = { '0': 0, '1': 0, '2': 0 };
  data.forEach(({ loadStatus }) => {
    counts[loadStatus]++;
  });
  return Object.entries(counts).map(([status, count]) => ({ name: status, value: count }));
};

export default class Example extends PureComponent {
  render() {
    const processedData = processData(rawData);
    const COLORS = ['#ff0000', '#00ff00', '#0000ff'];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={processedData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            stroke="none"
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend
            align="center"
            verticalAlign="middle"
            layout="vertical"
            formatter={(value) => {
              if (value === '0') return 'Empty';
              if (value === '1') return 'Partial';
              if (value === '2') return 'Full';
              return value;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
