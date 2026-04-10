// import { useEffect, useState } from "react";
//
// export function App() {
//     const [selectedTrackId, setSelectedTrackId] = useState(null);
//     const [selectedTrack, setSelectedTrack] = useState(null);
//     const [tracks, setTracks] = useState(null);
//
//     // useEffect(() => {
//     //     fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
//     //         headers: {
//     //             'api-key': 'adc5d65d-6203-48ff-af5e-4c82ede366f0'
//     //         }
//     //     })
//     //         .then(res => res.json())
//     //         .then(json => setTracks(json.data));
//     // }, []);
//
//     // useEffect(() => {
//     //     if (!selectedTrackId) {
//     //         return;
//     //
//     //     }
//     //     fetch(
//     //         'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId,
//     //         {
//     //             headers: {
//     //                 'api-key': 'adc5d65d-6203-48ff-af5e-4c82ede366f0'
//     //             }
//     //         }
//     //     )
//     //         .then(res => res.json())
//     //         .then(json => setSelectedTrack(json.data));
//     // }, [selectedTrackId])
//
//     if (tracks === null) {
//         return (
//             <div>
//                 <h1>Musicfun Player</h1>
//                 <span>Loading</span>
//             </div>
//         );
//     }
//
//     if (tracks.length === 0) {
//         return (
//             <div>
//                 <h1>Musicfun Player</h1>
//                 <span>No tracks</span>
//             </div>
//         );
//     }
//
//
//     return (
//         <div>
//             <h1>Musicfun Player</h1>
//
//             <button
//                 onClick={() => {
//                     setSelectedTrackId(null);
//
//                 }}
//             >
//                 RESET SELECTION
//             </button>
//
//             <div
//                 style={{
//                     display: "flex",
//                     gap: "50px"
//                 }}
//             >
//                 <ul>
//                     {tracks.map((track) => {
//
//
//                         return (
//                             <li
//                                 key={track.id}
//                                 style={{
//                                     border:
//                                         track.id === selectedTrackId
//                                             ? '1px solid green'
//                                             : 'none'
//                                 }}
//                             >
//                                 <div
//                                     onClick={() => {
//                                         setSelectedTrackId(track.id);
//
//                                     }}
//                                 >
//                                     {track.attributes.title}
//                                 </div>
//
//                                 <audio
//                                     src={track.attributes.attachments[0].url}
//                                     controls
//                                 ></audio>
//                             </li>
//                         );
//                     })}
//                 </ul>
//
//                 <div>
//                     <h2>Details</h2>
//
//                     {!selectedTrack  &&  !selectedTrackId && 'Track is not selected'}
//                     {!selectedTrack  && selectedTrackId && 'Loading...'}
//                     {selectedTrack  && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...'}
//                     {selectedTrack &&
//                         <div>
//                             <h3>{selectedTrack.attributes.title}</h3>
//                             <h4>Lyrics</h4>
//                             <p>
//                                 {selectedTrack.attributes.title.lyrics ?? 'no lyrics'}
//                             </p>
//                         </div>
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }
//
