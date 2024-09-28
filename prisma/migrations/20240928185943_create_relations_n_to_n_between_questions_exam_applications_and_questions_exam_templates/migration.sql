-- CreateTable
CREATE TABLE "ExamTemplateQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question_id" TEXT NOT NULL,
    "exam_template_id" TEXT NOT NULL,
    CONSTRAINT "ExamTemplateQuestion_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExamTemplateQuestion_exam_template_id_fkey" FOREIGN KEY ("exam_template_id") REFERENCES "exam_template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExamApplicationQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question_id" TEXT NOT NULL,
    "exam_application_id" TEXT NOT NULL,
    CONSTRAINT "ExamApplicationQuestion_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExamApplicationQuestion_exam_application_id_fkey" FOREIGN KEY ("exam_application_id") REFERENCES "ExamApplication" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
