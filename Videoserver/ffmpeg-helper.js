const ffmpeg = require('fluent-ffmpeg')
const { start } = require('repl')

module.exports = {
    convertToHls: async (file) =>{
        return new Promise((resolve) =>{
            ffmpeg(file, { timeout: 432000 }).addOptions([
                '-profile:v baseline', 
                '-level 3.0',
                '-s 640x360', //width*height
                '-start_number 0',
                '-hls_time 10', //10 second segment
                '-hls_list_size 0', //max number of playlist entries
                '-f hls'
            ]).output(`./source-m3u8/output.m3u8`).on('end',resolve).run()
        });
    }
}