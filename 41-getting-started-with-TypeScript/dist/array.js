"use strict";
// 41-5 Apply types for array and get error for type mismatch
const salary = 7500;
const friendSalaries = [7500, 12300, 19200, 9400, 8300];
const friends = ['Mohammad', 'Noman', 'Sezan', 'Faruque'];
friendSalaries[0] = 10500;
friendSalaries.push(15900);
// friendSalaries[4]='9890'
// friendSalaries.push('439875')
friends.push('Baki');
friends[2] = 'Zareen';
// friends.push(345);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
