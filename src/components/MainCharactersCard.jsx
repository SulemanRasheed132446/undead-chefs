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
      className="flex flex-col j items-center md:opacity-40 md:hover:opacity-100 cursor-pointer w-3/6 sm:w-1/3 lg:min-h-[300px] lg:w-[30%] px-5 py-5"
    >
      <img src={character.imageUrl} className="p-4 w-full lg:w-3/5"></img>
      <h5 className="text-[red] mt-0 text-center uppercase">{character.title}</h5>
      <h5 className="text-[#ff0000ba] mt-0 text-center uppercase">{character.role}</h5>
      <p className="text-white text-center uppercase text-sm">{character.description}</p>
    </motion.a>
  );
}
