'use strict'

const JRes = require('../utils/JResponse')

class Invitee {

	static * create(db, invitee) {
		yield db('invitees').insert({
			name: invitee.name.trim(),
			email: invitee.email.trim(),
			position: invitee.position.trim(),
			skill_level: invitee.skillLevel.trim(),
			field: invitee.field.trim(),
			created_at: new Date(),
			updated_at: new Date()
		})
		.then(dbRes => {
			console.log(`Saved invitee: ${ invitee.email }`)
		})
		.catch(error => {
			console.log(`A database error occured: ${ error }`)
		})
	}

	static * get(db, id) {
		let output

		if (id == 'all') {
			output = yield db('invitees')
				.select()
				.then(dbRes => {
					return JRes.success('Successfully fetched all invitees', dbRes)
				})
				.catch(error => {
					return JRes.failure(`Failed to fetch all invitees: ${ error.code }`)
			})
		} else {
			output = yield db('invitees')
				.select()
				.where('id', id)
				.first()
				.then(dbRes => {
					if (dbRes == undefined || dbRes == null) {
						return JRes.failure('Failed to find invitee by ID')
					} else {
						return JRes.success('Successfully fetched all invitees', dbRes)
					}
				})
				.catch(error => {
					return JRes.failure(`Failed to fetch invitee: ${ error.code }`)
			})
		}

		return output
	}

	static * delete(db, id) {
		let result = yield db('invitees')
			.where('id', id)
			.del()
			.then(dbRes => {
				return JRes.success('Successfully deleted invitee')
			})
			.catch(error => {
				return JRes.failure('Failed to delete invitee')
			})

		return result
	}
}

module.exports = Invitee
