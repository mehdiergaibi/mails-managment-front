import { getMailDep } from "@/services/api";
import { CourierDep } from "@/Types/CourierDep";
import { useEffect, useState } from "react";
import CouriDep from "./CouriDep";
import { CouriDepColumns } from "./Columns";
import { format } from "date-fns";

// transform dates from iso to yyyy/mm/dd
const formatDate = (isoDate: Date | string) => {
  const date = new Date(isoDate);
  return format(date, "yyyy/MM/dd");
};

function DepaPage() {
  const [couriDep, setCourieDep] = useState<CourierDep[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // get mails depart
  useEffect(() => {
    const getDep = async () => {
      try {
        const getAllMailsDep: CourierDep[] = await getMailDep();
        const dateStr = getAllMailsDep.map((mail: CourierDep) => {
          return { ...mail, dateDepp: formatDate(mail.dateDepp) };
        });
        setCourieDep(dateStr);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error");
        }
      } finally {
        setLoading(false);
      }
    };
    getDep();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="px-1 md:container md:py-10 mx-auto">
      <CouriDep columns={CouriDepColumns} data={couriDep} />
    </div>
  );
}

export default DepaPage;
