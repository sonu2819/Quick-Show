
// import mongoose from 'mongoose';
// import Movie from './models/Movie.js';
// import Show from './models/Show.js';

// const uri = "mongodb+srv://2023bcasonu16103:jW9cP1M7ftV0XXxE@cluster0.hxnkx1d.mongodb.net/quickshow";


// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Atlas connected"))
//     .catch(err => console.log(err));

// const seed = async () => {
//     try {
//         await Movie.deleteMany({});
//         await Show.deleteMany({});

//         // Step 1: Add movies
//         const movies = await Movie.insertMany([
            
//                 {
//                 _id: "1",
//                 originalTitle: "Inception",
//                 description: "A thief steals corporate secrets through dream-sharing technology.",
//                 primaryImage: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
//                 thumbnails: ["https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"],
//                 trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
//                 releaseDate: "2010-07-16",
//                 original_language: ["English"],
//                 genres: ["Action", "Sci-Fi"],
//                 casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
//                 averageRating: 8.8,
//                 runtime: 148,
//                 numVotes: 2000000
//             },
//             {
//                 _id: "2",
//                 originalTitle: "The Matrix",
//                 description: "A hacker discovers the world is a simulation.",
//                 primaryImage: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
//                 thumbnails: ["https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"],
//                 trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
//                 releaseDate: "1999-03-31",
//                 original_language: ["English"],
//                 genres: ["Action", "Sci-Fi"],
//                 casts: ["Keanu Reeves", "Laurence Fishburne"],
//                 averageRating: 8.7,
//                 runtime: 136,
//                 numVotes: 1700000
//             },

//             {
//                 _id: "3",
//                 originalTitle: "Avengers: Endgame",
//                 description: "The Avengers assemble to reverse Thanos' actions and restore balance to the universe.",
//                 primaryImage: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
//                 thumbnails: ["https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg"],
//                 trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
//                 releaseDate: "2019-04-26",
//                 original_language: ["English"],
//                 genres: ["Action", "Adventure", "Sci-Fi"],
//                 casts: ["Robert Downey Jr.", "Chris Evans"],
//                 averageRating: 8.4,
//                 runtime: 181,
//                 numVotes: 900000
//             },
          
               
//         ]);

//         // Step 2: Add shows referencing the movies by _id
//         const shows = await Show.insertMany([
           

//              { movie: "1", showDateTime: new Date("2026-01-27T18:00:00Z"), showprice: 250 },
//             { movie: "2", showDateTime: new Date("2026-01-27T20:00:00Z"), showprice: 300 },
//             { movie: "3", showDateTime: new Date("2026-01-28T18:00:00Z"), showprice: 280 },
    
//         ]);

//         console.log("Movies and shows seeded successfully!");
//         mongoose.disconnect();
//     } catch (err) {
//         console.log(err);
//     }
// };

// seed();







// import mongoose from "mongoose";
// import Movie from "./models/Movie.js";
// import Show from "./models/Show.js";

// // ✅ MongoDB Atlas connection
// const uri =
//   "mongodb+srv://2023bcasonu16103:jW9cP1M7ftV0XXxE@cluster0.hxnkx1d.mongodb.net/quickshow";

// mongoose
//   .connect(uri)
//   .then(() => console.log("MongoDB Atlas connected"))
//   .catch((err) => console.log(err));

// const seed = async () => {
//   try {
//     // ✅ clear old data
//     await Movie.deleteMany({});
//     await Show.deleteMany({});

