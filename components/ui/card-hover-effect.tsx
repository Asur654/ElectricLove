import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    images: string[];
    price: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [active, setActive] = useState<any | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  py-10",
        className
      )}
    >
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 h-full w-full bg-black/5 backdrop-blur-lg z-50 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <motion.div 
          layoutId={`component-${active.title}`}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="w-70 h-[480px] rounded-xl bg-neutral-800 border border-transparent p-4 group-hover:border-slate-700 shadow-sm shadow-emmerald-400/20 z-30"
          >
          <motion.div 
          className="grid grid-rows-[160px,1fr,60px] h-[480px] w-full p-4 group z-30"
          layoutId={`component-content-${active.title}`}
          >
            <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Image
              src={active.images[0]}
              alt={active.title}
              width={200}
              height={200}
              className="h-full object-contain"
            />
            </div>
            <div className="flex flex-col overflow-hidden min-h-[190px]">
            <CardTitle className="line-clamp-2 text-lg">
              {active.title}
            </CardTitle>
            <CardDescription className="line-clamp-4 text-sm mt-1">
              {active.description}
            </CardDescription>
            </div>
          </motion.div>
          <div>
            <p className="text-black bg-neutral-200 font-semibold">{active.category}</p>
          </div>
          </motion.div>
        </motion.div>
      )}
      {items.map((item, idx) => (
        <motion.div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          layoutId={`component-${item.title}`}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setActive(item)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-emerald-400/80 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card className="grid grid-rows-[160px,1fr,60px] h-[480px] w-full p-4 group">
            {/* Image */}
            <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <Image
                className="h-full object-contain"
                src={item.images[0]}
                alt={item.title}
                width={200}
                height={200}
              />
            </div>

            {/* Title + Description */}
            <div className="flex flex-col overflow-hidden min-h-[190px]">
              <CardTitle className="line-clamp-2 text-lg">
                {item.title}
              </CardTitle>

              <CardDescription className="line-clamp-4 text-sm mt-1">
                {item.description}
              </CardDescription>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between">
              <p className="text-white font-semibold">₹{item.price}</p>

              <button className="bg-emerald-400 text-black hover:bg-emerald-300 px-3 py-1 rounded-md">
                Add to Cart
              </button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-800 border border-transparent dark:border-white/20 group-hover:border-slate-700 relative z-20 flex flex-col justify-between",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
