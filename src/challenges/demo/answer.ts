/**
 * In this challenge, you should sort the list of topics based on their upvotes!
 * 
 * @param topics Unsorted list of topics
 * @returns Sorted list of topics
 */

// ↓ uncomment bellow lines and add your response!

/* export default function ({ topics }: { topics: Topic[] }): Topic[] {
    return topics.sort((topic1, topic2) => topic1.upvotes - topic2.upvotes);
} */


// used interfaces, do not touch
export interface Topic {
    name: string;
    upvotes: number;
}