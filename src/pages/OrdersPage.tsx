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
import { orders } from "@/data/mockData";
import { Plus, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function OrdersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? orders : orders.filter((o) => o.bookingStatus === filter.toLowerCase());

  return (
    <>
      <DashboardHeader title="Orders" subtitle="Track and manage bookings" />
      <main className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div className="flex gap-2">
            {["All", "Pending", "Confirmed", "Cancelled"].map((s) => (
              <Button key={s} variant={filter === s ? "default" : "outline"} size="sm" className="text-xs" onClick={() => setFilter(s)}>
                {s}
              </Button>
            ))}
          </div>
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" /> Create Order
          </Button>
        </div>

        <div className="glass-card rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Travel Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((o) => (
                <>
                  <TableRow key={o.id} className="hover:bg-muted/30 cursor-pointer" onClick={() => setExpandedId(expandedId === o.id ? null : o.id)}>
                    <TableCell>
                      {expandedId === o.id ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                    </TableCell>
                    <TableCell className="font-mono text-xs">{o.id}</TableCell>
                    <TableCell className="font-medium">{o.customer}</TableCell>
                    <TableCell>{o.package}</TableCell>
                    <TableCell className="text-muted-foreground">{o.travelDate}</TableCell>
                    <TableCell className="text-right font-medium">${o.amount.toLocaleString()}</TableCell>
                    <TableCell><StatusBadge status={o.paymentStatus} /></TableCell>
                    <TableCell><StatusBadge status={o.bookingStatus} /></TableCell>
                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Download Invoice">
                        <Download className="h-3.5 w-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  {expandedId === o.id && (
                    <TableRow key={`${o.id}-details`}>
                      <TableCell colSpan={9} className="bg-muted/20 p-4">
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div><span className="text-muted-foreground">Travelers:</span> 2 Adults</div>
                          <div><span className="text-muted-foreground">Room:</span> Deluxe Ocean View</div>
                          <div><span className="text-muted-foreground">Special Requests:</span> Airport pickup, vegetarian meals</div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
