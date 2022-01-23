import './movieDetail.css';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

export default function MovieDetail({data}) {
    return (
        <div className="card-item">
            <div className="card-inne">
                <div className="card-top">
                    <img src={IMG_PATH + data.poster_path} alt={data.title} />
                </div>
            </div>
            <div className="card-bottom">
                <div className="card-info">
                    <h4>{data.title}</h4>
                    <p>{data.release_date}</p>
                </div>
            </div>
        </div>
    )
}
