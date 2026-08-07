import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const categoryCards = [
  {
    title: "Nails",
    image: "/img/gallery-1.jpeg",
    description:
      "Booking-first layouts, service menus, and a polished visual style for beauty studios.",
    tag: "Book appointments",
  },
  {
    title: "Jewellery",
    image: "/img/gallery-2.jpeg",
    description:
      "Luxury storytelling, product highlights, and premium storefront energy for jewellery brands.",
    tag: "Showcase collections",
  },
  {
    title: "Cafe",
    image: "/img/gallery-3.jpeg",
    description:
      "Warm, inviting pages with menu sections, ambience shots, and a clear table-booking flow.",
    tag: "Reserve a table",
  },
  {
    title: "Stationery",
    image: "/img/gallery-4.jpeg",
    description:
      "Your one-stop shop for creativity, school supplies, office essentials, cute notebooks.",
    tag: "Ink & Excellence",
  },
  {
    title: "Boutique",
    image: "/img/gallery-5.jpeg",
    description:
      "Fashion-forward layouts with editorial spacing and a premium feel that sells the brand.",
    tag: "Drive style sales",
  },
];

const ProductCard = ({ title, image, description, tag, featured = false }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${
        featured ? "min-h-[26rem] md:min-h-[34rem]" : "min-h-[18rem] md:min-h-[20rem]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center opacity-70 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 flex size-full flex-col justify-end p-5 md:p-7">
        <p className="mb-3 font-general text-[10px] uppercase tracking-[0.35em] text-blue-50/70">
          {tag}
        </p>
        <h3 className="special-font mb-2 text-4xl uppercase text-blue-50 md:text-5xl">
          {title}
        </h3>
        <p className="max-w-md text-sm text-blue-50/80 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="w-screen bg-black py-20 text-blue-50 md:py-28">
      <div className="container mx-auto px-5 md:px-10">
        <div className="mb-12 flex flex-col gap-5">
          <p className="font-general text-sm uppercase tracking-[0.35em] text-blue-50/70">
            Template categories
          </p>
          <AnimatedTitle
            title="Pick a niche <br /> that feels premium"
            containerClass="max-w-6xl !text-black !text-5xl sm:!text-6xl md:!text-7xl lg:!text-[5.5rem] xl:!text-[6.5rem]"
          />
          <p className="max-w-2xl font-circular-web text-base text-blue-50/75 md:text-lg">
            Build niche-specific website templates for businesses like nails,
            jewellery, and cafes so clients can instantly picture their brand
            inside the design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <ProductCard {...categoryCards[0]} featured />
          </div>
          <div className="grid gap-6 md:col-span-5">
            <ProductCard {...categoryCards[1]} />
            <ProductCard {...categoryCards[2]} />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ProductCard {...categoryCards[3]} />
          <ProductCard {...categoryCards[4]} />
          <div className="flex min-h-[18rem] flex-col justify-between rounded-3xl border border-white/10 bg-[#1a1a1f] p-6 md:min-h-full">
            <div>
              <p className="mb-4 font-general text-[10px] uppercase tracking-[0.35em] text-blue-50/70">
                Custom themes
              </p>
              <h3 className="special-font max-w-sm text-4xl uppercase text-blue-50 md:text-5xl">
                Mix & match <br /> the quest line
              </h3>
              <p className="mt-4 max-w-sm text-sm text-blue-50/75 md:text-base">
                Each niche template can be remixed into a custom client build,
                so the same strong style can still feel brand-new.
              </p>
            </div>

            <Button
              title="Start a custom build"
              leftIcon={<TiLocationArrow />}
              containerClass="mt-6 bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
