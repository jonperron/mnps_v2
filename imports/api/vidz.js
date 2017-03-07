import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Dildos = new Mongo.Collection('pedr0');

if (Meteor.isServer) {
  Meteor.publish('pedr0', function tasksPublication() {
    return Dildos.find();
  });
}

Meteor.methods({
	'pedr0.insert'(linkz) {
		check(linkz, String);

		Dildos.insert({
			linkz,
			createdAt: new Date(),
			createdBy: Meteor.users.findOne(this.userId).username,
		})
	},
	'pedr0.remove'(vidzID) {
		check(vidzID, String);
		Dildos.remove(vidzID);
	}
});