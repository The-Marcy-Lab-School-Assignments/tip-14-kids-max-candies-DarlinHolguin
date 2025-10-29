/**
 * Kids With the Greatest Number of Candies
 *
 * Given an integer array `candies` and an integer `extraCandies`, return a boolean
 * array where each element indicates whether the corresponding kid can have the
 * greatest number of candies if given all `extraCandies`.
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    let greatest = Math.max(...candies)
    return candies.map((x) => x + extraCandies >= greatest)




}
kidsWithCandies([4, 5, 6], 30)
module.exports = kidsWithCandies;