class GenresController < ApplicationController
def index
    @genres = Genre.all
    render component: "Genres", props: {genres:@genres}
end

def show
    @genre= Genre.find(params[:id])
    @games = @genre.games
    render component: "Genre", props: {genre: @genre, games: @games}
end
end