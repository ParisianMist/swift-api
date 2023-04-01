/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function () {
      return knex('employees').insert(
        [
          {
            "id": "3db6dc51-b461-4fa4-a6e4-b1ff352221c5",
            "name": "Neville Longbottom",
            "email": "NevilleLongbottom@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "79e02eb5-17c0-4dd9-bf55-aec03434812c",
            "name": "Molly Weasley",
            "email": "MollyWeasley@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "4c7e6819-a91a-45b2-a454-f931e4a7cce3",
            "name": "Hermione Granger",
            "email": "HermioneGranger@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "ca3827f0-375a-4891-aaa5-f5e8a5bad225",
            "name": "Minerva McGonagall",
            "email": "MinervaMcGonagall@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "d5c4daa3-c726-426a-aa98-fb40f3fba816",
            "name": "Cedric Diggory",
            "email": "CedricDiggory@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "8f9aa40b-5d7c-441e-ad32-4564ecda3b70",
            "name": "Cho Chang",
            "email": "ChoChang@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "3569d265-bd27-44d8-88e8-82fb0a848374",
            "name": "Severus Snape",
            "email": "SeverusSnape@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "36bfefd0-e0bb-4d11-be98-d1ef6117a77a",
            "name": "Rubeus Hagrid",
            "email": "RubeusHagrid@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "861c4cde-2f0f-4796-8d8f-9492e74b2573",
            "name": "Luna Lovegood",
            "email": "LunaLovegood@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1",
            "name": "Ginny Weasley",
            "email": "GinnyWeasley@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "b8f9095b-9de6-4d7d-83e0-4391af8f22e4",
            "name": "Remus Lupin",
            "email": "RemusLupin@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "41cd0bbe-a943-431b-9bde-bb2cad3491a1",
            "name": "Lily Potter",
            "email": "LilyPotter@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "e9457467-d10a-4893-afa9-19f9602b218a",
            "name": "Madam Pomfrey",
            "email": "MadamPomfrey@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "f94086b8-03ae-4457-ba2c-e624d0980869",
            "name": "Lavender Brown",
            "email": "LavenderBrown@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "0201cf73-8a86-4358-b232-2abaa23f09af",
            "name": "Parvati Patil",
            "email": "ParvatiPatil@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "e8694719-a975-48fb-9523-f4cade1c38aa",
            "name": "PomonaSprout",
            "email": "PomonaSprout@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "0a81c4f9-b80d-45a7-a4fd-9191453815a1",
            "name": "Madam Hooch",
            "email": "MadamHooch@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "b634f0a1-7b48-49b6-b039-27f947ee76fd",
            "name": "Angelina Johnson",
            "email": "AngelinaJohnson@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "c29cd5f9-d2c3-4be9-ba1c-04169cdf511b",
            "name": "Alicia Spinet",
            "email": "@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "9969f803-6835-4871-80b3-7bb975c1ec06",
            "name": "Moaning Myrtle",
            "email": "MoaningMyrtle@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "575626ab-cf61-440e-88a0-db188abb1cbb",
            "name": "Rowena Ravenclaw",
            "email": "RowenaRavenclaw@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "a7c7c44d-07e4-4257-860e-375f47338cb2",
            "name": "Helga Hufflepuff",
            "email": "HelgaHufflepuff@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "42915280-ba56-4ab8-8b17-9511ba2ab093",
            "name": "Penelope Clearwater",
            "email": "PenelopeClearwater@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "8ea29415-012d-4781-ba5f-d0de63a05abe",
            "name": "Sybill Trelawney",
            "email": "SybillTrelawney@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "f1beae08-3bec-4978-89e9-4ecda4ec7514",
            "name": "Fleur Delacour",
            "email": "FleurDelacour@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "99370b33-d5a7-465b-91b1-55ef2a40182b",
            "name": "Nymphadora Tonks",
            "email": "NymphadoraTonks@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "6c4350a9-2356-4bba-96bd-0458c12d99b5",
            "name": "Romilda Vane",
            "email": "RomildaVane@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "c4e73590-3ee2-4125-87fb-692dd991819b",
            "name": "Galatea Merrythought",
            "email": "GalateaMerrythought@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "5a4c95db-947d-4914-a631-41e8d466328e",
            "name": "Kendra Dumbledore",
            "email": "KendraDumbledore@stMungos.wiz",
            "password": "hp123"
          },
          {
            "id": "e4653b01-76a5-4769-a6a2-1f2efaf89cbb",
            "name": "Rose Weasley",
            "email": "RoseWeasley@stMungos.wiz",
            "password": "hp123"
          },

        ]);
    });
}
