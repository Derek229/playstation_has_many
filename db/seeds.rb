# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


Genre.destroy_all
Game.destroy_all


5.times do
 genre = Faker::Game.genre
 g = Genre.create(name: "#{genre}")
 4.times do 
  g.games.create(name:Faker::Game.title, body:Faker::Games::WorldOfWarcraft.quote, price: 59.99)
 end
end