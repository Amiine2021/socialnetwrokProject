function ProfilePic({ url, firstName, lastName, toggleUploader   }) {
    url = url || "img.png";

    return (
        <div id={"profile-pic"} onClick={toggleUploader  }>
            <img alt={`${firstName} ${lastName}`} src={url} />
            
        </div>
    );
}
export default ProfilePic;