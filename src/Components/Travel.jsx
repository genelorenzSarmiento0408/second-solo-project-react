export default function Travel({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  description,
  startDate,
  endDate,
}) {
  return (
    <div className="container">
      <img src={imageUrl} alt={`${title}`} />
      <div className="card">
        <div className="UpperPart">
          <div className="maps">
            {location && (
              <div className="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.99855 8.80005C4.45086 8.80005 3.19882 7.54657 3.19882 6.00018C3.19882 4.4546 4.45086 3.20005 5.99855 3.20005C7.5457 3.20005 8.79882 4.4546 8.79882 6.00018C8.79882 7.54657 7.5457 8.80005 5.99855 8.80005M5.83974 0C2.58514 0 0 2.74355 0 6.12763C0 10.7409 4.94606 15.508 4.94606 15.508C5.6115 16.1381 6.02486 16.1894 6.73236 15.508C6.73236 15.508 11.7333 10.7409 11.7333 6.12763C11.7333 2.74355 9.09408 0 5.83974 0"
                    fill="#F55A5A"
                  />
                </svg>
                &nbsp;
                {location.toUpperCase()}
              </div>
            )}
            {googleMapsUrl && <a href={googleMapsUrl}>View on Google Maps</a>}
          </div>
          {title && <h1 className="title"> {title} </h1>}
        </div>
        <div className="lowerPart">
          <p>
            <strong>{`${startDate} - ${endDate}`}</strong>
          </p>
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
}
