class TodoItemsController < ApplicationController
  before_action :set_todo_list
  before_action :set_todo_item, except: [:create]
  before_action :authenticate_user!
  respond_to :html, :js

  def create
    @todo_item = TodoItem.new
    @todo_item.content = params[:todo_item][:content]
    @todo_item.todo_list_id = params[:todo_list_id]
    @todo_item.save!
    if @todo_item.errors.empty?
      flash[:success] = 'Todo List item was created.'
    else
      flash[:error] = 'Todo List item could not be created.'
    end

    # byebug
    @todo_list = TodoList.find(@todo_item.todo_list_id)
    respond_with @todo_item do |format|
      format.js { render 'todo_lists/update', :todo_list => @todo_list}
    end
  end

  def destroy
    @todo_list = TodoList.find(@todo_item.todo_list_id)
    if @todo_item.destroy
      flash[:success] = 'Todo List item was deleted.'
    else
      flash[:error] = 'Todo List item could not be deleted.'
    end
    respond_with @todo_list do |format|
      format.js { render 'todo_lists/update', :todo_list => @todo_list}
    end
  end

  def complete
    @todo_item.update_attribute(:completed_at, Time.now)
    redirect_to root_url, notice: 'Todo item completed'
  end

  private

  def set_todo_list
    @todo_list = TodoList.find(params[:todo_list_id])
  end

  def set_todo_item
    @todo_item = @todo_list.todo_items.find(params[:id])
  end

  def todo_item_params
    params[:todo_item].permit(:content)
  end

  def render_todo_list_items(id)
    # @project = Project.find(id)
    # respond_to do |format|
    #   format.js { render 'projects/update' }
    # end
  end
end
