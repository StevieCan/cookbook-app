require 'unirest'

#INDEX ACTION
# response = Unirest.get("http://localhost:3000/api/recipes")
# puts JSON.pretty_generate(response.body)

#SHOW ACTION
# response = Unirest.get("http://localhost:3000/api/recipes/1")
# puts JSON.pretty_generate(response.body)

#CREATE ACTION
# response = Unirest.post("http://localhost:3000/api/recipes" , parameters: {title: "baked squirrel",
#               chef: "Uncle billy joe bob",
#               ingredients: "roadkill",
#               directions: "wakj iyt ti road and fry it",
#               prep_time: 90
#               }
#               )
# puts JSON.pretty_generate(response.body)

#UPDATE ACTION
# recipe_id = 5
# runner_params = {
#                   title: "Mud Cake!!!"

# }

# response = Unirest.patch(
#                         "http://localhost:3000/api/recipes/#{recipe_id}",
#                         parameters: runner_params)
# recipe_hash = response.body
# puts JSON.pretty_generate(recipe_hash)


#DESTROY ACTION
recipe_id = 6
response = Unirest.delete("http://localhost:3000/api/recipes/#{recipe_id}")
data = response.body
puts JSON.pretty_generate(data)


