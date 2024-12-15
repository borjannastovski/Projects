import React from "react";
import { BlogType, EventType, JobType } from "@/types";
import HoverCard from "./HoverCard";
import RecommendedEvent from "./RecommendedEvent";

interface Props {
  data1: BlogType[];
  randomEvents: EventType[];
  jobData: JobType[];
}

const NewestBlogs: React.FC<Props> = ({ data1, randomEvents, jobData }) => {
  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedBlogs = [...data1].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const latestBlogs = sortedBlogs.slice(0, 2);

  return (
    <div className="newest-blogs">
      <div className="header">
        <h2>Најнови блогови</h2>
        <input type="text" placeholder="Пребарај" />
      </div>
      <div className="blogs-jobs">
        <div className="blogs-events">
          <HoverCard item={latestBlogs[0]} />
          <RecommendedEvent item={randomEvents[0]} />
          <RecommendedEvent item={randomEvents[1]} />
          <HoverCard item={latestBlogs[1]} />
        </div>
        <div className="jobs">
          <img src="./images/jobsOglasi.jpg" alt="Jobs" />
          <div className="content">
            <h3>Најнови огласи:</h3>
            {jobData.map((job) => (
              <div key={job.id} className="job-item">
                <img src={job.img} alt="Job" />
                <p>{job.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestBlogs;
