-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "enunciation" TEXT NOT NULL,
    "exam_template_id" TEXT,
    CONSTRAINT "Question_exam_template_id_fkey" FOREIGN KEY ("exam_template_id") REFERENCES "exam_template" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExamApplication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "exam_template_id" TEXT NOT NULL,
    CONSTRAINT "ExamApplication_exam_template_id_fkey" FOREIGN KEY ("exam_template_id") REFERENCES "exam_template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "exam_template" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
