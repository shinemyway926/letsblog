/*!
 * NodeBlog
 * Entity model defination of user (2015-02-09T15:48:30+0800)
 * Released under MIT license
 */

'use strict';

var EntityModel = require('./_entity-model');
module.exports = new EntityModel([
	{
		name: 'userid',
		type: 'int',
		isPrimaryKey: true,
		isDbGenerated: true,
		isUpdateIgnored: true
	},
	{ name: 'username', isUpdateIgnored: true },
	{ name: 'password', isUpdateIgnored: true },
	{ name: 'groupid', type: 'int' },
	'nickname',
	'email',
	{ name: 'regtime', type: 'date', isUpdateIgnored: true },
	{ name: 'lastactivity', type: 'date', isUpdateIgnored: true },
	{ name: 'lastip', isUpdateIgnored: true },
	{ name: 'totalarticles', type: 'int', isUpdateIgnored: true, isDbGenerated: true },
	{ name: 'totalcomments', type: 'int', isUpdateIgnored: true, isDbGenerated: true }
]);