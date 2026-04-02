import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { customers } from "@/data/mockData";
import { Search, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function CustomersPage() {
  const [selected, setSelected] = useState<typeof customers[0] | null>(null);

  return (
    <>
      <DashboardHeader title="Customers" subtitle="Your customer database" />
      <main className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search customers..." className="pl-9 h-9 bg-muted/50 border-0" />
          </div>
          {["All", "Active", "Inactive"].map((s) => (
            <Button key={s} variant={s === "All" ? "default" : "outline"} size="sm" className="text-xs">
              {s}
            </Button>
          ))}
        </div>

        <div className="glass-card rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Name</TableHead>
                <TableHead>Phone / Email</TableHead>
                <TableHead className="text-center">Bookings</TableHead>
                <TableHead className="text-right">Total Spend</TableHead>
                <TableHead>Last Booking</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.id} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(c)}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col text-xs text-muted-foreground gap-0.5">
                      <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{c.phone}</span>
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{c.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{c.bookings}</TableCell>
                  <TableCell className="text-right font-medium">${c.spend.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">{c.lastBooking}</TableCell>
                  <TableCell><StatusBadge status={c.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-5 mt-2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Email", selected.email],
                  ["Phone", selected.phone],
                  ["Total Bookings", String(selected.bookings)],
                  ["Total Spend", `$${selected.spend.toLocaleString()}`],
                  ["Last Booking", selected.lastBooking],
                ].map(([l, v]) => (
                  <div key={l}>
                    <p className="text-xs text-muted-foreground">{l}</p>
                    <p className="text-sm font-medium">{v}</p>
                  </div>
                ))}
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <StatusBadge status={selected.status} className="mt-1" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Booking History</h4>
                <div className="border-l-2 border-primary/30 pl-4 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{selected.lastBooking}</p>
                    <p className="text-sm">Maldives Escape — $3,200</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">2025-11-20</p>
                    <p className="text-sm">Bali Paradise — $2,800</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Notes</h4>
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                  Prefers luxury packages. Interested in European tours for summer 2026.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
