module Types
  class SubscriptionType < Types::BaseObject

    field :task_created, resolver: Subscriptions::TaskCreated

  end
end