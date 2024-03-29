type PageTitleProps = {
  children: string;
};

function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="inline-block w-full text-[40px] font-bold text-[#ccd6f6] uppercase text-center m-auto mt-[20px] mb-[15px]">
      {children}
    </h1>
  );
}

export default PageTitle;
