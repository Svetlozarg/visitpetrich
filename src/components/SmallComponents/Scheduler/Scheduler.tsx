import { Scheduler as MUIScheduler } from "@aldabil/react-scheduler";
import { DAY, WEEK } from "./schedulerData";
import { SchedulerLocale } from "./SchedulerLocale";
import { bg } from "date-fns/locale";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { View } from "@aldabil/react-scheduler/components/nav/Navigation";
import SchedulerVewerTitle from "./SchedulerVewerTitle";

interface SchedulerProps {
  events?: ProcessedEvent[];
  loading?: boolean;
  view?: View;
}

const Scheduler: React.FC<SchedulerProps> = ({
  view = "month",
  events,
  loading,
}) => {
  return (
    <MUIScheduler
      view={view}
      events={events ? events : []}
      hourFormat="24"
      translations={SchedulerLocale}
      loading={loading}
      week={WEEK}
      day={DAY}
      locale={bg}
      editable={false}
      draggable={false}
      deletable={false}
      viewerTitleComponent={(event) => <SchedulerVewerTitle event={event} />}
    />
  );
};

export default Scheduler;
