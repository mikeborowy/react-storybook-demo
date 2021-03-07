import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, text } from "@storybook/addon-knobs";

import MovieListItem from "./MovieListItem";

export default {
  title: "Molecules/MovieListItem",
  component: MovieListItem,
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
  // excludeStories: ["movieTheGodfather", "movie12AngryMen"],
  excludeStories: /^movie/,
  // includeStories: ["TheGodfather"],
};

export const movieTheGodfather = {
  id: 238,
  title: "The Godfather",
  backdrop_path: "/ejdD20cdHNFAYAN2DlqPToXKyzx.jpg",
  overview:
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  vote_average: 8.7,
};

export const movie12AngryMen = {
  id: 389,
  title: "12 Angry Men",
  backdrop_path: "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
  overview:
    "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
  vote_average: 8.4,
};

export const TheGodfather = () => {
  const movie = {
    ...movieTheGodfather,
    title: text("Title", movieTheGodfather.title),
    overview: text("Overview", movieTheGodfather.overview),
  };

  return <MovieListItem {...movie} onLearnMore={action("Learn more")} />;
};

export const NoImage = () => {
  return (
    <MovieListItem
      {...movieTheGodfather}
      backdrop_path=""
      onLearnMore={action("Learn more")}
    />
  );
};

export const AngryMen = () => {
  return (
    <MovieListItem
      {...object("Movie", movie12AngryMen)}
      onLearnMore={action("Learn more")}
    />
  );
};

AngryMen.story = {
  name: "12 Angry Men",
  // decorators: [withKnobs],
};
