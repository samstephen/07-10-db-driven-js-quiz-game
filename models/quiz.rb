require_relative "../database_class_methods.rb"
require_relative "../database_instance_methods.rb"

class Quiz
  extend DatabaseClassMethods
  include DatabaseInstanceMethods

  attr_reader :id
  attr_accessor :question, :choices, :right_answer

  # Initializes a new user object.
  #
  # user_options - Hash containing key/values.
  #   - id (optional)   - Integer of the user record in the 'users' table.
  #   - name (optional) - String of the user's name.
  #
  # Examples:
  #
  #   Meal.new({ "id" => 1, "meal" => "Breakfast" })
  #   Meal.new({ "id" => 2, "meal" => "Lunch" })
  #   Meal.new({ "id" => 3, "meal" => "Dinner" })
  #   Meal.new({ "id" => 4, "meal" => "Snack" })
  #
  # Returns a Category object.
  def initialize(options={})
    @id = options["id"]
    @question = options["question"]
    @choices = options["choices"]
    @right_answer = options["right_answer"]
  end

end






