import type { Metadata } from "next";
import { StoryBuilding } from "@/components/sections/story-building";
import { StoryExperience } from "@/components/sections/story-experience";
import { StoryFuture } from "@/components/sections/story-future";
import { StoryHero } from "@/components/sections/story-hero";
import { StoryIdea } from "@/components/sections/story-idea";
import { StoryProblem } from "@/components/sections/story-problem";
import { StoryReal } from "@/components/sections/story-real";
import { storyMeta } from "@/lib/story-content";

export const metadata: Metadata = {
  title: storyMeta.title,
  description: storyMeta.description,
  openGraph: {
    title: storyMeta.title,
    description: storyMeta.description,
    locale: "ko_KR",
    type: "website",
  },
};

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <StoryProblem />
      <StoryIdea />
      <StoryExperience />
      <StoryReal />
      <StoryBuilding />
      <StoryFuture />
    </>
  );
}
