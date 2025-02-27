module Queries
  class GetProjects < Queries::BaseQuery
    type [Types::ProjectType], null: true

    def resolve
      Project.all
    end
  end
end
