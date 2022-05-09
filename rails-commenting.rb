# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This line establashes the class of 'BlogPostsController' which serves as the controller, or what I like to think of as the switchboard, of a Rails application. The methods are the switches and when a switch is "flipped" it tells the application what to do. The BlogPostsController class is inheriting its properties from the parent 'ApplicationController'.
class BlogPostsController < ApplicationController
  def index
    # ---2) Posts is an instance variable, identifiable by the '@' symbol preceeding the word. This makes 'posts' accessible from outside of the method it is instantiated in. The value assigned to @posts is the entirety of the model, or database, called BlogPost.
    @posts = BlogPost.all
  end

  # ---3) This is the beginning of a method called 'show' whose job in the controller is to single out an instance from the BlogPost model. Specifically, this line is where the method is being "defined".
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The method being defined here is 'new', whose purpose is to communicate the creation of a new entry into the database that it is connected to. 'New' readys the database for the incoming entry, it does not take in the information that will be associated with the new entry. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The @post instance variable, singular because it will only handle a single entry at a time, is assigned the BlogPost.create action which takes in the information that will be associated with a new database entry. 'BlogPost' is a call to the specific model, .create is the action, and the 'blog_post_params' passes the criteria for a new entry to the method that this line of code is contained in.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) In this particular method the @post instance variable is assigned the action of finding a specific instance within the BlogPost model. It is able to do this by being passed a primary key value, which in this case is a unique number in the 'id' field of the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line of code prompts an update to the database to be made by checking it agains the 'blog_post_params' criteria defined outside of this method. The singular @post indicates that this action can only take place on a single entry at a time. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The built in function 'redirect_to' will instruct the controller to send the user back to the single instance of the blog post that was passed to it in line 53 if the previous conditional is not met.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The word private is used to provide protection of any code listed below it from being accessed outside of the class in which it is instantiated.
  private
  def blog_post_params
    # ---10) Considered an action controller parameter, the params.require() specifies which database can be affected and the .permit() specifies what attributes of the database are allowed to be updated.
    params.require(:blog_post).permit(:title, :content)
  end
end
