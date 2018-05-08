Rails.application.routes.draw do

  namespace :api do
    get '/one_recipe_url' => 'recipes#one_recipe_action'

  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
end
