import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@/components/ui/hover-card";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I don’t just write code, I solve invisible problems behind visible systems.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Recently, I contributed to backends development of an enterprise-grade internal system with a highly relational and
          domain-rich data model, covering areas such as procurement, legal, and HR. I contributed to both its architectural design
          and technical documentation, ensuring the system was maintainable and easy to onboard.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Mid Backend Developer · PT SIGMA CIPTA CARAKA (Telkomsigma)
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 2022 – Present
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Built, maintained, and optimized enterprise-grade backend systems for internal 
            platforms used across legal, HR, procurement, and sales departments. 
            I worked closely with cross-functional teams and handled core responsibilities 
            across development, performance optimization, and documentation.
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Developed legal contract approval system with Django, reducing processing time by 50%
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Created partner data backend for sales ops; unified scattered data sources into a central system
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Integrated Microsoft SharePoint with internal backend for seamless document handling
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Refactored slow-performing APIs and introduced asynchronous workflows with Celery
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Authored internal technical documentation and performed system handovers
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Full Stack Developer · Ravenry
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Sep 2021 - Feb 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Collaborated in building and refining features across frontend and backend stacks. Worked in an agile team setup and contributed to improving product UI/UX, system integrations, and QA reliability.
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Designed and implemented a pub/sub solution for service integration
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Automated test coverage for core features using Cypress
          </p>
        </li>
      </ol>

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
