import { motion } from "framer-motion";
export default function MainCharactersCard({ character }) {
  return (
    <motion.a
      href={`https://twitter.com/${character.userName.replace("@", "")}`}
      target="_blank"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.2,
      }}
      className="flex flex-col justify-center items-center md:opacity-40 md:hover:opacity-100 cursor-pointer w-3/6 sm:w-1/3  lg:w-1/6"
    >
      <img src={character.imageUrl} className="p-4"></img>
      <h5 className="text-lime-200 mt-0 text-center">{character.title}</h5>
      <p className="text-white text-center">{character.userName}</p>
    </motion.a>
  );
}
