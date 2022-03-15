/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!
// Version explicite, c'est "votre objectif"
export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
    const groupsWithSkills: GroupWithSills[] = ([]); // []

    for (const group of groups) {
        const groupSkills: string[] = [];

        for (const student of group.students) {
            for (const skill of student.skills) {
                if (groupSkills.includes(skill) === false) {
                    groupSkills.push(skill);
                }
            }
        }

        // sort et reverse = modifie tableau de base
        groupSkills.sort();

        groupsWithSkills.push({
            name: group.name,
            students: group.students,
            skills: groupSkills
        });
    }

    return groupsWithSkills;
}

// Version synthétique "clever-code"
/* export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
    return groups.map((group) => ({
        ...group,
        skills:
            group.students.reduce(
                (groupSkills, student) =>
                    groupSkills
                        .concat(
                            student.skills.filter(studentSkill => groupSkills.includes(studentSkill) === false))
                , [] as string[])
                .sort()
    }));
} */


// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {
    skills: string[];
}