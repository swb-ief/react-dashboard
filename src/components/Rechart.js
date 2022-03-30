import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

function Rechart({title, data}) {
  // console.log(title);
  // console.log(data);
  // Sample chart data
  const pdata = [
    {
      name: 'MongoDb',
      student: 11,
      fees: 120,
    },
    {
      name: 'Javascript',
      student: 15,
      fees: 12,
    },
    {
      name: 'PHP',
      student: 5,
      fees: 10,
    },
    {
      name: 'Java',
      student: 10,
      fees: 1000,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
    {
      name: 'C#',
      student: 9,
      fees: 4,
    },
    {
      name: 'C++',
      student: 10,
      fees: 8,
    },
  ];
  return (
    <>
      {pdata && title && data && (
        <div>
          <h3 className="text-heading">{title}</h3>
          <ResponsiveContainer width="100%" aspect={1}>
            <LineChart data={data}>
              {/* <CartesianGrid /> */}
              <XAxis dataKey="date" interval={'preserveStartEnd'} />
              <YAxis orientation="right"></YAxis>
              <Legend />
              <Tooltip />
              {/* <Line dataKey="student" stroke="black" activeDot={{r: 8}} /> */}
              <Line
                dataKey="cases"
                stroke="#ff073a"
                activeDot={{r: 8}}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
export default Rechart;
