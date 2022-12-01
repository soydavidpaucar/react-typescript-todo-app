type PageTitleProps = {
  children: string;
};

function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="inline-block w-full text-[40px] font-bold text-[#64ffda] uppercase text-center m-auto mt-[32px] mb-[24px]">
      {children}
    </h1>
  );
}

export default PageTitle;
