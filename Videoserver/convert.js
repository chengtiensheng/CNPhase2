const ffmpegHelper = require('./ffmpeg-helper');
(async () =>{
    await ffmpegHelper.convertToHls('./source-mp4/Sponge.mp4');
})();