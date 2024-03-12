export default function DashboardLayout({ children, users, revenue, notification }: { children: React.ReactNode; users: React.ReactNode; revenue: React.ReactNode; notification: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <UserAnalytics />
      <RevenueMetrics />
      <Notification />
    </>
  );
}
