Rails.application.routes.draw do

  namespace :api do
    # get '/one_recipe_url' => 'recipes#one_recipe_action'
    get '/recipes' => 'recipes#index'
    get '/recipes/:id' => 'recipes#show'
    post '/recipes' => 'recipes#create'
    patch '/recipes/:id' => 'recipes#update'
    delete '/recipes/:id' => 'recipes#destroy'
  end
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"
end
