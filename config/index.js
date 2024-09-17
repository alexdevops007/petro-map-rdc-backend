module.exports = {
  DB_URI:
    process.env.DB_URI ||
    "mongodb+srv://xander-smith:123minhydrordc123@minhydrocluster.yozcy.mongodb.net/MIN-HYDRO-RDC?retryWrites=true&w=majority&appName=MinHydroCluster",
  JWT_SECRET:
    process.env.JWT_SECRET ||
    "cc07c397fc3feddde506d2484929f428458748f70276fcf52c00294263d6ad57d9d9b53c8bdddf247d8fae9793c4d35d45ab56a2d9d9e40b1adb8239e4605d4e",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
  SESSION_EXPIRATION_TIME: process.env.SESSION_EXPIRATION_TIME || 3600000, // 1 hour
  EMAIL_USER: process.env.EMAIL_USER || "egec.rdc1@gmail.com",
  EMAIL_PASS: process.env.EMAIL_PASS || "vlkk dwhr qkxo lpmk",
};
