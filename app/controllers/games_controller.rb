class GamesController < ApplicationController
  before_action :get_genre


  def show
@genre = Genre.find(params[:genre_id])
@game = @genre.games.find(params[:id])
    puts @game
render component: "Game", props:{game: @game} 
end

def new

  render component: "GameNew", props: {genre: @genre}
end

#Parameters: {"game"=>{"name"=>"asfdfdfdf"}, "genre_id"=>"23"}
def create
 game = @genre.games.new(game_params)
 if (game.save)
  redirect_to genre_path(@genre)
 else
  render component: "GameNew", props: {genre: @genre, topic: @topic}
 end


 def edit
  @games = @genre.games.find(params[:id])
 render component: "GameEdit" , props:{genre:@genre} 

end

end



private

def get_genre
  @genre = Genre.find(params[:genre_id])
end

def game_params
  params.require(:game).permit(:name, :body, :price) 
end

end
