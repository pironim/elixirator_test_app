class CreateTasksJob < ActiveJob::Base
  def perform
    # inefficient and + it can be moved to service object for testing
    Project.all.each do |project|
      task = Task.create(
        project: project,
        name: "Job Generate New Task #{formatted_time}"
      )

      # ApplicationSubscription.trigger("taskCreated", {}, { task: task })
    end
  end

  def formatted_time
    Time.now.iso8601
  end
end