import YoutubeMusicApi from 'youtube-music-api';
const { spawn } = require('child_process');
export class MeldManager {
  searches = []
  api: any
  constructor() {
    this.api = new YoutubeMusicApi();
    this.api.initalize();
  }
  async searchSong(query: string) {
    try {
      this.api.initalize()
        .then(() => {
          this.api.search(query, 'song').then((result: any) => console.log(result));
        }).catch((err: any) => {
          console.log('An error');
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async searchVideo(query: string) {
    try {
      const result = await this.api.search(query, 'video').then((result: any) => console.log(result));
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }

  }
  async searchAlbum(query: string) {
    try {
      const result = await this.api.search(query, 'album').then((result: any) => console.log(result));
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }

  }
  async searchArtist(query: string) {
    try {
      const result = await this.api.search(query, 'artist').then((result: any) => console.log(result));
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }

  }
  async searchPlaylist(query: string) {
    try {
      const result = await this.api.search(query, 'playlist').then((result: any) => console.log(result));
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }

  }
}



export async function ytdlGetAudioURL(query: String) {
  return new Promise((resolve, reject) => {
    const ls = spawn(`youtube-dl`, [`ytsearch1:${query}`, '--get-url', '--extract-audio']);
    ls.stdout.on('data', (data: any) => {
      console.log(`stdout: ${data}`);
      resolve(data)
    });
    ls.stderr.on('data', (data: any) => {
      reject(data)
      console.error(`stderr: ${data}`);
    });

  })
}
