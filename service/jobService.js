import {
    jobs
} from "@/data/jobs";


export async function getJobs() {

    try {

        const data = jobs;


        return data;


    } catch (error) {

        console.error("Error fetching jobs:", error);

        return [];

    }

}