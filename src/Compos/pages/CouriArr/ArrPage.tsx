import { getMailArr } from "@/services/api";
import { useEffect, useState } from "react";
import CouriDep from "./CourtiArr";
import { CouriDepColumns } from "./Columns";
import { format } from "date-fns";
import { CourierArr } from "@/Types/CourierArr";

// transform dates from iso to yyyy/mm/dd
const formatDate = (isoDate: Date | string) => {
  const date = new Date(isoDate);
  return format(date, "yyyy/MM/dd");
};

function ArrPage() {
  const [couriDep, setCourieDep] = useState<CourierArr[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // get mails arrive
  useEffect(() => {
    const getArr = async () => {
      try {
        const getAllMailsDep: CourierArr[] = await getMailArr();
        const dateStr = getAllMailsDep.map((mail: CourierArr) => {
          return { ...mail, dateArr: formatDate(mail.dateArr) };
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
    getArr();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="px-1 md:container md:py-10 mx-auto">
      <CouriDep columns={CouriDepColumns} data={couriDep} />
    </div>
  );
}

export default ArrPage;