//     // =========================
//     // STEP 1 — INSERT MOVIES
//     // =========================
//     const movies = [
//       {
//         _id: "1",
//         originalTitle: "Inception",
//         description:
//           "A thief steals corporate secrets through dream-sharing technology.",
//         primaryImage:
//           "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
//         thumbnails: [
//           "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
//         ],
//         trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
//         releaseDate: "2010-07-16",
//         original_language: ["English"],
//         genres: ["Action", "Sci-Fi"],
//         casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
//         averageRating: 8.8,
//         runtime: 148,
//         numVotes: 2000000,
//       },
//       {
//         _id: "2",
//         originalTitle: "The Matrix",
//         description: "A hacker discovers the world is a simulation.",
//         primaryImage:
//           "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
//         thumbnails: [
//           "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
//         ],
//         trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
//         releaseDate: "1999-03-31",
//         original_language: ["English"],
//         genres: ["Action", "Sci-Fi"],
//         casts: ["Keanu Reeves", "Laurence Fishburne"],
//         averageRating: 8.7,
//         runtime: 136,
//         numVotes: 1700000,
//       },
//       {
//         _id: "3",
//         originalTitle: "Avengers: Endgame",
//         description:
//           "The Avengers assemble to restore balance to the universe.",
//         primaryImage:
//           "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
//         thumbnails: [
//           "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
//         ],
//         trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
//         releaseDate: "2019-04-26",
//         original_language: ["English"],
//         genres: ["Action", "Adventure", "Sci-Fi"],
//         casts: ["Robert Downey Jr.", "Chris Evans"],
//         averageRating: 8.4,
//         runtime: 181,
//         numVotes: 900000,
//       },
//     ];

//     await Movie.insertMany(movies);

//     // =========================
//     // STEP 2 — INSERT SHOWS
//     // (Future Dates Auto)
//     // =========================

//     const today = new Date();

//     const shows = [
//       {
//         movie: "1",
//         showDateTime: new Date(today.getTime() + 24 * 60 * 60 * 1000), // +1 day
//         showprice: 250,
//         occupiedSeats: {},
//       },
//       {
//         movie: "2",
//         showDateTime: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000), // +2 days
//         showprice: 300,
//         occupiedSeats: {},
//       },
//       {
//         movie: "3",
//         showDateTime: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000), // +3 days
//         showprice: 280,
//         occupiedSeats: {},
//       },
//     ];

//     await Show.insertMany(shows);

//     console.log("✅ Movies and shows seeded successfully!");

//     mongoose.disconnect();
//   } catch (err) {
//     console.log(err);
//   }
// };

// seed();


// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Movie from "./models/Movie.js";
// import Show from "./models/Show.js";

// dotenv.config();

// // ✅ MongoDB Atlas connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Atlas connected"))
//   .catch((err) => console.log(err));

// const seed = async () => {
//   try {
//     await Movie.deleteMany({});
//     await Show.deleteMany({});

//     // =========================
//     // INSERT LATEST MOVIES
//     // =========================

//     const movies = await Movie.insertMany([
//       {
//         originalTitle: "Oppenheimer",
//         description:
//           "The story of J. Robert Oppenheimer and the development of the atomic bomb.",
//         primaryImage:
//           "https://m.media-amazon.com/images/I/71lqDylcvGL._AC_SL1500_.jpg",
//         thumbnails: [
//           "https://m.media-amazon.com/images/I/71lqDylcvGL._AC_SL1500_.jpg",
//         ],
//         trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
//         releaseDate: "2023-07-21",
//         original_language: ["English"],
//         genres: ["Biography", "Drama", "History"],
//         casts: ["Cillian Murphy", "Emily Blunt"],
//         averageRating: 8.6,
//         runtime: 180,
//         numVotes: 800000,
//       },
//       {
//         originalTitle: "Dune: Part Two",
//         description:
//           "Paul Atreides unites with the Fremen to wage war against House Harkonnen.",
//         primaryImage:
//           "https://m.media-amazon.com/images/I/81n+KXv0zIL._AC_SL1500_.jpg",
//         thumbnails: [
//           "https://m.media-amazon.com/images/I/81n+KXv0zIL._AC_SL1500_.jpg",
//         ],
//         trailer: "https://www.youtube.com/watch?v=Way9Dexny3w",
//         releaseDate: "2024-03-01",
//         original_language: ["English"],
//         genres: ["Sci-Fi", "Adventure"],
//         casts: ["Timothée Chalamet", "Zendaya"],
//         averageRating: 8.8,
//         runtime: 166,
//         numVotes: 500000,
//       },
//       {
//         originalTitle: "Jawan",
//         description:
//           "A man sets out to correct the wrongs in society through powerful action.",
//         primaryImage:
//           "https://m.media-amazon.com/images/I/71p9N9FZ6HL._AC_SL1500_.jpg",
//         thumbnails: [
//           "https://m.media-amazon.com/images/I/71p9N9FZ6HL._AC_SL1500_.jpg",
//         ],
//         trailer: "https://www.youtube.com/watch?v=COv52Qyctws",
//         releaseDate: "2023-09-07",
//         original_language: ["Hindi"],
//         genres: ["Action", "Thriller"],
//         casts: ["Shah Rukh Khan", "Nayanthara"],
//         averageRating: 7.5,
//         runtime: 169,
//         numVotes: 200000,
//       },
//     ]);

