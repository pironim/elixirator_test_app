

puts "Seeding Projects and Tasks"

3.times do |project_index|
  project = Project.create!(name: "Seeded Project #{project_index}");

  2.times do |task_index|
    Task.create(name: "Seeded Task #{project_index}-#{task_index}", project: project)
  end
end
