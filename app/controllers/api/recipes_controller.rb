class Api::RecipesController < ApplicationController
  # def one_recipe_action
  #   @recipe = Recipe.first
  #   render 'one_recipe_view.json.jbuilder'
  # end
  def index
    @recipes = Recipe.all
    render 'index.json.jbuilder'
  end
  def show
    recipe_id = params[:id]
    @recipe = Recipe.find(recipe_id)
    render 'show.json.jbuilder'
  end
  def create
    @recipe = Recipe.new(
                        title: params[:title],
                        chef: params[:chef],
                        ingredients: params[:ingredients],
                        directions: params[:directions],
                        prep_time: params[:prep_time]
                        )
    @recipe.save
    render 'show.json.jbuilder'
  end
  def update
    recipe_id = params[:id]
    

    @recipe = Recipe.find(recipe_id)
    @recipe.title = params[:title] || @recipe.title
    @recipe.chef = params[:chef] || @recipe.chef
    @recipe.ingredients = params[:ingredients] || @recipe.ingredients
    @recipe.directions = params[:directions] || @recipe.directions
    @recipe.prep_time = params[:prep_time] || @recipe.prep_time

    @recipe.save
    render 'show.json.jbuilder'
  end

  def destroy
    recipe_id = params[:id]
    @recipe = Recipe.find(recipe_id)
    @recipe.destroy
    render json: {message: "Recipe successfully destroyed"}
  end

end
