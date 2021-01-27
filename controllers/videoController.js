const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const ChatMessages = db.chat_messages;
const VideoCategories = db.video_categories;
const VideoTags = db.video_tags;
const PrivacyTypes = db.privacy_types;
const UsersVideos = db.users_videos;
const PlaylistsVideos = db.playlists_videos;

const usersController = require('../controllers/usersController');


const VideoStreams = require('../mongoose/video_streams');
const to = require('../helpers/getPromiseResult');

const Videos = db.videos;
const Playlists = db.playlists;

const sequelize = require('sequelize');
const Op = sequelize.Op;

const fse = require('fs-extra');
const path = require('path');

exports.getVideos = async (req, res) => {
    let {withPlaylists, trending, limit} = req.query;
    let ret = {};
    let limitOption = limit ? {limit: +limit} : {};
    let trendingOption = +trending ? [['views', 'DESC']] : [['created_at', 'DESC']];
    let v = await Videos.findAll({
        include: [
            {
                model: Users, as: 'user', include: [
                    {model: Channels, as: 'channel'}
                ]
            },
            {
                model: Channels,
                as: 'channel',
            },
            {
                model: Users, as: 'users_vids', attributes: ['username']
            }
        ],
        order: trendingOption,
        limitOption
    });
    ret['videos'] = v;
    if (+withPlaylists) {
        let p = await Playlists.findAll({include: [{model: Videos, as: 'videos'}]});
        ret['playlists'] = p;
    }
    res.json(ret);
};

exports.saveVideoToken = async (req, res) => {
    const data = req.body;
    const {token, name} = data;

    let v = await Videos.findOne({where: {token: token}});

    if (!v) {
        let video = await Videos.create(data);
        data.tags.map(async (t) => {
            await VideoTags.create({name: t, video_id: video.id})
        });
        res.json(video);
    } else {
        res.json('OK');
    }

    // const videoStream = await VideoStreams.findOne({token: token});
    // if (!videoStream) {
    //     const videoStreams = new VideoStreams(req.body);
    //     await to(videoStreams.save());
    // } else {
    //     console.log(req.body)
    //     console.log('name', name)
    //     videoStream.name = name;
    //     videoStream.save();
    // }

    // const user = await Users.findOne({where: {username: username}});

};


exports.saveVideoData = async (req, res) => {
    let data = req.body;
    let videoSettings = JSON.parse(data.video_settings);
    // let videoSettings = data.video_settings;
    console.log(videoSettings)


    uploadVideoStreamFile(req, res, async (err) => {


        let privacy_id = await PrivacyTypes.findOne({where: {name: videoSettings.privacy}, attributes: ['id']});

        console.log(privacy_id.dataValues)

        let d = {
            name: videoSettings.name,
            description: videoSettings.description,
            thumbnail: videoSettings.thumbnail,
            category_id: videoSettings.category_id,
            privacy_id: privacy_id.dataValues.id,
            author: data.full_name,
            avatar: data.avatar,
            filename: data.video_name,
            status: 'recorded'
        };


        let video = await Videos.findOne({where: {status: 'live', author_id: data.author_id}});
        console.log('video id')
        console.log(video)


        let userVideo = await UsersVideos.create({
            // where: {
            user_id: data.author_id,
            video_id: video.id
            // }
        });
        await Videos.update(d, {where: {status: 'live', author_id: data.author_id}});


        // let found = await to(VideoStreams.findOne({status: 'pending', username: data.username}));
        // console.log(found)
        // found.name = videoSettings.name;
        // found.description = videoSettings.description;
        // found.tags = videoSettings.tags;
        // found.thumbnail = videoSettings.thumbnail;
        // found.category = videoSettings.category;
        // found.author = data.full_name;
        // found.avatar = data.avatar;
        // found.filename = data.video_name;
        // found.status = 'recorded';
        // await found.save();

        res.json('OK');
    })

};

exports.saveVideoThumbnail = async (req, res) => {
    const data = req.body;
    const file = req.file;
    // console.log('files!!!')
    // console.log(req.file)
    uploadVideoThumbFile(req, res, async (err) => {
        res.json(file.filename)
    });
};


// exports.saveVideoMessage = async (req, res) => {
//     const {token, from, message} = req.body;
//     console.log(token)
//     const videoStream = await VideoStreams.findOne({token: token});
//     if (videoStream) {
//         videoStream.messages.push({from: from, message: message});
//         videoStream.save();
//     }
//     res.json('OK');
//     console.log(videoStream)
//
// };

exports.getCategories = async (req, res) => {
    let vc = await VideoCategories.findAll();
    res.json(vc);
};

exports.getUserVideos = async (req, res) => {
    console.log(req.query)
    // let v = await Videos.findAll({author_id: req.query.user_id});
    let v = await Users.findOne({
        where: {id: req.query.user_id},
        include: [
            {
                model: Videos, as: 'videos',
                include: [{model: Channels, as: 'channel'}, {model: Playlists, as: 'playlists', attributes: ['id']}]
            }],
    });
    res.json(v);
};

exports.getUserSavedVideos = async (req, res) => {
    console.log(req.query)
    let userWhere = {id: req.query.user_id};
    let v = await Users.findOne({
        where: userWhere,
        include: [{
            model: Videos,
            as: 'users_vids',
            where: [sequelize.where(sequelize.col('`users_vids->users_videos`.`saved`'), 1)],
            include: [{model: Channels, as: 'channel'}]
        }],

    });
    res.json(v);
};

