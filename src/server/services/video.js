const Video = require('../models/Video');
    
const addVideo = async (image, video, title, duration, visits, uploadDate, description, likes, categoryId) => {
    const video = new Video({ image, video, title, duration, visits, uploadDate, description, likes, categoryId })
    return await video.save()
};

const getVideo = async (id) => {
    return await Video.findById(id)
};

const getVideos = async () => {
    return await Video.find({})
};

const updateVideo = async (id, image, video, title, duration, visits, uploadDate, description, likes, categoryId) => {
    const video = await getVideo(id)
    if (!video)
        return null

    video.image = image
    video.video = video
    video.duration = duration
    video.image = image
    video.uploadDate = uploadDate
    video.title = title
    video.description = description
    video.visits = visits
    video.likes = likes
    video.categoryId = categoryId
    await video.save()
    return video
};
const deleteVideo = async (id) => {
    const video = await getVideo(id)
    if (!video)
        return null

    await video.remove()
    return video
};

module.exports = {
    addVideo,
    getVideo,
    getVideos,
    updateVideo,
    deleteVideo
}

