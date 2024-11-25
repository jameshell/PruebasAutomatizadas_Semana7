// cypress/support/globalVariables.js
let pageCreationCount = 0;

module.exports = {
    getPageCreationCount: () => pageCreationCount,
    incrementPageCreationCount: () => { pageCreationCount += 1; }
};
