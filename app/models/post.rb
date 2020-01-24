class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user

  def self.search(search)
    return Post.all unless search
    Post.where('text LIKE(?)', "%#{search}%")
  end

end
