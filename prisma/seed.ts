import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();


const getGames = (): Prisma.GameCreateInput[] => [
  {name: "Nemesis", isBaseGame: true, numplays: 1, minplayers: 1, maxplayers:5, releasedate: new Date(Date.now()), acquired: new Date(Date.now()), info: "Horror in Space", type: "Standalone", favorite: true},
  {name: "Nemesis: Lockdown", isBaseGame: true, numplays: 1, minplayers: 1, maxplayers:5, releasedate: new Date(Date.now()), acquired: new Date(Date.now()), info: "Horror on Mars", type: "Standalone", favorite: false},
];

// const getExpansions = (games: Game[]) : Prisma.ExpansionCreateInput[] => [
//   {
//     base: {connect: {id: games[0].id}},
//     name: "Nemesis: Aftermath", isExpansion: true, numplays: 1, minplayers: 1, maxplayers:5, releasedate: new Date(Date.now()), acquired: new Date(Date.now()), info: "After the Horror in Space", type: "Expansion", favorite: false,
//   }
//   // {name: "Nemesis: Kings", isExpansion: true, numplays: 1, minplayers: 1, maxplayers:5, releasedate: new Date(Date.now()), acquired: new Date(Date.now()), info: "Intruder Kings instead of Queens ", type: "Cosmetic", favorite: false},
// ];


const main = async () => {
  const games = await Promise.all(
    getGames().map((game) => client.game.create({data: game}))
  );

  // const expansions = await Promise.all(
  //   getExpansions(games).map((expansion) => client.expansion.create({data: expansion}))
  // );
}

main();

// async function main() {
//   const nemesis = await prisma.game.create({
//     data: {
//       name: "Nemesis",
//       rating: 10,
//       numplays: 14,
//       minplayers: 1,
//       maxplayers: 5,
//       maxplaytime: 180,
//       minplaytime: 90,
//       released: 2018,
//       type: "standalone",
//       pricepaid: 230,
//       acquired: "2019-01-02",
//       comments: "All cards sleeved",
//       difficulty: null,
//       info: 'Horror game',
//       mechanics: null,
//       videos: null,
//       expansions: ['Kings', 'Void Seeders'],
//       setup: null,
//       isBaseGame: true,
//       publisher: null,
//       designer: null,
//       howtoplay: null,
//       version: null,
//       releasedate: '',
//     },
//   });
//   console.log({ nemesis });
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
