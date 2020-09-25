const { redis } = require('../../db')
const { redisKeyLatestReport } = require('../../config')

class LatestService {
	constructor(redisDb, redisKey) {
		this.redis = redisDb || redis
		this.redisKey = redisKey || redisKeyLatestReport
	}

	async getLatestReport() {
		return await this.redis.get(this.redisKey)
	}
}

module.exports = LatestService