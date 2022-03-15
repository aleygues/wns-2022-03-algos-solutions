/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 * 
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */

// ↓ uncomment bellow lines and add your response!

/* export default function ({ students }: { students: Student[] }): Student[] {
    return students.sort((s1, s2) => {
        if(s1.age < s2.age) {
            return -1;
        } else if(s1.age > s2.age) {
            return 1;
        } else {
            if(s1.name < s2.name) {
                return -1;
            } else {
                return 1;
            }
        }
    });
} */


// used interfaces, do not touch
export interface Student {
    name: string;
    age: number;
    skills: string[];
}