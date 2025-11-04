import { useState } from 'react';

export default function CloudinaryTestForm() {
  const [imagen, setImagen] = useState(null);

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const imageUpload = async () => {
    const data = new FormData();
    data.append('file', imagen);
    data.append('upload_preset', 'somosproject');
    data.append('folder', 'somos');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dqkrricbh/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const file = await res.json();
  };

  return (
    <>
      <input type="file" onChange={handleImageChange} />
      <button onClick={imageUpload}>Subir</button>
    </>
  );
}
