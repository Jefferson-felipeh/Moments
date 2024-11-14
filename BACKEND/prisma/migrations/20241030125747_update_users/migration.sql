/*
  Warnings:

  - Made the column `city` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `confirmPassword` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uf` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "rua" TEXT,
    "city" TEXT NOT NULL,
    "num" TEXT,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL,
    "created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" DATETIME NOT NULL
);
INSERT INTO "new_users" ("age", "cep", "city", "confirmPassword", "cpf", "created_At", "email", "id", "name", "num", "password", "phone", "rua", "uf", "updated_At") SELECT "age", "cep", "city", "confirmPassword", "cpf", "created_At", "email", "id", "name", "num", "password", "phone", "rua", "uf", "updated_At" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
