import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { name: "Support Technique", value: 400 },
  { name: "Comptabilité", value: 200 },
  { name: "Légal", value: 300 },
  { name: "Direction", value: 130 },
  { name: "R&D	", value: 540 },
  { name: "Ressources Humaines	", value: 50 },
  { name: "IT", value: 140 },
];

function CustomPieChart() {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="green"
          stroke="#888888"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CustomPieChart;
