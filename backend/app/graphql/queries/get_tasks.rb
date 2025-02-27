module Queries
  class GetTasks < Queries::BaseQuery
    type [Types::TaskType], null: true
    argument :project_id, ID, required: true

    def resolve(project_id:)
      Task.where(project_id: project_id)
    end
  end
end