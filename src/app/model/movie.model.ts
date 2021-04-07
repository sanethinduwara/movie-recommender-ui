export class Movie {

    movieId: number;
    movieTitle:string;
    IMDbURL: string;
    releaseDate: string;
    rating: number;
    imageUrl: string;
    Action: string;
    Adventure: string;
    Animation : string;
    Childrens: string;
    Comedy: string;
    Crime : string;
    Documentary: string;
    Drama: string;
    Fantasy: string;
    FilmNoir : string;
    Horror : string;
    Musical: string;
    Mystery: string;
    Romance : string;
    SciFi : string;
    Thriller: string;
    War: string;
    Western: string;

    constructor(movieId: number, movieTitle: string, IMDbURL: string, releaseDate: string, rating: number, imageUrl: string,
        Action: string, Adventure: string, Animation : string, Childrens: string, Comedy: string, Crime : string,
        Documentary: string, Drama: string, Fantasy: string, FilmNoir : string, Horror : string, Musical: string, 
        Mystery: string, Romance : string, SciFi : string, Thriller: string, War: string, Western: string){
        this.movieId = movieId;
        this.movieTitle = movieTitle;
        this.IMDbURL = IMDbURL;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.Action = Action;
        this.Adventure = Adventure;
        this.Animation = Animation;
        this.Childrens = Childrens;
        this.Comedy = Comedy;
        this.Crime = Crime;
        this.Documentary =Documentary;
        this.Drama = Drama;
        this.Fantasy = Fantasy;
        this.FilmNoir = FilmNoir;
        this.Horror = Horror;
        this.Musical = Musical;
        this.Mystery = Mystery;
        this.Romance = Romance;
        this.SciFi = SciFi;
        this.Thriller = Thriller;
        this.War = War;
        this.Western = Western;
    }
}
