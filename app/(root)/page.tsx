"use client";

import PodcastCard from "@/components/PodcastCard";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {trendingPodcasts?.map((podcast) => (
            <PodcastCard
              key={podcast._id}
              description={podcast.podcastDescription}
              title={podcast.podcastTitle}
              podcastId={podcast._id}
              imgUrl={podcast.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
