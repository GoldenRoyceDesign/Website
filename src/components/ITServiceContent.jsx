
const BannerDetails = ({head, content, reverse, img }) => {
    return (
      <section>
        <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
          <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
            <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
              <div
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                  reverse ? "md:order-last" : ""
                } `}
              >
                <h1 className="text-2xl md:text-4xl ">
                  {head}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {content}
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-once="true"
                className={reverse ? "order-1" : ""}
              >
                <img
                  src={img}
                  alt="No image"
                  className="max-auto w-fit w-full-md hover:drop-shadow-md"
                />
              </div>
            </div>
          </section>
        </main>
      </section>
    );
  };
  
  export default BannerDetails;
  