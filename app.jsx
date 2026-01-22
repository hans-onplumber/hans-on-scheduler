import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PlumbingScheduler() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ customer: "", address: "", date: "", time: "", notes: "" });

  const addJob = () => {
    if (!form.customer || !form.date || !form.time) return;
    setJobs([...jobs, { ...form, status: "Scheduled" }]);
    setForm({ customer: "", address: "", date: "", time: "", notes: "" });
  };

  return (
    <div className="p-6 grid gap-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Hans-On Plumbing – Job Scheduler</h1>

      <Card>
        <CardContent className="grid gap-3 pt-6">
          <Input placeholder="Customer Name" value={form.customer} onChange={e => setForm({ ...form, customer: e.target.value })} />
          <Input placeholder="Job Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
          <div className="grid grid-cols-2 gap-2">
            <Input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            <Input type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
          </div>
          <Input placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
          <Button onClick={addJob}>Add Job</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {jobs.map((job, idx) => (
          <Card key={idx}>
            <CardContent className="pt-4">
              <div className="font-semibold">{job.customer}</div>
              <div className="text-sm">{job.address}</div>
              <div className="text-sm">{job.date} @ {job.time}</div>
              <div className="text-xs text-muted-foreground">{job.notes}</div>
              <div className="mt-2 text-xs font-bold">Status: {job.status}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
