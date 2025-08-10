"use client";

import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Inject,
  Day,
  Week,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
import { appointmentData } from "./data";

// Register Syncfusion license
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1JEaF5cXmRCdkx3R3xbf1x1ZFRHalxXTnJeUj0eQnxTdEBjUX9bcndVQGRdUEx/XEleYw=="
);

// Define the event data type
interface EventTemplateProps {
  title: string;
  patient?: string;
  location?: string;
  [key: string]: unknown; // For any additional fields
}

// Custom tooltip template
const eventTemplate = (props: EventTemplateProps) => (
  <div className="p-1">
    <p className="font-semibold">{props.title}</p>
    <p className="text-xs">{props.patient}</p>
    <p className="text-xs italic">{props.location}</p>
  </div>
);

// Main component
export default function ScheduleView() {
  const today = new Date();

  // Color code events based on `type`
  const onEventRendered = (
    args: import("@syncfusion/ej2-react-schedule").EventRenderedArgs
  ) => {
    const type = args.data.type;

    let bgColor = "";

    if (type === "consultation") bgColor = "#4F46E5"; // Indigo
    else if (type === "checkup") bgColor = "#16A34A"; // Green
    else if (type === "surgery") bgColor = "#DC2626"; // Red
    else if (type === "evaluation") bgColor = "#EA580C"; // Orange
    else if (type === "break") bgColor = "#6B7280"; // Gray

    args.element.style.backgroundColor = bgColor;
    args.element.style.borderRadius = "8px";
    args.element.style.color = "#fff";
  };

  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Schedule View</h3>
      <ScheduleComponent
        width="100%"
        height="600px"
        selectedDate={today}
        eventRendered={onEventRendered}
        eventSettings={{
          dataSource: appointmentData,
          template: eventTemplate,
          fields: {
            subject: { name: "title" },
            startTime: { name: "StartTime" },
            endTime: { name: "EndTime" },
            location: { name: "location" },
            description: { name: "notes" },
            // recurrenceRule: { name: "RecurrenceRule" }, // Optional: supports recurring
          },
        }}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="Month" />
          <ViewDirective option="Agenda" />
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Agenda]} />
      </ScheduleComponent>
    </>
  );
}
