class Task < ApplicationRecord
  belongs_to :project

  # bad idea to add it directly to model 
  # but for demo app it's fine
  # service for some operation can be better place
  after_create :trigger_task_created_event

  private

  def trigger_task_created_event
    # Subscriptions::ApplicationSubscription.trigger("onTaskCreated", {}, { task: self })
    BackendSchema.subscriptions.trigger("task_created", {}, { task: self })
  end
end
