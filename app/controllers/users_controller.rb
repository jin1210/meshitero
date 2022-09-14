class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @post_imaes = @user.post_images
  end

  def edit
  end
end
