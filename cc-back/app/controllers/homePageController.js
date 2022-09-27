module.exports = {
    displayHomePage(_, res) {
        // res.sendFile('../cc-front/index.html', {});
        res.sendFile('../cc-front/index.html', { root: __dirname });
    },
};
