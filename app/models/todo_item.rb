class TodoItem < ActiveRecord::Base
  belongs_to :todo_list

  def completed?
    !completed_at.blank?
  end

  def last?
    # byebug
    todo_list.todo_items.last==self
  end
end
