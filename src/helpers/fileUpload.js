

export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/duufbbamz/image/upload';
    const formData = new FormData();
    formData.append('upload_preset','educApp');
    formData.append('file', file );

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (err) {
        throw err;
    }


    // return url de la imagen
}