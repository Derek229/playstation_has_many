Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root "genres#index"
resources :genres do 
    resources:games
end


# genres/:genre_id/games', to games#index
end
