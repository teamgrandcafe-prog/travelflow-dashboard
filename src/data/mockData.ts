export const leads = [
  { id: 1, name: "Sarah Johnson", contact: "+1 555-0101", source: "Facebook", package: "Bali Paradise", status: "new" as const, agent: "Mike Chen", date: "2026-03-28" },
  { id: 2, name: "David Park", contact: "+1 555-0102", source: "Instagram", package: "Swiss Alps Tour", status: "contacted" as const, agent: "Lisa Wong", date: "2026-03-27" },
  { id: 3, name: "Emma Wilson", contact: "+1 555-0103", source: "Website", package: "Maldives Escape", status: "converted" as const, agent: "Mike Chen", date: "2026-03-25" },
  { id: 4, name: "James Lee", contact: "+1 555-0104", source: "Facebook", package: "Japan Explorer", status: "lost" as const, agent: "Sarah Ali", date: "2026-03-22" },
  { id: 5, name: "Maria Garcia", contact: "+1 555-0105", source: "Instagram", package: "Thailand Adventure", status: "new" as const, agent: "Lisa Wong", date: "2026-03-30" },
  { id: 6, name: "Robert Kim", contact: "+1 555-0106", source: "Website", package: "Greece Getaway", status: "contacted" as const, agent: "Mike Chen", date: "2026-03-29" },
];

export const customers = [
  { id: 1, name: "Emma Wilson", email: "emma@email.com", phone: "+1 555-0103", bookings: 4, spend: 12500, lastBooking: "2026-03-15", status: "active" as const },
  { id: 2, name: "John Smith", email: "john@email.com", phone: "+1 555-0201", bookings: 2, spend: 5800, lastBooking: "2026-02-20", status: "active" as const },
  { id: 3, name: "Olivia Brown", email: "olivia@email.com", phone: "+1 555-0202", bookings: 1, spend: 3200, lastBooking: "2025-12-10", status: "inactive" as const },
  { id: 4, name: "Liam Davis", email: "liam@email.com", phone: "+1 555-0203", bookings: 6, spend: 18900, lastBooking: "2026-03-28", status: "active" as const },
  { id: 5, name: "Sophia Martinez", email: "sophia@email.com", phone: "+1 555-0204", bookings: 3, spend: 8700, lastBooking: "2026-01-05", status: "active" as const },
];

export const orders = [
  { id: "ORD-001", customer: "Liam Davis", package: "Bali Paradise", travelDate: "2026-04-15", amount: 3200, paymentStatus: "paid" as const, bookingStatus: "confirmed" as const },
  { id: "ORD-002", customer: "Emma Wilson", package: "Maldives Escape", travelDate: "2026-05-01", amount: 4500, paymentStatus: "pending" as const, bookingStatus: "pending" as const },
  { id: "ORD-003", customer: "John Smith", package: "Swiss Alps Tour", travelDate: "2026-04-20", amount: 2800, paymentStatus: "paid" as const, bookingStatus: "confirmed" as const },
  { id: "ORD-004", customer: "Sophia Martinez", package: "Japan Explorer", travelDate: "2026-06-10", amount: 3900, paymentStatus: "unpaid" as const, bookingStatus: "pending" as const },
  { id: "ORD-005", customer: "Olivia Brown", package: "Thailand Adventure", travelDate: "2026-03-01", amount: 2100, paymentStatus: "paid" as const, bookingStatus: "cancelled" as const },
];

export const invoices = [
  { id: "INV-001", customer: "Liam Davis", amount: 3200, dueDate: "2026-04-01", status: "paid" as const },
  { id: "INV-002", customer: "Emma Wilson", amount: 4500, dueDate: "2026-04-10", status: "unpaid" as const },
  { id: "INV-003", customer: "John Smith", amount: 2800, dueDate: "2026-03-25", status: "paid" as const },
  { id: "INV-004", customer: "Sophia Martinez", amount: 3900, dueDate: "2026-03-20", status: "overdue" as const },
  { id: "INV-005", customer: "Olivia Brown", amount: 2100, dueDate: "2026-04-15", status: "unpaid" as const },
];

export const proposals = [
  { id: "PRO-001", customer: "Sarah Johnson", package: "Bali Paradise", createdDate: "2026-03-28", status: "sent" as const },
  { id: "PRO-002", customer: "David Park", package: "Swiss Alps Tour", createdDate: "2026-03-27", status: "draft" as const },
  { id: "PRO-003", customer: "Maria Garcia", package: "Thailand Adventure", createdDate: "2026-03-25", status: "approved" as const },
  { id: "PRO-004", customer: "Robert Kim", package: "Greece Getaway", createdDate: "2026-03-22", status: "rejected" as const },
  { id: "PRO-005", customer: "James Lee", package: "Japan Explorer", createdDate: "2026-03-30", status: "sent" as const },
];

export const packages = [
  { id: 1, title: "Bali Paradise", destination: "Bali, Indonesia", price: 3200, duration: "7 Days / 6 Nights", description: "Experience the tropical beauty of Bali with luxury resorts, temple visits, and beach activities.", category: "international" as const, popular: true, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop" },
  { id: 2, title: "Swiss Alps Tour", destination: "Switzerland", price: 4800, duration: "10 Days / 9 Nights", description: "Discover the majestic Swiss Alps with guided hiking, scenic train rides, and cozy mountain lodges.", category: "international" as const, popular: true, image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=250&fit=crop" },
  { id: 3, title: "Maldives Escape", destination: "Maldives", price: 5500, duration: "5 Days / 4 Nights", description: "Luxury overwater villas, crystal clear waters, and world-class diving in the Maldives.", category: "international" as const, popular: true, image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=250&fit=crop" },
  { id: 4, title: "Japan Explorer", destination: "Tokyo & Kyoto, Japan", price: 3900, duration: "8 Days / 7 Nights", description: "From ancient temples to modern Tokyo, experience the best of Japanese culture and cuisine.", category: "international" as const, popular: false, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop" },
  { id: 5, title: "Thailand Adventure", destination: "Bangkok & Phuket", price: 2100, duration: "6 Days / 5 Nights", description: "Vibrant street food, stunning beaches, and rich cultural heritage await in Thailand.", category: "international" as const, popular: false, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=250&fit=crop" },
  { id: 6, title: "Greece Getaway", destination: "Santorini & Athens", price: 4200, duration: "9 Days / 8 Nights", description: "Whitewashed villages, ancient ruins, and Mediterranean sunsets in beautiful Greece.", category: "international" as const, popular: false, image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=250&fit=crop" },
];

export const orderTrendData = [
  { month: "Jan", orders: 45 },
  { month: "Feb", orders: 52 },
  { month: "Mar", orders: 61 },
  { month: "Apr", orders: 48 },
  { month: "May", orders: 72 },
  { month: "Jun", orders: 68 },
];

export const leadConversionData = [
  { name: "Converted", value: 35, fill: "hsl(153, 75%, 30%)" },
  { name: "Contacted", value: 25, fill: "hsl(168, 47%, 54%)" },
  { name: "New", value: 28, fill: "hsl(200, 60%, 50%)" },
  { name: "Lost", value: 12, fill: "hsl(0, 72%, 51%)" },
];
