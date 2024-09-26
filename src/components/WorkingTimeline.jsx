import React from 'react'
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const WorkingTimeline = () => {
  return (
    <div className='mt-8 px-4'>
        <h2 className='text-3xl font-semibold'>Typing speed test</h2>
        <Timeline className='mt-5'>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>July 2024</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                E-commerce & Marketing pages.
            </Timeline.Body>
            <Button color="gray">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
            </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>August 2022</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
                All of the pages and components are first designed in Figma and we keep a parity between the two versions
                even as we update the project.
            </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>September 2022</Timeline.Time>
            <Timeline.Title>Future Scope</Timeline.Title>
            <Timeline.Body>
                The tool should allow users to select different difficulty levels or test lengths (e.g., 1 minute, 3 minutes, 5 minutes). This helps cater to both beginners and advanced typists.
                Example: "Include features like different text themes, multiple test durations, and difficulty settings to adapt to various skill levels."
            </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
        </Timeline>
    </div>
  )
}

export default WorkingTimeline
