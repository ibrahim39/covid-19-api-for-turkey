const redis = require('../../db')
const { redisKeyTimeSeries } = require('../../config')
class TimeSeriesRepository {
	constructor(redisDb, redisKey) {
		this.redis = redisDb || redis
		this.redisKey = redisKey || redisKeyTimeSeries
	}

	async getTimeSeries() {
		return await this.redis.get(this.redisKey)
	}
}

module.exports = TimeSeriesRepository
