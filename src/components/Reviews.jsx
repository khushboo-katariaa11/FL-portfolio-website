import AnimatedTitle from "./AnimatedTitle";

const reviews = [
  {
    name: "Aarav Mehta",
    role: "Cafe Owner",
    quote:
      "The new website made our menu and booking flow feel much easier to use. We started getting more table inquiries within the first week.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "Beauty Studio Founder",
    quote:
      "It finally feels like our brand looks as premium online as it does in real life. Clients noticed the upgrade immediately.",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    role: "Jewellery Boutique Owner",
    quote:
      "The layout feels elegant and trustworthy, and the product presentation now gives us a much stronger luxury feel.",
    rating: 5,
  },
];

const ReviewCard = ({ name, role, quote, rating }) => {
  return (
    <div className="border-hsla group relative overflow-hidden rounded-3xl bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/7">
      <div className="absolute right-5 top-5 font-general text-[10px] uppercase tracking-[0.35em] text-blue-50/35">
        real review
      </div>

      <div className="mb-5 flex items-center gap-4">
        <div className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-300/40 to-violet-300/50 font-general text-sm uppercase text-blue-50 shadow-lg shadow-violet-500/10">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>

        <div>
          <p className="font-general text-sm uppercase tracking-[0.3em] text-blue-50">
            {name}
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-blue-50/55">
            {role}
          </p>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-1 text-yellow-300">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      <p className="max-w-xl text-sm leading-7 text-blue-50/80 md:text-base">
        {quote}
      </p>
    </div>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="w-screen bg-black py-20 text-blue-50 md:py-28">
      <div className="container mx-auto px-5 md:px-10">
        <div className="mb-16 flex flex-col gap-5">
          <p className="font-general text-sm uppercase tracking-[0.35em] text-blue-50/70">
            Customer reviews
          </p>
          <AnimatedTitle
            title="What clients <br /> say after launch"
            containerClass="max-w-6xl !text-black !text-5xl sm:!text-6xl md:!text-7xl lg:!text-[5.5rem] xl:!text-[6rem]"
          />
          <p className="max-w-2xl font-circular-web text-base text-blue-50/75 md:text-lg">
            This section adds social proof in the same cinematic style as the
            rest of the site, showing the kind of results and trust a good
            website can create.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="border-hsla relative overflow-hidden rounded-3xl bg-white/5 p-6 lg:col-span-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(93,63,211,0.22),transparent_45%)]" />
            <div>
              <p className="relative mb-3 font-general text-[10px] uppercase tracking-[0.35em] text-blue-50/70">
                impact snapshot
              </p>
              <h3 className="relative special-font max-w-xs text-4xl uppercase text-blue-50 md:text-5xl">
                trust <br /> turned into action.
              </h3>
              <p className="relative mt-4 max-w-sm text-sm text-blue-50/75 md:text-base">
                Real customer words make the site feel more credible, more human,
                and more ready to convert visitors into clients.
              </p>
            </div>

            <div className="relative grid grid-cols-2 gap-4 pt-8">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                <p className="font-general text-[10px] uppercase tracking-[0.3em] text-blue-50/55">
                  average lift
                </p>
                <p className="mt-2 font-zentry text-4xl text-blue-50">3x</p>
                <p className="mt-1 text-xs text-blue-50/65">more trust signals</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                <p className="font-general text-[10px] uppercase tracking-[0.3em] text-blue-50/55">
                  conversion focus
                </p>
                <p className="mt-2 font-zentry text-4xl text-blue-50">24/7</p>
                <p className="mt-1 text-xs text-blue-50/65">working for the brand</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-8">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
