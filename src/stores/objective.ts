import { create } from "zustand";
import * as ObjectiveHelper from "@/helpers/objective";

interface ObjectiveStore {
  loading: boolean;
  objectives: App.Objective[];
  objectiveOfTheWeek: App.SuggestedObjective;
  fetchObjectives: () => Promise<App.Objective[]>;
  newObjective: (passage: Bible.Passage) => Promise<number>;
  removeObjective: (id: number) => Promise<void>;
}

// TODO
const TEST: App.SuggestedObjective = {
  passage: {
    book: "GN",
    chapter: 1,
    verseFrom: 1,
    verseTo: 10,
  },
};

export const useObjectiveStore = create<ObjectiveStore>((set) => {
  const fetchObjectives = async () => {
    set((state) => ({ ...state, loading: true }));
    const newObjectives = await ObjectiveHelper.getObjectives();
    set((state) => ({ ...state, objectives: newObjectives, loading: false }));
    return newObjectives;
  };

  const newObjective = async (passage: Bible.Passage) => {
    const objectives = await fetchObjectives();
    const equivalentObjective = await ObjectiveHelper.getObjectiveByPassage(objectives, passage);
    if (equivalentObjective) return equivalentObjective!.id;

    await ObjectiveHelper.newObjective(passage);

    const newObjectives = await fetchObjectives();
    const newEquivalentObjective = await ObjectiveHelper.getObjectiveByPassage(newObjectives, passage);
    return newEquivalentObjective!.id;
  };

  const removeObjective = async (id: number) => {
    await ObjectiveHelper.removeObjective(id);
    await fetchObjectives();
  };

  return {
    objectives: [],
    loading: false,
    fetchObjectives,
    newObjective,
    removeObjective,
    objectiveOfTheWeek: TEST,
  };
});
