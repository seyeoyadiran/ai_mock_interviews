import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";
import {getCurrentUser, getInterviewByUserId, getLatestInterviews} from "@/lib/actions/auth.action";

const page = async () => {
    const user = await getCurrentUser();

    const [userInterviews, latestInterviews] = await Promise.all([
        await getInterviewByUserId(user?.id!),
        await getLatestInterviews({userId: user?.id! })
    ]);

    // const userInterviews = await getInterviewByUserId(user?.id);
    // const latestInterviews = await getLatestInterviews({userId: user?.id!})

    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterviews?.length > 0;
  return (
    <>
        <section className="card-cta">
            <div className="flex flex-col gap-6 max-w-lg">
                <h2> Get Interview-Ready with AI-powered Practice & Feedback</h2>
                <p className="text-lg">
                    Practice on real interview questions and get real feedback
                </p>
                <Button asChild className="btn-primary max-sm:full">
                    <Link href="/interview"> Start an Interview</Link>
                    {/*<Link href="/interview"> Start an Interview</Link>*/}
                </Button>
            </div>
            <Image src="/robot.png" alt="robot-dude" width={400} height={400} className="max-sm:hidden" />
        </section>
        <section className="flex flex-col gap-3 mt-8">
            <h2 > Your Interviews </h2>
            <div className="overflow-x-auto whitespace-nowrap p-4 no-scrollbar ">
                <div className="flex gap-4">
                        {
                            hasPastInterviews ? (
                                userInterviews?.map((interview) =>
                                    (
                                        <InterviewCard {...interview} key={interview.id} />
                                    ))) :  (
                                <p> You haven&apos;t taken any interviews yet</p>
                            )
                        }
                </div>
            </div>
        </section>
        <section className="flex flex-col gap- mt-8">
            <h2> Take an Interview </h2>
            <div className="overflow-x-auto whitespace-nowrap p-4 no-scrollbar ">
                <div className="flex gap-4">
                    {
                        hasUpcomingInterviews ? (
                            latestInterviews?.map((interview) =>
                                (
                                    <InterviewCard {...interview} key={interview.id} />
                                ))) :  (
                            <p>There are no new interviews available</p>
                        )
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default page
