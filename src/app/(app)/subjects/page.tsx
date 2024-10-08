import React from "react";
import { getSubjectsForCurrentSchoolYear } from "@/app/actions/subjects";
import { SubjectsContent } from "@/components/subjects/subjects-content";

export default async function SubjectsPage() {
  const subjects = await getSubjectsForCurrentSchoolYear();

  return <SubjectsContent subjects={subjects} />;
}
