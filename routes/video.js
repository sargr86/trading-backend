const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/save-video-token', videoController.saveVideoToken);
router.post('/save-video-data', uploadVideoStreamFile, videoController.saveVideoData);
router.post('/save-video-thumbnail', uploadVideoThumbFile, videoController.saveVideoThumbnail);
router.delete('/remove-video-thumbnail', uploadVideoThumbFile, videoController.removeVideoThumbnail);
router.post('/save-video-message', uploadVideoStreamFile, videoController.saveVideoMessage);
router.get('/get-user-videos', videoController.getUserVideos);
router.get('/get-categories', videoController.getCategories);
router.get('/get-video-by-id', videoController.getVideoById);
router.get('/get-videos-by-author', videoController.getVideosByAuthor);
router.get('/search-in-videos-by-author', videoController.searchInVideosByAuthor);
router.get('/search-in-user-videos', videoController.searchInUserVideos);
router.get('/get', videoController.getVideos);
router.put('/update-likes', videoController.updateLikes)
module.exports = router;
