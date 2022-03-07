let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let usersController = require('../controllers/usersController');
let groupChatController = require('../controllers/chat_mongo/groupChatController');
let groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');


exports.setSeen = async (data, io) => {
    console.log('set seen')

    let {group_name} = data;

    console.log('group seen!!!', group_name)
    await to(groupChatController.updateSeen(data));
    data.group_messages = await groupChatController.getGroupMessages(
        {return: true, group_id: data.group_id}
    );
    io.sockets.in(group_name).emit('getSeen', data)
}

exports.setTyping = async (data, io) => {

    let {group_name} = data;

    // console.log('typing', groupsUsers)
    // console.log(await io.in(group_name).allSockets());
    // io.to(group_name).emit('getTyping', data)
    io.sockets.in(group_name).emit('getTyping', data)
}

exports.sendMessage = async (data, io) => {
    let {group_name} = data;
    data.group_messages = await groupChatController.saveGroupMessage(data);
    console.log('GROUP MESSAGE!!!', group_name)
    io.to(group_name).emit('newMessage', data)
}

exports.getConnectedGroupMembers = async ({group_name, username}, usersGroups, io) => {
    let onlineMembers = [];
    Object.values(usersGroups).map(uGroups => {
        if (uGroups.chat_groups.find(cg => cg === group_name)) {
            onlineMembers.push(uGroups.username);
        }
    });
    let socketId = h.getSocketId(username);
    console.log(socketId, onlineMembers)
    // console.log(await io.in(group_name).allSockets());
    // console.log("online", getConnectedUserNames(usersGroups))
    io.to(group_name).emit('onGetOnlineMembers', {group: group_name, members: onlineMembers})
}

exports.setNewGroup = async ({username, ...data}, usersGroups, socket, io) => {
    let userGroups = usersGroups[username]?.chat_groups || [];
    console.log(username, usersGroups, userGroups)
    console.log('set new group', data, userGroups)
    let newGroupName = data.name;

    if (!userGroups?.find(g => g === newGroupName)) {
        userGroups?.push(newGroupName);
        socket.join(newGroupName);
    }

    let groupUsernames = h.getGroupUsernames(newGroupName);
    io.to(newGroupName).emit('onGetOnlineMembers', {members: groupUsernames, group: newGroupName})
}