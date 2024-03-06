import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      {/* <Navbar /> */}
      <main className="pt-10 pb-10 bg-slate-100">{children}</main>
    </div>
  );
};

export default MarketingLayout;
