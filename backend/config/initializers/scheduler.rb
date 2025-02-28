require 'rufus-scheduler'

scheduler = Rufus::Scheduler.new

scheduler.every '2m' do
  CreateTasksJob.perform_later
end