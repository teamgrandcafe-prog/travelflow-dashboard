

# Travel Agency Business Solution Manager Dashboard

## Design System
- **Primary:** #138754 (deep green), **Secondary:** #4bc7af (teal accent)
- Premium SaaS style with soft shadows, rounded corners, subtle gradients
- Lucide icons throughout, clean typography

## Layout
- **Fixed left sidebar** with collapsible navigation (Overview, Leads, Customers, Orders, Invoices, Proposal, Services & Package). Active item highlighted with #4bc7af
- **Top header** with page title, search bar, notifications bell, and profile dropdown avatar
- **Right content area** that changes based on selected route

## Pages

### 1. Overview (Dashboard)
- Day/Week/Month/Custom date picker filters
- Stats cards with icons: Total Orders, Pending Orders, Cancelled Orders, Total Customers, Leads
- Line chart (orders trend) and bar/pie chart (leads conversion) using Recharts
- Recent Orders/Leads table

### 2. Leads
- "Add Lead" button, status/source/date filters, search
- Table: Name, Contact, Source (with platform icons), Interest Package, Status badges (New/Contacted/Converted/Lost), Assigned Agent, Actions
- Quick convert-to-customer button, slide-over panel for lead details

### 3. Customers
- Search + filters (location, package, last booking)
- Table: Name, Phone/Email, Total Bookings, Total Spend, Last Booking Date, Active/Inactive status
- Customer profile modal with booking history timeline and notes

### 4. Orders
- Filters (status, date range), "Create Order" button
- Table: Order ID, Customer, Package, Travel Date, Amount, Payment Status, Booking Status
- Expandable rows for details, download invoice button

### 5. Invoices
- "Create Invoice" button, Paid/Unpaid/Overdue filters
- Table: Invoice ID, Customer, Amount, Due Date, Status with color coding
- PDF download and send-via-email buttons

### 6. Proposals
- "Create Proposal" button
- Table: Proposal ID, Customer, Package, Created Date, Status (Draft/Sent/Approved/Rejected)
- Preview modal, edit/duplicate, convert-to-order button

### 7. Services & Packages
- Grid/table view toggle, "Add Package" button
- Package cards: image, title, destination, price, duration, description
- Category filter (Domestic/International), highlight popular packages

## Shared Reusable Components
- Sidebar, Header, StatsCard, DataTable, StatusBadge, FilterBar, Modal/Sheet panels

## Technical
- All pages use mock/sample data (no backend)
- React Router for navigation between pages
- Recharts for charts
- shadcn/ui components (tables, dialogs, sheets, badges, buttons, popovers, calendar)
- Responsive for desktop + tablet
- Smooth hover animations and card elevation effects

