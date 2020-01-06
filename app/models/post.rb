class Post < ApplicationRecord
  mount_uploader :image, ImageUploader

  def self.search(search)
    return Post.all unless search
    Post.where('text LIKE(?)', "%#{search}%")
  end
  # validates :text,:title,:image,:name, presence: true

end
