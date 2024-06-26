import React from "react";
import { ExperienceType } from "./experience.type";
import styles from "./experience.module.scss";
import { syneHeading } from "@/global/fonts";
export const Experience = ({
  jobTitle,
  company,
  startDate,
  endDate,
  responsibilities,
}: ExperienceType) => (
  <div className={styles.experience}>
    <header>
      <h3 className={syneHeading.className}>
        {company} <span> - {jobTitle}</span>
      </h3>
      <span>
        {startDate} - {endDate}
      </span>
    </header>

    <ul>
      {responsibilities.map(({ title, description }) => (
        <li key={title}>
          <span>{title}:</span> {description}
        </li>
      ))}
    </ul>
  </div>
);
