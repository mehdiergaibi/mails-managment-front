import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";

const data = [
  {
    status: "Couriers de depart",
    nbr: 60,
  },
  {
    status: "Couriers d'arrive",
    nbr: 25,
  },
];
function BarChar() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey={"status"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <Bar dataKey={"nbr"} radius={[4, 4, 0, 0]} fill="green" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChar;
