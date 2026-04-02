import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { packages } from "@/data/mockData";
import { Plus, LayoutGrid, List, MapPin, Clock, Star, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ServicesPage() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [category, setCategory] = useState("All");

  const filtered = category === "All" ? packages : packages.filter((p) => p.category === category.toLowerCase());

  return (
    <>
      <DashboardHeader title="Services & Packages" subtitle="Manage your travel packages" />
      <main className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div className="flex gap-2">
            {["All", "Domestic", "International"].map((c) => (
              <Button key={c} variant={category === c ? "default" : "outline"} size="sm" className="text-xs" onClick={() => setCategory(c)}>
                {c}
              </Button>
            ))}
            <div className="border-l ml-1 pl-2 flex gap-1">
              <Button variant={view === "grid" ? "secondary" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setView("grid")}>
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button variant={view === "table" ? "secondary" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setView("table")}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" /> Add Package
          </Button>
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((pkg) => (
              <div key={pkg.id} className="glass-card rounded-xl overflow-hidden group transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="relative h-44 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  {pkg.popular && (
                    <Badge className="absolute top-3 left-3 gap-1 bg-secondary text-secondary-foreground">
                      <Star className="h-3 w-3" /> Popular
                    </Badge>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-foreground">{pkg.title}</h3>
                    <span className="text-lg font-bold text-primary">${pkg.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{pkg.destination}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{pkg.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{pkg.description}</p>
                  <div className="flex gap-1 pt-2">
                    <Button variant="ghost" size="sm" className="text-xs h-7">
                      <Pencil className="h-3 w-3 mr-1" /> Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs h-7 text-destructive hover:text-destructive">
                      <Trash2 className="h-3 w-3 mr-1" /> Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Package</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((pkg) => (
                  <TableRow key={pkg.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {pkg.title}
                        {pkg.popular && <Star className="h-3.5 w-3.5 text-secondary fill-secondary" />}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{pkg.destination}</TableCell>
                    <TableCell className="text-muted-foreground">{pkg.duration}</TableCell>
                    <TableCell className="text-right font-medium">${pkg.price.toLocaleString()}</TableCell>
                    <TableCell className="capitalize">{pkg.category}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-1 justify-end">
                        <Button variant="ghost" size="icon" className="h-7 w-7"><Pencil className="h-3.5 w-3.5" /></Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7"><Trash2 className="h-3.5 w-3.5 text-destructive" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </>
  );
}
