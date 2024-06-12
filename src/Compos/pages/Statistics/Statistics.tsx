import { MailIcon } from "lucide-react";

import StatCard, { CardContent, PropsType } from "./StatCard";
import BarChar from "./BarChart";
import CustomPieChart from "./PieChart";
const cardData: PropsType[] = [
  {
    title: "Totale De Courier de depart",
    desc: "Totale de 50 couriers",
    Icon: MailIcon,
  },
  {
    title: "Totale De Courier d'arrive",
    desc: "Totale de 65 couriers",
    Icon: MailIcon,
  },
  {
    title: "Totale De Courier recu par wilaya",
    desc: "Totale de 14 couriers",
    Icon: MailIcon,
  },
  {
    title: "Totale De Courier envoye par Wilaya",
    desc: "Totale de 21 couriers",
    Icon: MailIcon,
  },
];
function Statistics() {
  return (
    <div className="flex flex-col gap-5 w-full container my-8">
      <h1 className="text-2xl font-bold">Statistics</h1>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data) => (
          <StatCard
            key={data.title}
            title={data.title}
            Icon={data.Icon}
            desc={data.desc}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Nombre de Couriers</p>
          <BarChar />
        </CardContent>
        <CardContent>
          <p className="p-4 font-semibold">
            Distribution de couriers par division
          </p>
          <CustomPieChart />
        </CardContent>
      </section>
    </div>
  );
}

export default Statistics;
