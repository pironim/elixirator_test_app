module Subscriptions
  class TaskCreated < BaseSubscription
    field :task_created, Types::TaskType, null: false

    def task_created
      object
    end
  end
end

