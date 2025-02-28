class Task < ApplicationRecord
  belongs_to :project

  # bad idea to add it directly to model 
  # but for demo app it's fine
  # service for some operation can be better place
  after_commit :trigger_task_created_event

  private

  def trigger_task_created_event
    BackendSchema.subscriptions.trigger(
      "task_created",
      { project_id: self.project_id},
      { task: self }
    )
  end
end
