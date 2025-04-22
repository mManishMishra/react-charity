import { countriesWeWork } from "../services/countriesWeWork";
import { motion } from "framer-motion";

const CountryList = () => {
  return (
    <div className="py-16 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-10">Where We Work</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {countriesWeWork.map((country, index) => (
          <motion.div
            key={index}
            className="group p-4 text-center rounded-2xl bg-muted shadow-lg transition-all duration-300 hover:shadow-yellow-400/50 dark:hover:shadow-yellow-300/40 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, type: "spring" }}
          >
            <img
              src={`https://flagcdn.com/48x36/${country.code}.png`}
              alt={country.name}
              className="mx-auto mb-2 rounded shadow-md group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={48}
              height={36}
            />
            <p className="font-semibold">{country.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
