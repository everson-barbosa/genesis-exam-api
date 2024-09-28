/*
  Warnings:

  - You are about to drop the column `exam_template_id` on the `Question` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "enunciation" TEXT NOT NULL
);
INSERT INTO "new_Question" ("enunciation", "id") SELECT "enunciation", "id" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
