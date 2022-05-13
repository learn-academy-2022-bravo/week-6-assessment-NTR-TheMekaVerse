# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: 

        Step 1: Determine the name of the foreign key that will be in the Student model, connected to the Cohort model via its primary key column. Best practice in this case would be to name the foreign key cohort_id.

        Step 2: rails g migration AddCohortIdToStudents cohort_id:number

        Step 3: rails db:migrate

    Step 2 creates the instance, step 3 actually adds it to the database. Following these steps you would need to create the has_many in the Cohort model, and belongs_to in the Student model.


  Researched answer:

        Migration names can be in PascalCase or snake_case. Following the command 'rails g migration' there should be a verb that describes the purpose of the migration. In this case:   'AddCohortIdToStudents'. If the desired key-value pairs are not included in the command line for the initial generation, they may be added to the change method that will be found in the migration file in a particular order (change definition :table_name, :column_name, :data_type) --> add_column :students, :cohort_id, :number . 

        Finally 'rails db:migrate' to update the schema.



2. Which RESTful routes must always be passed params? Why?

  Your answer: Show, update and destroy require parameters to be passed because they are the actions that act on a single instance within a database. "Show" a single entry / "Update" a single entry / "Delete" a single entry. The need to be passed params act sort of as protection for the database, preventing from updating and destroying multiple entries inadvertently.

  Researched answer:

    - SHOW --> lists only one item in a model
    - UPDATE --> modifies one item in a model
    - DESTROY --> removes one item in a model

  All of the above require parameters because they are controller actions that can only occur on a single instance at a time. Without parameters the actions will not get carried out because the controller will need further information about what item to act on. Convention over configuration gives us these guidelines so as to not completely mangle a database.



3. Name three rails generator commands. What is created by each?

  Your answer:

    A) rails g model -- This instructs the rails app to create a model,named according to what comes right after the word model and containing whatever key-value pairs that may be listed after the model name. (Preps for the creation of the database)

    B) rails g controller -- This tells Rails to establish corresponding controller(s) for the model(s) that are a part of an application. The controller is required for functionality of the app because it is where instructions are provided on what and how to execute actions in the API.

    C) rails g resources -- An extremely useful tool for having Rails automatically generate MVC routes for your application.


  Researched answer:

    Generators save a lot of time by avoiding writing boilerplate code from scratch.

    - model --> Creation of the class within the application that is able to interact with a database via Active Record

    - controller --> this creates the 'V' and 'C' of 'MVC'; additionally test, helper, javascript, and stylesheet files are created.

    - resource (singular) --> this one command sets up almost everything needed when beginning a new app. It establishes the model, migration, controller, and routes.

    OTHERS:

    - rspec
    - migration
    - scaffold



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students    
- controller method: index
- action: query the entire database

action: "POST"   location: /students   
- controller method: create
- action: establishes a new entry into the Student database  

action: "GET"    location: /students/new
- controller method: new
- action: Prompts for entry of data that will occupy a new space in the database (doesn't actually create the entry)

action: "GET"    location: /students/2  
- controller method: show
- action: isolates the entry from Student model with the primary key id of 2; the number 2 is the param passed to the show method

action: "GET"    location: /students/2/edit  
- controller method: edit
- action: Prompts for entry of data to be updated on a specific instance (doesn't actually change the entry) 

action: "PATCH"  location: /students/2  
- controller method: update
- action: modifies the entry from Student model with the primary key id of 2    

action: "DELETE" location: /students/2      
- controller method: delete
- action: deletes the entry from Student model with the primary key id of 2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

  - As a user, I want to create a to-do list.
  - As a user, I want to create another to-do list.
  - As a user, I want to categorize each to-do list.
  - As a user, I want to priotize items on my to-do list.
  - As a user, I want to add tasks to my to-do list.
  - As a user, I want to delete tasks from my to-do list.
  - As a user, I want to add task specific details that will be visible when I select the task (i.e. dropdown).
  - As a user, I can add a due or complete-by date to each task.
  - As a user, I can setup an alert reminder for when a task is due within a specified time period.
  - As a user, I can see tasks greyed out and line through when marked as complete.
  
  Stretch:
   - As a user, I can see a colored indicators next to dated tasks that correspond with time to complete (i.e. green (plenty of time), orange (due date approaching), red (overdue))

  