exports.getVideoById = async (req, res) => {
    let {id, playlist_id} = req.query;
    let idWhere = {id: id};
    // let playlistWhere = playlist_id ? sequelize.where(sequelize.col(`playlists->playlists_videos.playlist_id`), playlist_id) : {};
    console.log('get video by id!!!')
    let v = await Videos.findOne({
        // where: idWhere,
        where: [idWhere],
        // where: [idWhere, sequelize.where(sequelize.col(`users_vids->users_videos.user_id`), user_id)],
        include: [
            {model: Channels, as: 'channel', attributes: ['id', 'subscribers_count', 'name', 'avatar']}, {
                model: VideoTags,
                as: 'tags'
            },
            {
                model: Users,
                as: 'users_vids',
                attributes: ['id', 'full_name', 'username'],
                // where: {id: user_id},
                // where: sequelize.where(sequelize.col(`users_vids->users_videos.user_id`), user_id),
                through: {attributes: ['liked', 'disliked', 'saved', 'viewed']}
            },
            {model: Playlists, as: 'playlists', attributes: ['id']} //where: playlistWhere
        ],
        attributes: ['id', 'likes', 'thumbnail', 'name', 'dislikes', 'views', 'filename', 'status', 'created_at']
    });
    res.json(v);
};

exports.getVideosByAuthor = async (req, res) => {
    let v = await Users.findAll({include: [{model: Videos, as: 'videos'}]});
    res.json(v);
};

exports.searchInVideosByAuthor = async (req, res) => {
    let search = req.query.search;
    let where = search ? sequelize.where(sequelize.col('`videos`.`name`'), 'like', '%' + search + '%') : {};
    let v = await Users.findAll({
        include: [{model: Videos, as: 'videos'}],
        where: where,
    });
    res.json(v);
};


exports.searchInUserVideos = async (req, res) => {
    let {user_id, search} = req.query;
    let where = search ? sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%') : {};
    let v = await Users.findOne({
        include: [{
            model: Videos, as: 'videos',
            where: where
        }],
        where: {
            id: user_id
        },
    });
    res.json(v);
};

exports.searchInAllVideos = async (req, res) => {
    let {search} = req.query;
    let v = await Videos.findAll({
        where: sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%'),
        include: [{model: Channels, as: 'channel'}, {model: Playlists, as: 'playlists', attributes: ['id']}]
    });
    res.json(v);
};


exports.updateLikes = async (req, res) => {
    let data = req.body;
    const {user_id, video_id, likes, dislikes, likeStatus} = data;


    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    console.log(found)

    if (!found) {
        await UsersVideos.create({...data, disliked: likeStatus === 'disliked', liked: likeStatus === 'liked'});

    } else {
        await UsersVideos.update({disliked: likeStatus === 'disliked', liked: likeStatus === 'liked'}, {
            where: {
                user_id: user_id,
                video_id: video_id
            }
        });
    }
    await Videos.update({dislikes: dislikes, likes: likes}, {where: {id: video_id}});
    res.json('OK');
};


exports.updateViews = async (req, res) => {
    let data = req.body;
    const {user_id, video_id} = data;

    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    if (!found) {
        await UsersVideos.create({...data, viewed: 1});
    } else {
        await UsersVideos.update({viewed: 1}, {
            where: {
                user_id: user_id,
                video_id: video_id
            }
        });
    }

    await Videos.increment({views: 1}, {where: {id: video_id}});
    req.query.id = video_id;
    this.getVideoById(req, res);
};

exports.saveVideo = async (req, res) => {

    let data = req.body;
    const {user_id, video_id, saved} = data;
    console.log(data)

    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    let ret;
    if (!found) {
        ret = await UsersVideos.create(data);

    } else {
        console.log('update')
        found.saved = saved;
        console.log(found)
        ret = await found.save();
        // await UsersVideos.update({saved: saved}, {
        //     where: {
        //         user_id: user_id,
        //         video_id: video_id
        //     }
        // });
    }
    res.json(ret);
};


exports.removeVideo = async (req, res) => {
    let data = req.query;
    let {id, token, filename} = data;
    console.log('remove video!!!')
    console.log(req.query)

    let file = path.join(path.join(__dirname, '../public/uploads/videos/') + filename);
    let removeResult;
    if (await fse.exists(file)) {
        removeResult = await to(fse.remove(file));
    }
    if (!removeResult) {
        if (id) {
            await to(PlaylistsVideos.destroy({where: {video_id: id}}));
            await to(UsersVideos.destroy({where: {video_id: id}}));
            await to(Videos.destroy({where: {id: id}}));
            await to(ChatMessages.destroy({where: {video_id: id}}));
            if (data.bigFileDetected) {
                res.status(423).json({msg: 'File size exceeds maximum size of 3Mb'})
            } else {
                await usersController.getUserInfo(req, res);
            }
            // removing live video by token
        } else if (token) {
            let v = await to(Videos.findOne({where: {token: token, status: 'live'}}));
            await to(ChatMessages.destroy({where: {video_id: v.id}}));
            await to(UsersVideos.destroy({where: {video_id: v.id}}));
            await to(Videos.destroy({where: {token: token, status: 'live'}}));
            res.json('removed live video');
        }
    }

};


exports.removeVideoThumbnail = async (req, res) => {

};
