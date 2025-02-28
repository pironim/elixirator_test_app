module Subscriptions
  class TaskCreated < BaseSubscription
    field :task, Types::TaskType
    argument :project_id, ID, required: true

    def task
      object
    end
  end
end
