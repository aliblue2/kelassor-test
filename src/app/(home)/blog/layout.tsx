import BlogNav from "@/components/blog/BlogNav";

//layout component
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex gap-10 flex-col py-10">
      <BlogNav />
      {children}
    </div>
  );
};

export default layout;
