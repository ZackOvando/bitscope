import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";

const content = [
  "Deploy a Read-Only IAM Role",
  "We Scan for Risk and Drift",
  "You Get Least-Privilege Recommendations"
];

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="How?"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Here's how we plan to fix it. Let us know what you think!"
          duration={0.8}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-4 grid w-full grid-cols-2 items-center justify-center gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
        {
          content.map((item, index) => (
            <div
              key={index}
              className="flex h-24 items-center justify-center rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out">
              <TextBlur
                className="text-center text-base text-zinc-300 sm:text-lg"
                text={item}
                duration={0.8}
              />
            </div>
          ))
        }
      </motion.div>

      <motion.div 
      className="mt-4"
      variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="That's it! You're all set."
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
