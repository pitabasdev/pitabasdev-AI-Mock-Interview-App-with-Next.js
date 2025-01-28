import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const scheduleItems = [
  { time: "9:00 AM - 9:30 AM", activity: "Registration and Welcome" },
  { time: "9:30 AM - 11:00 AM", activity: "Introduction to Data Science and AI" },
  { time: "11:00 AM - 11:15 AM", activity: "Break" },
  { time: "11:15 AM - 12:45 PM", activity: "Deep Learning Fundamentals" },
  { time: "12:45 PM - 1:45 PM", activity: "Lunch Break" },
  { time: "1:45 PM - 3:15 PM", activity: "Generative AI Techniques" },
  { time: "3:15 PM - 3:30 PM", activity: "Break" },
  { time: "3:30 PM - 5:00 PM", activity: "Hands-on Project and Ethical AI Discussion" },
  { time: "5:00 PM - 5:30 PM", activity: "Closing Remarks and Networking" },
]

export default function Schedule() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Workshop Schedule</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Time</TableHead>
            <TableHead>Activity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.time}</TableCell>
              <TableCell>{item.activity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

