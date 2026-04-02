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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { proposals } from "@/data/mockData";
import { Plus, Eye, Pencil, Copy, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProposalsPage() {
  const [preview, setPreview] = useState<typeof proposals[0] | null>(null);

  return (
    <>
      <DashboardHeader title="Proposals" subtitle="Create and manage travel proposals" />
      <main className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex justify-end">
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" /> Create Proposal
          </Button>
        </div>

        <div className="glass-card rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Proposal ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {proposals.map((p) => (
                <TableRow key={p.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono text-xs">{p.id}</TableCell>
                  <TableCell className="font-medium">{p.customer}</TableCell>
                  <TableCell>{p.package}</TableCell>
                  <TableCell className="text-muted-foreground">{p.createdDate}</TableCell>
                  <TableCell><StatusBadge status={p.status} /></TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Preview" onClick={() => setPreview(p)}>
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Edit">
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Duplicate">
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Convert to Order">
                        <ShoppingCart className="h-3.5 w-3.5 text-primary" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <Dialog open={!!preview} onOpenChange={() => setPreview(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Proposal {preview?.id}</DialogTitle>
          </DialogHeader>
          {preview && (
            <div className="space-y-4 mt-2">
              {[
                ["Customer", preview.customer],
                ["Package", preview.package],
                ["Created", preview.createdDate],
              ].map(([l, v]) => (
                <div key={l}>
                  <p className="text-xs text-muted-foreground">{l}</p>
                  <p className="text-sm font-medium">{v}</p>
                </div>
              ))}
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <StatusBadge status={preview.status} className="mt-1" />
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Dear {preview.customer}, we're excited to present our {preview.package} travel package.
                  This curated experience includes luxury accommodations, guided tours, and exclusive local experiences.
                </p>
              </div>
              <Button className="w-full gap-1.5">
                <ShoppingCart className="h-4 w-4" /> Convert to Order
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
