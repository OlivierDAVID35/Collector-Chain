const { Nft } = require('../models');

module.exports = {
    async randomUniqueToken() {
        const foundToken = await Nft.findAllByColumn('token');
        let isFind;
        let token;
        do {
            token = Math.random() * (100000000000000000 - 0) + 0;
            // eslint-disable-next-line no-loop-func
            isFind = foundToken.find((e) => e === token);
        } while (isFind);
        return token;
    },
};
