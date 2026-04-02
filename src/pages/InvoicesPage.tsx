import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices } from "@/data/mockData";
import { Plus, Download, Send } from "lucide-react";
import { useState } from "react";

export default function InvoicesPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? invoices : invoices.filter((i) => i.status === filter.toLowerCase());

  return (
    <>
      <DashboardHeader title="Invoices" subtitle="Billing and payment tracking" />
      <main className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div className="flex gap-2">
            {["All", "Paid", "Unpaid", "Overdue"].map((s) => (
              <Button key={s} variant={filter === s ? "default" : "outline"} size="sm" className="text-xs" onClick={() => setFilter(s)}>
                {s}
              </Button>
            ))}
          </div>
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" /> Create Invoice
          </Button>
        </div>

        <div className="glass-card rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((inv) => (
                <TableRow key={inv.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono text-xs">{inv.id}</TableCell>
                  <TableCell className="font-medium">{inv.customer}</TableCell>
                  <TableCell className="text-right font-medium">${inv.amount.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">{inv.dueDate}</TableCell>
                  <TableCell><StatusBadge status={inv.status} /></TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Download PDF">
                        <Download className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Send Email">
                        <Send className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
