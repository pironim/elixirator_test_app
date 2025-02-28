module Types
  class SubscriptionType < Types::BaseObject

    field :on_task_created, resolver: Subscriptions::TaskCreated

  end
end