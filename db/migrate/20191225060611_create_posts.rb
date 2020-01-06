class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :title
      t.text :image
      t.string :text
      t.timestamps
    end
  end
end
