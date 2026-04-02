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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { leads } from "@/data/mockData";
import { Plus, Search, ArrowRightLeft, Pencil, Trash2, Facebook, Instagram, Globe } from "lucide-react";
import { useState } from "react";

const sourceIcons: Record<string, React.ReactNode> = {
  Facebook: <Facebook className="h-3.5 w-3.5 text-info" />,
  Instagram: <Instagram className="h-3.5 w-3.5 text-destructive" />,
  Website: <Globe className="h-3.5 w-3.5 text-primary" />,
};

export default function LeadsPage() {
  const [selectedLead, setSelectedLead] = useState<typeof leads[0] | null>(null);

  return (
    <>
      <DashboardHeader title="Leads" subtitle="Manage and convert your leads" />
      <main className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search leads..." className="pl-9 w-64 h-9 bg-muted/50 border-0" />
            </div>
            {["All", "New", "Contacted", "Converted", "Lost"].map((s) => (
              <Button key={s} variant={s === "All" ? "default" : "outline"} size="sm" className="text-xs hidden md:inline-flex">
                {s}
              </Button>
            ))}
          </div>
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" /> Add Lead
          </Button>
        </div>

        <div className="glass-card rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelectedLead(lead)}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell className="text-muted-foreground">{lead.contact}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1.5">
                      {sourceIcons[lead.source]}
                      <span className="text-sm">{lead.source}</span>
                    </span>
                  </TableCell>
                  <TableCell>{lead.package}</TableCell>
                  <TableCell><StatusBadge status={lead.status} /></TableCell>
                  <TableCell className="text-muted-foreground">{lead.agent}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end" onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Convert">
                        <ArrowRightLeft className="h-3.5 w-3.5 text-primary" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Edit">
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" title="Delete">
                        <Trash2 className="h-3.5 w-3.5 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <Sheet open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Lead Details</SheetTitle>
          </SheetHeader>
          {selectedLead && (
            <div className="mt-6 space-y-4">
              <div className="space-y-3">
                {[
                  ["Name", selectedLead.name],
                  ["Contact", selectedLead.contact],
                  ["Source", selectedLead.source],
                  ["Interest Package", selectedLead.package],
                  ["Assigned Agent", selectedLead.agent],
                  ["Date", selectedLead.date],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <StatusBadge status={selectedLead.status} className="mt-1" />
                </div>
              </div>
              <Button className="w-full gap-1.5 mt-4">
                <ArrowRightLeft className="h-4 w-4" /> Convert to Customer
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
