
const DestinationCard = ({name, imageURL, notes, international}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{international}</p>
            <p>{notes}</p>
            <img src={imageURL}/>
        </div>
    )
}

export default DestinationCard