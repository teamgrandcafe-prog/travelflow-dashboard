import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import {
  ShoppingCart,
  Clock,
  XCircle,
  UserCheck,
  Users,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { orders, orderTrendData, leadConversionData } from "@/data/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function OverviewPage() {
  return (
    <>
      <DashboardHeader title="Dashboard Overview" subtitle="Welcome back! Here's what's happening today." />
      <main className="flex-1 overflow-auto p-6 space-y-6">
        {/* Filters */}
        <div className="flex gap-2">
          {["Day", "Week", "Month"].map((f) => (
            <Button
              key={f}
              variant={f === "Month" ? "default" : "outline"}
              size="sm"
              className="text-xs"
            >
              {f}
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard title="Total Orders" value="248" change="+12% from last month" changeType="positive" icon={ShoppingCart} />
          <StatsCard title="Pending Orders" value="18" change="5 new today" changeType="neutral" icon={Clock} iconColor="bg-warning/10 text-warning" />
          <StatsCard title="Cancelled Orders" value="7" change="-3% from last month" changeType="positive" icon={XCircle} iconColor="bg-destructive/10 text-destructive" />
          <StatsCard title="Total Customers" value="1,024" change="+8% from last month" changeType="positive" icon={UserCheck} />
          <StatsCard title="Leads" value="156" change="+22 this week" changeType="positive" icon={Users} iconColor="bg-info/10 text-info" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Orders Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={orderTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 15%, 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(210, 10%, 50%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(210, 10%, 50%)" />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(210, 15%, 90%)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="hsl(153, 75%, 30%)"
                  strokeWidth={2.5}
                  dot={{ fill: "hsl(153, 75%, 30%)", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Lead Conversion</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={leadConversionData}
                  cx="50%"
                  cy="45%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {leadConversionData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "11px" }} />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="glass-card rounded-xl">
          <div className="p-5 border-b">
            <h3 className="text-sm font-semibold text-foreground">Recent Orders</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.slice(0, 5).map((o) => (
                <TableRow key={o.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{o.customer}</TableCell>
                  <TableCell>{o.package}</TableCell>
                  <TableCell><StatusBadge status={o.bookingStatus} /></TableCell>
                  <TableCell className="text-muted-foreground">{o.travelDate}</TableCell>
                  <TableCell className="text-right font-medium">${o.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
