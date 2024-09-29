/*
  Warnings:

  - Added the required column `position` to the `ExamTemplateQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scoreWeight` to the `ExamTemplateQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "QuestionOptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "question_id" TEXT,
    CONSTRAINT "QuestionOptions_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ExamTemplateQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question_id" TEXT NOT NULL,
    "exam_template_id" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "scoreWeight" REAL NOT NULL,
    CONSTRAINT "ExamTemplateQuestion_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExamTemplateQuestion_exam_template_id_fkey" FOREIGN KEY ("exam_template_id") REFERENCES "exam_template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ExamTemplateQuestion" ("exam_template_id", "id", "question_id") SELECT "exam_template_id", "id", "question_id" FROM "ExamTemplateQuestion";
DROP TABLE "ExamTemplateQuestion";
ALTER TABLE "new_ExamTemplateQuestion" RENAME TO "ExamTemplateQuestion";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
