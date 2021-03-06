class PostsController < ApplicationController
  def index
    @posts =Post.includes(:user)
  end
  def new
    @post = Post.new
  end
  def create
    Post.create(post_params)
    redirect_to root_path
  end
  def destroy
    post=Post.find(params[:id])
    post.destroy
    redirect_to root_path
  end 
  def search
    @posts = Post.search(params[:keyword])
  end
  private
  def post_params
    params.require(:post).permit(:name,:title,:image,:text).merge(user_id: current_user.id)
  end

end