//     // =========================
//     // CREATE FUTURE SHOWS
//     // =========================

//     const today = new Date();

//     const shows = movies.map((movie, index) => ({
//       movie: movie._id,
//       showDateTime: new Date(
//         today.getTime() + (index + 1) * 24 * 60 * 60 * 1000
//       ),
//       showprice: 250 + index * 20,
//       occupiedSeats: {},
//     }));

//     await Show.insertMany(shows);

//     console.log("✅ Latest movies and shows seeded successfully!");

//     await mongoose.connection.close();
//     process.exit();
//   } catch (err) {
//     console.log(err);
//   }
// };

// seed();


import mongoose from "mongoose";
import Movie from "./models/Movie.js";
import Show from "./models/Show.js";

// 🔹 MongoDB Atlas connection
const uri =
  "mongodb+srv://2023bcasonu16103:jW9cP1M7ftV0XXxE@cluster0.hxnkx1d.mongodb.net/quickshow";

mongoose
  .connect(uri)
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.log(err));

// 🔹 Helper function to create future dates
const createFutureDate = (days, hour) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(hour, 0, 0, 0);
  return date;
};

const seed = async () => {
  try {
    // Clear old data
    await Movie.deleteMany({});
    await Show.deleteMany({});

    // =========================
    // INSERT MOVIES
    // =========================
    await Movie.insertMany([
      {
        _id: "1",
        originalTitle: "Inception",
        description:
          "A thief steals corporate secrets through dream-sharing technology.",
        primaryImage:
          "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
        thumbnails: [
          "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
        ],
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        releaseDate: "2010-07-16",
        original_language: ["English"],
        genres: ["Action", "Sci-Fi"],
        casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
        averageRating: 8.8,
        runtime: 148,
        numVotes: 2000000,
      },
      {
        _id: "2",
        originalTitle: "The Matrix",
        description: "A hacker discovers the world is a simulation.",
        primaryImage:
          "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        thumbnails: [
          "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        ],
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        releaseDate: "1999-03-31",
        original_language: ["English"],
        genres: ["Action", "Sci-Fi"],
        casts: ["Keanu Reeves", "Laurence Fishburne"],
        averageRating: 8.7,
        runtime: 136,
        numVotes: 1700000,
      },
      {
        _id: "3",
        originalTitle: "Avengers: Endgame",
        description:
          "The Avengers assemble to restore balance to the universe.",
        primaryImage:
          "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
        thumbnails: [
          "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
        ],
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        releaseDate: "2019-04-26",
        original_language: ["English"],
        genres: ["Action", "Adventure", "Sci-Fi"],
        casts: ["Robert Downey Jr.", "Chris Evans"],
        averageRating: 8.4,
        runtime: 181,
        numVotes: 900000,
      },
    ]);

    // =========================
    // INSERT SHOWS (Dynamic Future Dates)
    // =========================
    await Show.insertMany([
      // Inception shows
      {
        movie: "1",
        showDateTime: createFutureDate(1, 10), // Tomorrow 10 AM
        showprice: 250,
        occupiedSeats: {},
      },
      {
        movie: "1",
        showDateTime: createFutureDate(1, 18), // Tomorrow 6 PM
        showprice: 300,
        occupiedSeats: {},
      },

      // Matrix shows
      {
        movie: "2",
        showDateTime: createFutureDate(2, 14), // +2 days 2 PM
        showprice: 280,
        occupiedSeats: {},
      },

      // Avengers shows
      {
        movie: "3",
        showDateTime: createFutureDate(3, 16), // +3 days 4 PM
        showprice: 320,
        occupiedSeats: {},
      },
    ]);

    console.log("🎬 Movies and shows seeded successfully!");

    await mongoose.connection.close();
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

seed();