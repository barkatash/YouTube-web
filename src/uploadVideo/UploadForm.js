
import React, { useState } from 'react';
import './UploadForm.css'

function UploadForm() {
    const [videoUrl, setVideoUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Video URL:', videoUrl);
        console.log('Title:', title);
        console.log('Description:', description);
        // Here you would typically handle the submission
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 text-center">
            <div className="mb-3 d-inline-block mx-auto w-75">
                <label className="form-label">Video URL:</label>
                <input type="text" className="form-control" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />
            </div>
            <div className="mb-3 d-inline-block mx-auto w-75">
                <label className="form-label">Title:</label>
                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="mb-3 d-inline-block mx-auto w-75">
                <label className="form-label">Description:</label>
                <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary">Upload Video</button>
            </div>
        </form>
    );
}

export default UploadForm;






// function UploadForm() {
//     const [videoUrl, setVideoUrl] = useState('');
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Video URL:', videoUrl);
//         console.log('Title:', title);
//         console.log('Description:', description);
//         // Here you would typically handle the submission
//     };

//     return (
//         <form onSubmit={handleSubmit} className="mt-4">
//             <div className="mb-3">
//                 <label className="form-label">Video URL:</label>
//                 <input type="text" className="form-control" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Title:</label>
//                 <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Description:</label>
//                 <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Upload Video</button>
//         </form>
//     );
// }

// export default UploadForm;






// function UploadForm() {
//     const [videoUrl, setVideoUrl] = useState('');
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Video URL:', videoUrl);
//         console.log('Title:', title);
//         console.log('Description:', description);
//         // Here you would typically handle the submission e.g., send to a backend or directly to YouTube via API
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Video URL:
//                     <input type="text" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />
//                 </label>
//             </div>
//             <div>
//                 <label>Title:
//                     <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
//                 </label>
//             </div>
//             <div>
//                 <label>Description:
//                     <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
//                 </label>
//             </div>
//             <button type="submit">Upload Video</button>
//         </form>
//     );
// }

// export default UploadForm;

