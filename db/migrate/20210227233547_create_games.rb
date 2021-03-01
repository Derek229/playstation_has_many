class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.text :body
      t.string :price
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
