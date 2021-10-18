import { getNowPlaying } from '@lib/spotify';

export default async function handler(_, res) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  console.log(song);

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_Playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const artisttype = song.item.artists
    .map((_artist) => _artist.type)
    .join(', ');
  const artistUrl = song.item.artists
    .map((_artist) => _artist.external_urls.spotify)
    .join(', ');
  const songUrl = song.item.external_urls.spotify;
  const album = song.item.album.name;
  const albumImageUrl = song.item.album[0].url;
  const albumType = song.item.album.album_type;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    albumType,
    isPlaying,
    title,
    artist,
    artisttype,
    artistUrl,
    songUrl,
  });
}
